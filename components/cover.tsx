import React from 'react'

const Cover = () => {
  return (
    <div className='cover-container'>
      <video className='video' src='/videoCode.mp4' loop autoPlay muted />
      <h1>Lucas Bianchi</h1>
      <p>Front-end developer | Estudiante de Ingeniería Industrial</p>
    </div>
  )
}

export default Cover