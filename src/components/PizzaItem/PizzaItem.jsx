import { useState } from 'react';
import './PizzaItem.css';


function PizzaItem({ pizza, getPizzas }) {

  //#region ⬇⬇ All state variables below:
  const [isAdded, setIsAdded] = useState(false);
  //#endregion ⬆⬆ All state variables above.

  //#region ⬇⬇ All event handlers below:
  /** ⬇ handleAdd functionality:
  * When the user clicks on ADD, this will flip between showing the ADD and REMOVE. 
  */
  const handleAdd = () => {
    console.log('In handleAdd, pizza:', pizza.name);
    // ⬇ Flipping state variable value on click:
    setIsAdded(!isAdded);
  }
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

        <div className="pizzaItem-button" onClick={handleAdd}>
          {isAdded ? (
            <button>Remove</button>
          ) : (
            <button>Add</button>
          )}
        </div>

      </div>

    </>
  )

} // End PizzaItem


export default PizzaItem;