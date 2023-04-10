import axios from 'axios'

const headerConfig = {
    headers: {
        'x-access-token': localStorage.getItem('token')
    }
};

export const getBooks = async () => {
    let response = await axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book", headerConfig)
    return response
}





//cart Service API

export const addCartItem = async (data) => {
    let response = await axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/${data}`, data, headerConfig)
    return response
}

export const getCartItems = async () => {
    let response = await axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items", headerConfig)
    return response
}

export const modifyCartItem = async (id, data) => {
    let response = await axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${id}`, data, headerConfig)
    return response
}

export const removeCartItem = async (id) => {
    let response = await axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_cart_item/${id}`, headerConfig)
    return response
}

//Address API
export const userAddress = async (data) => {
    let response = await axios.put("https://bookstore.incubation.bridgelabz.com/bookstore_user/edit_user", data, headerConfig)
    return response
}

export const OrderAPI = async (data) => {
    let response = await axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/add/order", data, headerConfig)
    return response
}


