import React from 'react'
import Image from 'next/image'
import Photo from 'public/Photo.png'

const About = () => {
    return (
        <div className='about-container'>
            <div className='about-description'>
                <h3>Sobre mí</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt perferendis sapiente esse laudantium dolorem, tempora soluta beatae pariatur? Natus ab unde eaque, nihil porro quod voluptatem quam sit. Mollitia eveniet beatae aliquam illo vero vel consectetur, quo provident porro. Quae!</p>
            </div>
            <div className='about-image'>
                <Image src={Photo} alt='Photo' width={500} height={666} />
            </div>
        </div>
    )
}

export default About