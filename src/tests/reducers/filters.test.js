import moment from 'moment';
import filterReducers from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filterReducers(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text:'',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filterReducers(undefined, { type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount')
});

test('should set sortBy to date', () => {
    const currentFilter = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };

    const action = { type : "SORT_BY_DATE"};
    const state = filterReducers(currentFilter, action);
    expect(state.sortBy).toBe("date");
});

test('should setup text filter value', () => {
    const text = 'Coffee';
    const action = { 
        type: 'SET_TEXT_FILTER',
         text 
        };
    const state = filterReducers(undefined, action);
    expect(state.text).toBe(text)
});

test('should setup startDate value', () => {
    const startDate = moment(0)
    const action = { 
        type: 'SET_START_DATE',
        startDate
    };
    const state = filterReducers(undefined, action);
    expect(state.startDate).toEqual(startDate);
});

test('should setup endtDate value', () => {
    const endDate = moment(0)
    const action = { 
        type: 'SET_END_DATE',
        endDate
    };
    const state = filterReducers(undefined, action);
    expect(state.endDate).toEqual(endDate);
});