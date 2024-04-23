import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

    const dataContext = useContext()
  // const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (amount) => {
    // e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>

        <div className="add-choices">
          <button
            className="btn income"
            onClick={() => onSubmit(Math.abs(Number.parseInt(amount)))}
          >
            Add Income
          </button>
          <button
            className="btn expense"
            onClick={() => onSubmit(-Math.abs(Number.parseInt(amount)))}
          >
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
