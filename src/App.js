import { useState } from "react";
import BookList from "./BookList.js";
import Summary from "./Summary.js";

import "./index.css";

function App() {
  const bookPrice = 8;
  let bookRepeat = "false";
  const discount = [
    { amount: 1, discount: 0 },
    { amount: 2, discount: 5 },
    { amount: 3, discount: 10 },
    { amount: 4, discount: 20 },
    { amount: 5, discount: 25 },
  ];
  const [payment, setPayment] = useState(0);
  const [newBook, setNewBook] = useState("null");
  const [list, setList] = useState([{ title: "", amount: "", price: "" }]);

  //new book is selected
  const selectBook = (e) => {
    setNewBook(e.target.value);
  };

  const addToList = () => {
    //first book clicked rewrites the empty object
    if (list[0].title === "") {
      setList([{ title: newBook, amount: 1, price: bookPrice }]);
      setPayment(bookPrice);
    }
    //more books are added to the list
    else {
      list.map((book, index) => {
        //checking if new book is already on the list
        if (newBook === book.title) {
          bookRepeat = "true";
          let newArray = [...list];
          newArray[index].amount++;
          newArray[index].price+=bookPrice;
          setList(newArray);

          calcPayment();
        }
      });
      //new book is added to the list
      if (bookRepeat === "false") {
        setList([...list, { title: newBook, amount: 1, price: bookPrice }]);
        setPayment(payment+bookPrice);
      }
    }
  };

  const calcPayment=()=>{
    let endPayment=0;
    list.map(x=>
      endPayment+=x.price)
    setPayment(endPayment)
    }

  return (
    <div className="app">
      <BookList
        selectBook={selectBook}
        newBook={newBook}
        addToList={addToList}
      />
      <Summary list={list} payment={payment} />
    </div>
  );
}

export default App;
