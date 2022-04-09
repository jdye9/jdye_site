import React from 'react'
import HomeCard from '../components/HomeCard'
import './Home.css'

const Home = () => {

    let homecards = ['About Me', 'Resume', 'Projects', 'Contact Me']







    return (
        <div className='home-root'>
            { homecards.map((card,i) => {
                return (
                    <HomeCard index={i} title={card}/>
                )
            })}
        </div>
    )
}

export default Home