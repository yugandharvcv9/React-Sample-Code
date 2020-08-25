import React ,{useState} from 'react'

function ArrayCounter (){

    const [numbers,setNumbers] = useState([])

const    addNumber = () =>{

        setNumbers([...numbers,{
            id:numbers.length,
            value: Math.floor(Math.random()*10+1)
        }])
    }

    return (<div>
        <h1>
            <button onClick={addNumber}> Add Number</button>
            <ul>
                {numbers.map(number =>(
                    <li key ={number.id}>{number.value}</li>
                ) )}
            </ul>
        </h1>
    </div>)
}
export default ArrayCounter