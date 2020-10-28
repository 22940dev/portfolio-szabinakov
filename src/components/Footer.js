import React from 'react'

import '../styles/Footer.css'

import twitterlogo from '../pictures/twitter.png'
import instagramlogo from '../pictures/insta.png'
import linkedinlogo from '../pictures/linkedin.png'
import github from '../pictures/github.png'
import gmail from '../pictures/gmail.png'

const Footer = () => {
    return(
        <div className='footerContainer'>
        <footer>
                    <a href='https://twitter.com/szabinkov?lang=en-gb' target='blank'>
                    <img src={twitterlogo} href='www.google.com' alt='twitter'/>
                    </a>

                    <a href='https://www.instagram.com/szabinush/' target='blank'>
                    <img src={instagramlogo} alt='instagram'/>
                    </a>

                    <a href='https://www.linkedin.com/in/szabina-kov%C3%A1cs-7a0592159/' target='blank'>
                    <img src={linkedinlogo} alt='linkedin'/>
                    </a>
                    <a href='https://github.com/szabinakov' target='blank'>
                    <img src={github} alt='Github'/>
                    </a>
                    <a href='mailto:szabinkov@gmail.com'>
                    <img src={gmail} alt='Gmail'/>
                    </a>

            </footer>
            </div>
    )
}

export default Footer