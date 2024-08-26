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

        gsap.from('.hero-content > *', {
            opacity: 0,
            y: 20,
            duration: 1,
            delay: 0.5,
            ease: 'power4.out',
            stagger: 0.5,
            onComplete: () => ScrollTrigger.refresh() // Ensure scroll-triggered animations are recalculated
        });

        // Slide-in animations for the lines on page load
        gsap.fromTo(yellow,
            { x: -200, opacity: 0 },  // Start state
            { x: 0, opacity: 1, duration: 1.5, delay: 0.2, ease: 'power4.out' }  // End state, matching the initial scroll position
        );

        gsap.fromTo(blue,
            { x: 200, opacity: 0 },  // Start state
            { x: 0, opacity: 1, duration: 1.5, delay: 0.4, ease: 'power4.out' }  // End state, matching the initial scroll position
        );

        gsap.fromTo(navy,
            { y: 200, opacity: 0 },  // Start state
            { y: 0, opacity: 1, duration: 1.5, delay: 0.8, ease: 'power4.out' }  // End state, matching the initial scroll position
        );

        // Set initial positions for scroll-triggered animations to ensure continuity
        gsap.set(yellow, { x: 0 });
        gsap.set(blue, { x: 0 });
        gsap.set(navy, { y: 0 });


        gsap.to(yellow, {
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                scrub: 1,
                immediateRender: false
            },
            x: 400
        });

        gsap.to(blue, {
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                scrub: 1,
                immediateRender: false
            },
            x: -1000
        });

        gsap.to(navy, {
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                scrub: 1,
                immediateRender: false
            },
            y: 1200
        });

    }, { scope: hero })

    return (
        <section className='hero' id="hero" ref={hero}>

            <div className='hero-content'>
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