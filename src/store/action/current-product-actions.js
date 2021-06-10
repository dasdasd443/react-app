export const addQuantity = (id) => {
    return {
        type: "ADD_QUANTITY",
        payload: {
            id
        }
    }
}

export const minusQuantity = (id) => {
    return {
        type: "MINUS_QUANTITY",
        payload: {
            id
        }
    }
}