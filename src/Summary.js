const Summary = ({ list, payment }) => {
  
  return (
    <div className="summary">
      <div className="summaryText">
        <h2
          className="notEmptyText"
          style={
            list[0].title === ""
              ? { visibility: "visible" }
              : { visibility: "hidden" }
          }
        >
          Please choose books and add to your cart
        </h2>

        <div
          style={
            list[0].title !== ""
              ? { visibility: "visible" }
              : { visibility: "hidden" }
          }
        >
          <h3>Books in cart:</h3>
          {list.map((book, index) => (
            <p key={index}>
              {" "}
              {book.title} x{book.amount} {book.price}€
            </p>
          ))}

          <h4>Amount to pay: {payment}€</h4>
        </div>
      </div>
    </div>
  );
};

export default Summary;
