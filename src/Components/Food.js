import React from 'react'

const Food = (props) => {
    return (
        <div>
            <h2>{props.info.name}</h2>
            <button onClick={() => props.deleteFood(props.info.id)}>Delete</button>
        </div>
    )
}

export default Food