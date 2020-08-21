import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/filters';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();
store.dispatch(addExpense({ description: "Water bill", amount: 500, createdAt: 1000}));
store.dispatch(addExpense({ description: "Gas bill", amount: 4500, createdAt: 2500}));
store.dispatch(addExpense({ description: "Rent", amount: 109500, createdAt: 1500}));


const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"));