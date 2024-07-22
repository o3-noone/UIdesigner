import React from 'react'
import Hero from './hero/hero'
import Service from './service/service'
import Experince from './workExperince/experince'
import Hire from './hireMe/hire'

const Main = () => {
    return (
        <div className="main pt-170">
            <Hero />
            <Service/>
            <Experince/>
            <Hire/>
        </div>

    )
}

export default Main