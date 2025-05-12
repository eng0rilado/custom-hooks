export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload];
        case '[TODO] Delete Todo':
            return initialState.filter(element => action.payload !== element.id); //Filter no muta el array, devuelve uno nuevo
        case '[TODO] Toggle Todo':
            return initialState.map(todo => {
                if (todo.id === action.payload)
                    return {
                        ...todo,
                        done: !todo.done
                    }
                
                return todo;

            });

        default:
            return initialState;
    }
}

