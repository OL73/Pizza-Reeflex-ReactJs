import React from 'react'
import './OrderInterface.css'
/* import marguerita from './../img/pizzas/marguerita.jpg'
import pepperoni from './../img/pizzas/pepperoni.jpg'
import reine from './../img/pizzas/reine.jpg'
import fromages from './../img/pizzas/fromages.jpg' */


const OrderInterface = ({ image, nom, prix, ajouterPizza }) => {
    return (

        <div className="pizza-elt" onClick={ajouterPizza}>
            <div className="pizza-image">
                <img src={image} alt="" />
            </div>
            <div className="pizza-details">
                <p>{nom}</p>
                <p>{prix}</p>
            </div>
        </div>
    )
}

export default OrderInterface
