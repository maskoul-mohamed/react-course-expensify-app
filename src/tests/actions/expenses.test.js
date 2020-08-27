import configureMockStore from 'redux-mock-store';
import ReduxThunk from 'redux-thunk';
import { addExpense, editExpense, removeExpense, startAddExpense, setExpenses, startSetExpenses } from '../../actions/expenses';
import expenses from '../fixtures/expense';
import  database  from '../../firebase/firebase';

const createMockStore = configureMockStore([ReduxThunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, amount, note, createdAt }) => {
        expensesData[id] = { description, amount, note, createdAt };
    });
    database.ref('expenses').set(expensesData).then(() => done())
});
test('should setup removeExpense action object', () => {
    const action = removeExpense({id: '123abcd'});
    expect(action).toEqual({
        type:"REMOVE_EXPENSE",
        id:"123abcd"
    });
});

test('should setup editExpense action object', () => {
    const action = editExpense("123abcd", { note: 'New note value'});
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123abcd",
        updates: {
            note:'New note value'
        }
    });
});

test('should setup addExpense action object with provide values', () => {

    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[2]
    });
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 2500,
        note:'This is better.',
        createdAt: 9523045636
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done();
    });
});

test('should add expense to database and store with default values', (done) => {
    const store = createMockStore({});
    const defaulteExpense = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    };

    store.dispatch(startAddExpense()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...defaulteExpense
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(defaulteExpense);
        done();
    });
});

test('should setup set expense object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});