import logo from "./lunar-chronicles.png";
const BookList = (props) => {
  const bookSeries ="bookSeries";
  return (
    <div className="bookList">
      <div className="bookListPage">
        <div className="bookListTitle">
          <h1>Buy Lunar Chronicles books</h1>
          {/* <img src={logo} height={100} alt="lunar-chronicles"/> */}
          <h4>The more you buy, the more disscount you get!</h4>
        </div>        
        <div className="bookListText">
          <h3>Add a Book:</h3>
          <select name="selectList" id="selectList" onChange={props.selectBook}>
            <option value="null"></option>  
            <option value="Cinder">Cinder </option>
            <option value="Scarlet">Scarlet</option>
            <option value="Cress">Cress</option>
            <option value="Winter">Winter</option>
          </select>
          <br></br>
          
          <button
            style={
              props.newBook === "null"
                ? {pointerEvents: "none", cursor: "text", backgroundColor: "white" }
                : {pointerEvents: "auto", cursor: "pointer", backgroundColor: "rgb(161, 214, 250)" }
            }
            onClick={props.addToList}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookList
