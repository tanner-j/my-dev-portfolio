import React from 'react'
import { Link } from 'react-scroll'

const Hero = () => {
    return (
        <section id="hero">
            <div className="hero-background">
                <div className="heroheader">
                    <div className="heroheader-content">
                        <span className="hero-text--detail">Hello! I'm</span>
                        <h1>Tanner Johnson</h1>
                        <div className="hero-text-detail--wrapper">
                            <span className="hero-text--detail">front-end developer </span>
                            <span className="hero-text--detail">& UI/UX engineer</span>
                        </div>
                        <Link className="hero-btn--wrapper" to="about" smooth="true">
                            <button className="hero-btn">
                                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" /></svg>
                                More about me
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;