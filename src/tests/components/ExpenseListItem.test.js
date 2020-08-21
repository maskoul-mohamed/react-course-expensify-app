import React from 'react';
import { shallow } from 'enzyme';
import  ExpnseListItem  from '../../components/ExpenseListItem';
import expenses from '../fixtures/expense';

test('should render ExpenseListItem with expense', () => {
    const wrapper = shallow(<ExpnseListItem  {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});