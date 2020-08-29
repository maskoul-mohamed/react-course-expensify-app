import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expense';
import { EditExpensePage } from '../../components/EditExpensePage';

let wrapper, startEditExpense, startRemoveExpense, history;

beforeEach(() => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage 
            startEditExpense={startEditExpense}
            startRemoveExpense={startRemoveExpense}
            history={history}
            expense={expenses[2]}
        />
    );
});

test('should render EditExpense', () => {
    expect(wrapper).toMatchSnapshot();
});



test('should handle startEditExpense correctly', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should handle startRemoveExpnese correctly', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({
        id: expenses[2].id
    });
});