import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, multiplyByRandom } from "./redux/counter/counterSlice";

function App() {

  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  
  return (
    <>
      <Navbar count={count} />
      <div className="w-3/4 m-auto">
        <button onClick={()=>dispatch(decrement())} className="w-10 bg-slate-800 text-white mt-20 mr-5 ml">
          -
        </button>
        Change the counter
        <button onClick={()=>dispatch(increment())} className="w-10 bg-slate-800 text-white mt-20 ml-5">+</button>
        Multiply By Random
        <button onClick={()=>dispatch(multiplyByRandom())} className="w-10 bg-slate-800 text-white mt-20 ml-5">~</button>
      </div>
      <Footer />
    </>
  );
}

export default App;
