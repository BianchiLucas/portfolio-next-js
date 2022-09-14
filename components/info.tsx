import React, { useEffect, useState } from 'react'

const Info = () => {

    const [wind, setWind] = useState<number>(1)


    const scrollHandler = () => {
        if (typeof window !== 'undefined') {

            const position = window.scrollY

            if (position > 1200 && position <= 1350) {
                setWind(1)
            }
            if (position > 1350 && position <= 1500) {
                setWind(2)
            }
            if (position > 1500 && position <= 1650) {
                setWind(3)
            }
            if (position > 1650 && position <= 1800) {
                setWind(4)
            }
            if (position > 1800 && position <= 1950) {
                setWind(1)
            }
            if (position > 1950 && position < 2100) {
                setWind(2)
            }
            if (position > 2100 && position < 2250) {
                setWind(3)
            }
            if (position > 2250 && position < 2400) {
                setWind(4)
            }
            if (position > 2400 && position < 2550) {
                setWind(1)
            }
            if (position > 2550 && position < 2700) {
                setWind(2)
            }
            if (position > 2700 && position < 2850) {
                setWind(3)
            }
            if (position > 2850 && position < 3000) {
                setWind(4)
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)
    }, [wind])

    return (
        <div className='info-container'>
            <div className="info">
                <h1 className={`${wind === 1 ? 'uno' : ''}`}> &#60; &#47; &#62; </h1>
                <h1 className={`${wind === 2 ? 'dos' : ''}`}> &#60; &#45; &#62; </h1>
                <h1 className={`${wind === 3 ? 'tres' : ''}`}> &#60; &#92; &#62; </h1>
                <h1 className={`${wind === 4 ? 'cuatro' : ''}`}> &#60; &#124; &#62; </h1>
            </div>
        </div >
    )
}

export default Info