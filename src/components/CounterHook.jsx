import React,{useState} from 'react'

function CounterHook (){

   // const[test] =useState(0);
     const[count,setCount] = useState(0);
     console.log(useState(0));
    
 return (<div>
     <h1>With Hooks</h1>
 <h1>you clicked {count} times</h1>

 <button onClick={()=>setCount(count+1)}> ClickMeUp</button>
 <button onClick={()=>setCount(count-1)}> ClickMeDown</button>
 </div>)
     
}

export default CounterHook;