import React from 'react'
import Projects from './Projects'
import '../styles/Home.css'

const Home = () => {
    return(
        <>
        <div data-testid='introContainer' className='introContainer'>
            <div data-testid='helloDiv' className='helloDiv'>
                <h1>Hello,</h1>
            </div>
            <div data-testid='myNameDiv' className='myNameDiv'>
                <p className='myName'>My name is Szabina!</p>
            </div>
            <div data-testid='aboutContainer' className='aboutContainer'>
                and I am a Software Engineer.
            </div>
        </div>
        <Projects/>
        </>

    )
}

export default Home