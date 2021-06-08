export const increment = (id) => {
    return {
        type: 'INCREMENT',
        payload: {
            id: id
        }
    }
}

export const decrement = (id) => {
    return {
        type: 'DECREMENT',
        payload: {
            id: id
        }
    }
}