import React from 'react'
import "./BookCartQuantity.css"
import { removeCartItem, modifyCartItem } from '../../Services/DataServices';

function BookCartQuantity({ setAddToBagToggle, bookObj, getCartItemsAndUpdte }) {

    const calculateQuantity = async (props) => {
        let count
        if (props === 'Plus') {
            count = {
                quantityToBuy: bookObj.quantityToBuy + 1,
            };

        } else {

            if (bookObj.quantityToBuy === 1) {
                removeItem()
            } else {
                count = {
                    quantityToBuy: bookObj.quantityToBuy - 1,
                };
            }
        }

        let response = await modifyCartItem(bookObj._id, count)
        //console.log(response)
        getCartItemsAndUpdte()
    };

    const removeItem = async () => {
        let response = await removeCartItem(bookObj._id)
        setAddToBagToggle(true)
        console.log(response)
    }

    return (

        <div className='Increment_Decrement'>
            <button id='Minus' onClick={() => { calculateQuantity("Minus") }}  >-</button>
            <div id='Count'>{bookObj.quantityToBuy}</div>
            <button id='Plus' onClick={() => { calculateQuantity("Plus") }}>+</button>
        </div>

    )
}

export default BookCartQuantity
