import React from 'react'
import { BsLinkedin, BsGithub, BsFillFileEarmarkPersonFill } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer className='footer'>

            <div className="footer-info">
                <h1>Lucas Bianchi</h1>
                <p>Avellaneda, Santa Fe, Argentina</p>
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
                    <a href="https://drive.google.com/file/d/1KkYYZ27pLZGoB9gP6N_iJyWNx6RlpXyU/view?usp=sharing" target="_blank" rel='noreferrer'>
                        <BsFillFileEarmarkPersonFill className='BsFillFileEarmarkPersonFill' />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
