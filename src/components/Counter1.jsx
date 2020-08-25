import React, { useState } from 'react';

function Counter1() {

    const initialCount = 0

    const [count, setCount] = useState(0)

    const increaseByTwo = () => {

        for (let i = 0; i < 2; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }
   return (
       <h1>
           Count : {count}
           <p>
            <button onClick = {()=> setCount(initialCount)}>Reset</button>
            <button onClick = {()=> setCount(prevCount=>prevCount+1)}>Increase</button>
            <button onClick = {()=> setCount(prevCount=>prevCount-1)}>Decrease</button>
            <button onClick = {increaseByTwo}>Increase By Two</button>
           </p>
       </h1>
   )

}
export default Counter1