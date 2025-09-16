import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const SecondVideo = () => {
  const videoRef = useRef(null)

  useGSAP(() => {
    ScrollTrigger.matchMedia({
      '(min-width: 769px)': function () {
        gsap.set('.second-vd-wrapper', { opacity: 0, marginTop: '-100vh' })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.second-vd-wrapper',
            start: 'top top',
            end: '+=150%',
            scrub: true,
            pin: '.second-vd-wrapper',
            markers: false,
          },
        })

        tl.to('.second-vd-wrapper', { opacity: 1, ease: 'power1.inOut' })
        videoRef.current.onloadedmetadata = () => {
          tl.to(
            videoRef.current,
            { currentTime: videoRef.current.duration, duration: 3, ease: 'power1.inOut' },
            '<'
          )
        }
      },

      '(max-width: 768px)': function () {
        gsap.set('.second-vd-wrapper', { opacity: 0, marginTop: '-40vh' })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.second-vd-wrapper',
            start: 'top top',
            end: '+=110%',
            scrub: true,
            pin: '.second-vd-wrapper',
            markers: false,
          },
        })

        tl.to('.second-vd-wrapper', { opacity: 1, ease: 'power1.inOut' })
        videoRef.current.onloadedmetadata = () => {
          tl.to(
            videoRef.current,
            { currentTime: videoRef.current.duration, duration: 2, ease: 'power1.inOut' },
            '<'
          )
        }
      },
    })
  })

  return (
    <section className='second-vd-wrapper overflow-hidden' >
      <div className='second-vd-container'>
        <video
          ref={videoRef}
          src="/videos/output2.mp4"
          className='second-vd-video'
          muted
          loop
          playsInline
          preload='auto'
        />
      </div>
    </section>
  )
}

export default SecondVideo