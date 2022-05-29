import React, { useContext, useState, useEffect } from "react"
const CircleContext = React.createContext()
export function useCircle() {
  return useContext(CircleContext)
}

const initialData = [
  {
    color: "sky",
    id: 1
  },
  {
    color: "crimson",
    id: 2
  },
  {
    color: "lightgreen",
    id: 3
  },
  {
    color: "teal",
    id: 4
  },
  {
    color: "purple",
    id: 5
  },
]


export function CircleProvider({ children }) {
  const [emptyDivData, setEmptyDivData] = useState([]);
  const [circleData, setCircleData] = useState(initialData);

  const moveCircle = (circle) => {
    const filteredData = deleteCircle(circleData, circle.id)
    setCircleData(filteredData);
    setEmptyDivData([...emptyDivData, circle])
    //  let temp = [];
    //  to.forEach(el=>{
    //       if(circle.id !== el.id) temp.push(el);
    //  })

  }
  const handleMove = (id) => {
    if (isNaN(id)) return;
    if (id < 1 || id > circleData) return;
    if (circleData.length === 0) return;
    circleData.forEach(circle => {
      if (circle.id === id) moveCircle(circle);
    })
  }
  const deleteCircle = (state, id) => {
    return state.filter((el) => el.id !== id)
  }

  const moveBack = (circle) => {
    const filteredData = deleteCircle(emptyDivData, circle.id)
    setEmptyDivData(filteredData);
    let temp = [...circleData, circle].sort((a, b) => a.id - b.id)
    setCircleData(temp)
  }
  const value = {
    emptyDivData, circleData, handleMove, moveBack
  }

  return (
    <CircleContext.Provider value={value}>
      {children}
    </CircleContext.Provider>
  )
}