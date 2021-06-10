const Favorites = (state = [], action) => {
    switch(action.type){
        case 'ADD_TO_FAVORITES':
            state.push(action.payload.item);
            return state;
        default:
            return state
    }
}

export default Favorites;