import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Cover from '../components/cover'
import Navbar from '../components/navbar'
import About from '../components/about'
import Slider from 'components/slider'

const Home: NextPage = () => {

  const [scroll, setScroll] = useState(false)
  const scrollHandler = () => {
    if (window.scrollY >= 100) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
  }, [scroll])

  return (
    <div >
      <Head>
        <title>Lucas Bianchi</title>
        <meta name="description" content="Lucas Bianchi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar isScrolling={scroll} />
      <Cover />
      <About />
      <Slider />

    </div>
  )
}

export default Home
