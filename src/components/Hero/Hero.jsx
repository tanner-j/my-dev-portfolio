import React, { useRef } from 'react'
import { Link } from 'react-scroll'
import './Hero.scss'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Hero = () => {

    const hero = useRef();

    useGSAP(() => {
        let yellow = document.querySelector(".hero-container--yellow .hero-line");
        let blue = document.querySelector(".hero-container--blue .hero-line");
        let navy = document.querySelector(".hero-container--navy .hero-line");

        gsap.to(yellow, {
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                scrub: 1
            },
            x: 400
        });

        gsap.to(blue, {
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                scrub: 1
            },
            x: -1000
        });

        gsap.to(navy, {
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                scrub: 1
            },
            y: 1200
        });

    }, { scope: hero })

    return (
        <section className='hero' id="hero">

            <div className='hero-content' data-scroll data-scroll-speed="0.1">
                <h1 className='hero-content--h1'>
                    Hi, my<br /> name is <b>Tanner</b>
                    <span>.</span>
                </h1>
                <p className='hero-content--text'>
                    I'm a <b>front-end developer</b> and <b>UI/UX engineer</b> from Denver, Colorado.
                </p>
            </div>

            {/* Line elements */}
            <div className='hero-container--blue'>
                <div className='hero-line'></div>
            </div>
            <div className='hero-container--navy'>
                <div className='hero-line'></div>
            </div>
            <div className='hero-container--yellow'>
                <div className='hero-line'></div>
            </div>

        </section>
    )
}

export default Hero;