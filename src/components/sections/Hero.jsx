import React from 'react'
import CommingSoon from './CommingSoon'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useMaskSettings } from '../../../constants'

const Hero = () => {

    const { initialMaskPos, initialMaskSize, maskPos, maskSize } = useMaskSettings() 

    useGSAP(() => {



        gsap.set('.mask-wrapper', {
            maskPosition: initialMaskPos,
            maskSize: initialMaskSize,
            
        })

        gsap.set('.mask-logo',{
            marginTop: '-100vh',
            opacity:0
        })


        gsap.set('.entrance-message',{
          marginTop: '0vh',
        })
      
        // setting up timeline

        const tl = gsap.timeline({

            scrollTrigger: {
                trigger: '.hero-section',
                start: 'top top',
                end: '+=200%',
                scrub: true,
                markers: true,
                pin:true 
            }


        })

        tl
        .to('.fade-out',{
            opacity:0,
            ease:'power2.inOut'
        })
        .to('.scale-out',{
            scale:1,
            width:'100%',
            ease:'power2.inOut'
        })
        




    })

  return (
    <section className='hero-section'>

        <div className="size-full mask-wrapper ">

            <img src="/images/hero-bg.webp" className='scale-out scale-custom'/>

            <img src="/images/hero-text.webp" className='title-logo fade-out' />

            {/* <img src="/images/" className='trailer-logo fade-out' /> */}



            <div className='play-img fade-out'>
                <img src="/images/play.png" className='w-7 ml-1' />
            </div>


        </div>

        <div>
            <img src="/images/big-hero-text.svg" className='object-cover size-ful mask-logo' />


        </div>
        <div>
            <img src="/images/big-hero-text.webp"
            className='overlay-logo' />
        </div>


    <CommingSoon/>
    </section>
  )
}

export default Hero