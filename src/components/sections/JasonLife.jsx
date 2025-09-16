import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const JasonLife = () => {

useGSAP(()=>{

  gsap.set('.jason-life-section',{
    marginTop:'-100vh'
  })
  
    const tl1 = gsap.timeline({

        scrollTrigger: {
            trigger: '.jason-life-section',
            start: 'top 80%',
            end: ' 5% center',
            scrub: 2,
            markers: true,
            
        }


    })

    tl1
    .to('.first-vd',{
      opacity:0,
      ease:'power1.inOut'
    })
    
    gsap.to('.img-box',{
      scrollTrigger:{
        trigger: '.jason-life-section',
        start:'top center',
        end:'80% center',
        scrub: 2,
        markers: true,
      },y:-200,duration:1,ease:'Power1.inOut'
    },'<')

})



    return (
    <section className='jason-life-section '>
      <div className='jason-life-container '>

        <div className='jason-life-content '>
         <div className='jason-life-content-text space-y-8 p-20'>
         <h2 className='whitespace-nowrap'>Jason Duval</h2>
          <h3>Jason wants an easy life, but things just keep getting harder.</h3>
          <p>Jason grew up around grifters and crooks. After a stint in the Army trying to shake off his troubled teens, he found himself in the Keys doing what he knows best, working for local drug runners. It might be time to try something new.</p>
         </div>


         <div className='jason-1  img-box mt-[400px]'>
            <img className='' src="/images/jason-1.webp" alt="Jason in vehicle" />
          </div>

         
        </div>

       

        <div className='jason-life-gallery '>
          
          
          <div className='jason-2 mt-[-100px]'>
            <img src="/images/jason-2.webp" alt="Jason with gun" />
          </div>
          
          <div className='jason-3 img-box'>
            <img src="/images/jason-3.webp" alt="Jason at bar" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default JasonLife