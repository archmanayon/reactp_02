import {useState} from "react";

export default function Counter (){

    const [rate_,setRate_] = useState(1);
    const [count,setCount] = useState(0);
    const [input_box, setInput_box] = useState('');
    
    function increase_ (){
        console.log(rate_);
        setRate_(rate_ + 1);
    }

    function decrease_ (){

        setRate_(rate_ - 1);
    }

    function compute_ (){

        setCount(count + rate_);
    }

    function deduct_ (){

        setCount(count - rate_);
    }

    function onSub(value){
        console.log(value);
    }

    function on_change(value){

        setInput_box(value);
        setRate_(input_box);
        console.log(value);

    }

    return <div>
       
        
        {/* <form onSubmit={(e)=>(onSub(e.target.value))}>
           <input onChange={(e)=>onSub(e.target.value)} type="number" value={input_box}/>
        </form> */}

        <input onChange={(e)=>on_change(Number(e.target.value))} type="number" value={rate_}/>
        
        <div> <button onClick={increase_}> +</button> </div>

        <div> <button onClick={decrease_}> -</button> </div>

        <h2>preparation: {rate_}</h2>
        <button onClick={compute_}> click to add! </button>
        <h1>Counter: {count}</h1>
        <button onClick={deduct_}> click to deduct! </button>
    </div>
}