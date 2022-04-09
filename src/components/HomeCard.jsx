import React from 'react'
import './HomeCard.css'

const HomeCard = (props) => {

    let title = props.title
    let index = props.index

    return (
        <div className='homecard-root grow' style={{ backgroundColor: index % 2 === 0 ? 'white' : '#BF9f9f'}}>
            <div className='card-title' style={
                { 
                    color: index % 2 === 0 ? 'white' : '#BF9f9f',
                    backgroundColor: index % 2 === 0 ? '#BF9f9f' : 'white'
                }}> {title} </div>
                <div className='homecard-content' style={{ backgroundColor: index % 2 === 0 ? '#BF9f9f' : 'white'}}></div>
        </div>
    )
}

export default HomeCard