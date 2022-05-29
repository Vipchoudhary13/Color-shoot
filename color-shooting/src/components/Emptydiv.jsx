import { useCircle } from "../context/circleContext";

export const Emptydiv = () => {
    const { emptyDivData, moveBack } = useCircle();

    return <div>
        <h3>Empty div</h3>
        <div className="emplty-div">
            <div className="circles-sub-cont">
                {emptyDivData.map(circle => {
                    const classes = `cirles ${circle.color} empty-circles`;
                    return <div key={circle.id} className={classes} onClick={() => moveBack(circle)} id={circle.id}>{circle.id}</div>
                })}
            </div>
        </div>
    </div>
}

