import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer className='footer'>

            <div className="footer-info">
                <h1>Lucas Bianchi</h1>
                <p>Avellaneda, Santa Fe</p>
            </div>

            <div className="footer-sns">
                
                <div className="footer-contact">
                    <p>Contacto</p>
                </div>

                <div className="sns-links">
                    <a href="https://www.linkedin.com/in/bianchilucasgabriel/" target="_blank" rel='noreferrer'>
                        <BsLinkedin className='BsLinkedin' />
                    </a>
                    <a href="https://github.com/BianchiLucas" target="_blank" rel='noreferrer'>
                        <BsGithub className='BsGithub' />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
