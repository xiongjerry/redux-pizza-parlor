import { useState } from 'react';


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
      {/* <div onClick={handleAdd}>
        {isAdded ? (
          <div>
            <img className="GalleryItem-image" src={image.url} />
          </div>
        ) : (
          <div>
            <div className="GalleryItem-description">
              <h5>{image.title}</h5>
              <br /> <br />
              <p>{image.description}</p>
            </div>
          </div>
        )}
      </div> */}
      <div>
        <img src="/images/pizza_photo.png" />
        <h1>Test test test</h1>
      </div>

    </>
  )

} // End PizzaItem


export default PizzaItem;