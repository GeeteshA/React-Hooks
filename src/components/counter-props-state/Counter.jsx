import react, {useState} from "react";
import CounterDisplay from "./CounterDisplay.jsx";

function Counter (){
    const [count, setCount] = useState(0);
    //function that will provide increment
    const increment = () => {setCount(count+1)}
    //function that will provide decrement
    const decrement = () => {setCount((count-1))}
    return (
        <div className="text-center p-5 border-[#ddd] border-[1px]">
            <h1>Counter Component</h1>
            {/*Counter display component */}
            <CounterDisplay count={count}/>
            <div>
                <button onClick={increment} className="m-3 px-4 py-2 border-black border-[2px] rounded-lg bg-yellow-300">+</button>
                <button onClick={decrement}  className="m-3 px-4 py-2 border-black border-[2px] rounded-lg bg-yellow-300">--</button>
            </div>
        </div>
    )
}
export default Counter;