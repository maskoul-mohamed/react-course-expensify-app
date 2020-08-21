import { addExpense, editExpense, removeExpense } from '../../actions/expenses';


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
    const expenseData = {
        description: "Coffee",
        note:'',
        amount: 500,
        createdAt: 2000

    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup addExpense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});