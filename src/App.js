import { useState } from 'react'
import './App.css';


function App() {
  let [count,setCount] = useState(0);
if (count < 0 ) {
   count = 0  }
  return (
    <div>
      <button onClick={() => setCount(count +1)}>
        <p> добавь +1</p>
      </button>
      <br />
      <span>получилось = {count} </span>
      <br />
      <button onClick={() => setCount(count -1)}>
        <p> отними -1</p>
      </button>
      
    </div>
  )}
  


export default App;
