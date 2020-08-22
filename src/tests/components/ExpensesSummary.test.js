import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expense';

test('should render ExpensesSummary without data correctly',() => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={250} />);
    expect(wrapper).toMatchSnapshot();
});


test('should render ExpensesSummary with data correctly',() => {
    const wrapper = shallow(<ExpensesSummary expenseCount={55} expensesTotal={52062331325}/>);
    expect(wrapper).toMatchSnapshot();
});
