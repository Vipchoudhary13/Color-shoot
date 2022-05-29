import { useState } from "react"
import { useCircle } from "../context/circleContext";

export const Shootbtn = (props) => {
    const [num, setNum] = useState("");
    const { handleMove} = useCircle();
    const handleChange = (e) => {
        setNum(e.target.value);
    }

    const handleClick = () => {
         handleMove(+num)
    }
  
    return <div className="shoot-cont">
        <input onChange={handleChange} type="number" />
        <button onClick={handleClick} className="shoot-btn">Shoot</button>
    </div>
}