import React from 'react'
import Image from 'next/image'
import Photo from 'public/Photo.jpg'
const About = () => {
    return (
        <div className='about-container'>
            <div className='about-description'>
                <h3>Sobre mí</h3>
                <p>Estudiante avanzado de Ingeniería Industrial y Frontend React developer jr. <br />Actualmente realizando mi Proyecto Final de Carrera y enfocado en consolidarme como desarrollador FullStack. <br />Formado en ingeniería en la Facultad UTN FRSF, y como developer gracias a trabajar en conjunto con Innovare Software y a plataformas como Linkedin Learning, FreeCodeCamp y The Odin Project. <br />Conocimiento en JavaScript, TypeScript y Node.js. Experiencia en React y Next.js. Librerías como Material UI, Tailwindcss y Styled-components. Express, JWT, Redux Toolkit, Mongoose y GraphCMS.</p>
            </div>
            <div className='about-image'>
                <Image src={Photo} alt='Photo' />
            </div>
        </div>
    )
}

export default About