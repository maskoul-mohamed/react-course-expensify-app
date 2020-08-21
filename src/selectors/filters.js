import moment from 'moment';


 export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMatch = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMatch, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMatch, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        
        return textMatch && startDateMatch && endDateMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy ==='amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
};