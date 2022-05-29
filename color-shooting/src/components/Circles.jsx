import { useState } from "react"
import { useCircle } from "../context/circleContext"

export const Circles = () => {
    const {circleData} = useCircle()
    return <div className="circles-main-cont">
        <h3>5 circles</h3>
        <div className="circles-sub-cont">
            {circleData.map(circle => {
                  const classes = `cirles ${circle.color}`;
                  return <div key={circle.id} className={classes}  id={circle.id}>{circle.id}</div>
            })}
        </div>
    </div>
}