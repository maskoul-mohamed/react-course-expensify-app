import moment from 'moment';

export default [
    {
        id: '1',
        description: 'Coffee',
        note:'',
        amount: 500,
        createdAt: 0
    },
    {
        id: '2',
        description: 'PC',
        note:'',
        amount: 50000,
        createdAt: moment(0).subtract(5, 'days').valueOf()       
    },
    {
        id: '3',
        description: 'Credit Card',
        note:'',
        amount: 4500,
        createdAt: moment(0).add(5, 'days').valueOf()
    }
]