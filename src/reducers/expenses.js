const defaultExpensesReducer = []

export default (state = defaultExpensesReducer, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];  
        case 'REMOVE_EXPENSE': 
               return state.filter((expense) => {
                    if(action.id !== expense.id){
                        return expense
                    }
                });

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            });
        default:
            return  state
    }
};