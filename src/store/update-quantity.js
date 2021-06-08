import Images from "../components/exportFiles/exportImages";

let images = new Images();

let initialState = [
    {id: 1,itemName: "Philips Hue 7W BR30 Connected Downlight Lamp",image: images.Phillips(), price: 499, quantity: 0},
    {id: 2,itemName: "Apple Macbook Pro", image: images.AppleMac(), price: 499, quantity: 0}
]
const updateQuantity = (state = initialState, action) => {
    switch(action.type){
        case "CHECKOUT_PRODUCT_INCREMENT":
            return state.map(item => {
                return (item.id === action.payload.id)?{...item, quantity: item.quantity + 1}: {...item};
            });
        case "CHECKOUT_PRODUCT_DECREMENT":
            return state.map( item => {
                return (item.id === action.payload.id && item.quantity > 0)?{...item, quantity: item.quantity - 1}: {...item}
            });
        default:
            return state;
    }
}

export default updateQuantity;