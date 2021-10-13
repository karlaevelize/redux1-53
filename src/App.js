import './App.css';
import Students from './components/Students';
import Subjects from './components/Subjects';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAmount } from "./store/balance/selectors"
import { deposit, reset } from "./store/balance/actions"
import { selectFavoritesWithSubjects } from "./store/selectors"

function App() {

  const [ quantity, setQuantity ] = useState(0)
  // console.log("quantity", quantity)

  const amount = useSelector(selectAmount)
  // console.log("amount", amount)

  //cross slice selector
  const favoritesWithSubjects = useSelector(selectFavoritesWithSubjects)
  console.log("ful", favoritesWithSubjects)

  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>My Redux App</h1>
      <p><b>Balance:</b> {amount}</p>
      <button onClick={() => dispatch(deposit(10))}>Deposit 10</button><br/><br/>
      <button onClick={() => dispatch(reset())}>Reset Account</button><br/><br/>
      Another amount: <input value={quantity} onChange={(event) => setQuantity(event.target.value)}/>
      <button onClick={() => {
        dispatch(deposit(parseInt(quantity)))
        setQuantity("")
      }}>OK</button>
      {/* <Students/> */}
      <Subjects/>
    </div>
  );
}

export default App;
