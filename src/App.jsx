import react from 'react';
import Counter from "./components/counter-props-state/Counter.jsx";
import UseState from './components/hooks/UseState.jsx';


const App =() => {
    return (
        <div>
            <Counter/>
            <UseState/>
        </div>
    )
}
export default App;