import React from 'react'

import htmllogo from '../pictures/HTML-logo.png'
import csslogo from '../pictures/CSS-logo.png'
import reactlogo from '../pictures/React-logo.png'
import nodelogo from '../pictures/Nodejs-logo.png'
import jslogo from '../pictures/JS-logo.png'
import mysqllogo from '../pictures/MySQL-logo.png'

import '../styles/Home.css'

const Home = () => {
    return(
        <>
        <div data-testid='introContainer' className='introContainer'>
            <div className='innerDiv'>
            <div data-testid='helloDiv' className='helloDiv'>
                <h1>Hello,</h1>
            </div>
            <div data-testid='myNameDiv' className='myNameDiv'>
                My name is Szabina!
            </div>
            <div data-testid='engineerContainer' className='engineerContainer'>
                and I am a Software Engineer.
            </div>
            <div data-testid='longAbout' className='longAbout'>
                I have just finished my coding course with Manchester codes, which
                I have started in March 2020.
                Learnt HTML, CSS, Javascript, React, Node.js, Express.js, MySQL.<br/>
                Right now I am looking for my first position as a Software Engineer or any exciting projects,
                where I can deepen my skills and gain some new one.<br/>If you have any suggestion please send me a message.  
            </div>
            <div data-testid='logoContainer' className='logoContainer'>
                <a href='https://html.com/' target='blank'>
                <img className='logoImg' src={htmllogo} alt='HTML-logo'/>
                </a>
                <a href='https://www.w3.org/Style/CSS/Overview.en.html' target='blank'>
                <img className='logoImg' src={csslogo} alt='CSS-logo'/>
                </a>
                <a href='https://www.javascript.com/' target='blank'>
                <img className='logoImg' src={jslogo} alt='Javascript-logo'/>
                </a>
                <a href='https://reactjs.org/' target='blank'>
                <img className='logoImg' src={reactlogo} alt='React-logo'/>
                </a>
                <a href='https://nodejs.org/en/' target='blank'>
                <img className='logoImg' src={nodelogo} alt='Nodejs-logo'/>
                </a>
                <a href='https://www.mysql.com/' target='blank'>
                <img className='logoImg' src={mysqllogo} alt='MySQL-logo'/>
                </a>
            </div>
            </div>
        </div>
        </>

    )
}

export default Home