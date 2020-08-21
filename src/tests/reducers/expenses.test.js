import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expense';

test('should setup default expense value', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]); 
});

test('should remove expense by id', () => {
    const action = { 
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = { 
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '2358',
        description: 'Travle to Norway',
        note:'',
        amount: 30000,
        createdAt: moment().endOf('year').valueOf()
    };
    const action = { 
        type: 'ADD_EXPENSE',
        expense
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit expense by id', () => {
    const description =  'Ice Coffee';
    const action = { 
        type: 'EDIT_EXPENSE',
        id: '1',
        updates: {
            description
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe(description);
});

test('should not edit expense if id not found', () => {
    const description =  'Ice Coffee';
    const action = { 
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});