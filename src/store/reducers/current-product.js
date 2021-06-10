let initialState = {
    id: 1,
    itemName: "Beats on Solo2 On Ear Headphones",
    color: "Black",
    size: "XS",
    favorite: 0,
    quantity: 0
}
const updateCurrentProductQuantity = (state = initialState, action) => {
    switch(action.type){
        case "ADD_QUANTITY":
            console.log(5);
            return {...state, quantity: state.quantity + 1}
        case "MINUS_QUANTITY":
            return (state.quantity > 0)? {...state, quantity: state.quantity - 1}: state;
        default:
            return state;
    }
}

export default updateCurrentProductQuantity;