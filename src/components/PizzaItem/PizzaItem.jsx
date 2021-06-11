import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './PizzaItem.css';


function PizzaItem({ pizza, getPizzas }) {

  //#region ⬇⬇ All state variables below:
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);
  //#endregion ⬆⬆ All state variables above.

  //#region ⬇⬇ All event handlers below:
  /** ⬇ addToCart functionality:
  * When the user clicks on ADD, this will send the pizza ato the cart reducer. 
  */
  const addToCart = () => {
    console.log('In addToCart, pizza:', pizza.name);
    // ⬇ Sending pizza to shopping cart reducer:
    dispatch({
      type: 'ADD_TO_CART',
      payload: pizza
    }) // End dispatch
    // ⬇ Flipping to show ADD or REMOVE on click:
    setIsAdded(!isAdded);
  } // End addToCart

  /** ⬇ removeFromCart functionality:
  * When the user clicks on REMOVE, this will remove the pizza ato the cart reducer. 
  */
  const removeFromCart = () => {
    console.log('In removeFromCart, pizza:', pizza.name);
    // ⬇ Removing pizza to shopping cart reducer:
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: pizza
    }) // End dispatch
    // ⬇ Flipping to show ADD or REMOVE on click:
    setIsAdded(!isAdded);
  } // End removeFromCart
  //#endregion ⬆⬆ All event handlers above.


  return (
    <>
      <div className="pizzaItem-wrapper">

        <div className="pizzaItem-image">
          <img src="/images/pizza_photo.png" height="100px" />
        </div>

        <div className="pizzaItem-description">
          <h3>{pizza.name}</h3>
          <p>{pizza.description}</p>
          <p>${pizza.price}</p>
        </div>

        <div className="pizzaItem-button">
          {isAdded ? (
            <button onClick={removeFromCart}>Remove</button>
          ) : (
            <button onClick={addToCart}>Add</button>
          )}
        </div>

      </div>

    </>
  )
} // End PizzaItem


export default PizzaItem;