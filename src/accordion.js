import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { faRibbon } from '@fortawesome/free-solid-svg-icons';
import './Accordion.css';
import { useRef, useState } from 'react';
import { gsap } from 'gsap';

function Accordion() {
    const [openAccordion, setOpenAccordion] = useState(null);
  const accordionRefs = useRef([]);

const handleAccordionClick = (index) => {;
  if (index === openAccordion) {
    gsap.to(accordionRefs.current[index].querySelector('.poem__text'), 
    {
        height: 0,
        duration: 1,
        ease: 'power1.inOut',
        onComplete: () => setOpenAccordion(null),
      }
    );
  } else {
      if (openAccordion !== null) {
        gsap.to(accordionRefs.current[openAccordion].querySelector('.poem__text'), {
          height: 0,
          duration: 1,
          ease: 'power1.inOut',
        }
      );
    }
    setOpenAccordion(index);
    gsap.fromTo(accordionRefs.current[index].querySelector('.poem__text'), 
      { height: 0 },
      {
        height: 'auto',
        duration: 1,
        ease: 'power1.inOut',
      }
    );
  }
};

return (
    <div className='poem__container'>
        <div className={`poem poem__first ${openAccordion === 0 ? 'open' : ''}`}
        ref = {(el) => (accordionRefs.current[0] = el)}
        >
          <div className='final__place first__place'>
            <FontAwesomeIcon icon={faMedal} />
            1<sup>st</sup> Place</div>
          <div className='poem__header'
          onClick = {() => handleAccordionClick(0)}
          >
            <div className='poem__title'>There’s a Sanctuary in My Heart/I Belong</div>
            <div className='poem__author'>by Taylor Goodwin</div>
          </div>
          <div className='poem__text'>
          I have learned to make sacred space amongst flowers.<br />
          Instead of forcing my way down insecure alleys and imbecilic city streets, <br />
          I find myself in iridescent, hypnotic rivers and streams. <br />
          I am armed with ballads no one can ever take from me. <br />
          <br />
          Tears I weep seep into the soil below my feet. <br />
          <br />
          I bring myself back to nature <br />
          in the most genuine way I know:<br />
          I hydrate, I plant, I grow. <br />
          <br />
          Heaving breaths <br />
          coalesce <br />
          with the lubdub <br />
          of my heart <br />
          until they become one.<br />
          <br />
          I taught myself to speak <br />
          sow my own poems <br />
          lull me to sleep. <br />

          </div>
        </div>
        <div className={`poem poem__second ${openAccordion === 1 ? 'open' : ''}`}
        ref = {(el) => (accordionRefs.current[1] = el)}
        >
          <div className='final__place second__place'>
          <FontAwesomeIcon icon={faAward} /> 
            2<sup>nd</sup> Place
          </div>
          <div className='poem__header'
          onClick = {() => handleAccordionClick(1)}
          >
            <div className='poem__title'>I Belong (To The Trees)</div>
            <div className='poem__author'>by Ruth Reid</div>
          </div>            
          <div className='poem__text'>
            I have been held by many things. <br />
            Some have been acquainted with the warmth of my skin. <br />
            Some have known it intimately, <br />
            holding me as metal holds the sun <br />
            raw and blistering. <br />
            <br />
            Truly, many things have held me. <br />
            Cold hands that were burdened by my weight, <br />
            carrying me like the ball to their chain. <br />
            Kind hands which would so lovingly bear me. <br />
            Hands that were somewhere in-between; <br />
            choking me one day but then picking me flowers the next. <br />
            My feet have been held by many manners of ground; <br />
            the sobering asphalt of dead-end roads, <br />
            as well as the soft carpets that coddled my first steps. <br />
            Many words have wrapped me in their webs. <br />
            Beautiful melodies that have woven themselves into the strings of my heart, <br />
            intertwining my weary bones with their tunes of solace. <br />
            <br />
            These things may have held me and I may have held them, <br />
            but that does not mean they own me. <br />
            It is to something else that I belong. <br />
            <br />
            I belong to the trees. <br />
            <br />
            I belong to the trees, <br />
            because they have never ceased to stand as a selfless beacon. <br />
            Always open has been a willow, inviting me to weep against its side. <br />
            An oak has never neglected to hold my filthy hands; <br />
            reaching down to me without fear of contracting my sickness. <br />
            Always willing to forgive my shortcomings has been a sycamore; <br />
            accepting my smallness in the same places others have pitied, <br />
            standing tall in the sky, closer to heaven than I’ve ever been, <br />
            yet never belittling me for being a creature of the ground. <br />
            Bound to the dirt. <br />
            <br />
            I belong to the trees, <br />
            because it is their attributes I have always longed to emulate. <br />
            The way they die in the winter seasons, <br />
            yet are unashamed to show their empty arms that once held heaps of foliage. <br />
            Unafraid to expose their loss, <br />
            knowing the sun shines on them whether they are clothed or bare. <br />

            I belong to the trees, <br />
            because I believe there are pieces of me that were never made to be reconciled with man. <br />
            Because of similarities between the lines in my palms and the patterns in their bark. <br />
            Because of the way my eyes glimmer when mirroring their leaves frosted with dew. <br />
            Because of their quiet that sits so softly with mine. <br />
            Because I hold so many secrets between nature and myself. <br />
            Secrets sewn between me, God, and the trees. <br />
Secrets sewn as tight as the string that holds my flesh and bone together. <br />

          </div>
        </div>
        <div className={`poem poem__third ${openAccordion === 2 ? 'open' : ''}`}
        ref = {(el) => (accordionRefs.current[2] = el)}
        >
          <div className='final__place third__place'>
          <FontAwesomeIcon icon={faRibbon} /> 
            3<sup>rd</sup> Place
          </div>
          <div className='poem__header'
          onClick = {() => handleAccordionClick(2)}
          >
            <div className='poem__title'>I Belong</div>
            <div className='poem__author'>by Yingxin Nicole Lu</div>
          </div>
          <div className='poem__text'>
            I belong to my mother’s womb, <br />
            <br />
            Where warmth wraps me in gentle gloom. <br />
            <br />
            I belong to my grandpa’s arms, <br />
            <br />
            Where hugs mean new toys and charms. <br />
            <br />
            <br />
            I belong to Autumn’s night, <br />
            <br />
            With my first love under starlight, lying in the wheat field so tight. <br />
            <br />
            I belong to the kitchen where I am tied, <br />
            <br />
            Bound by the apron, by the stove side. <br />
            <br />
            <br />
            I belong to hospital’s care, <br />
            <br />
            Where cold liquid flows, a chilling affair. <br />
            <br />
            My life was supposed to end just so, <br />
            <br />
            But they scattered me in the sea, letting me go. <br />
            <br />
            <br />
            Vast and deep, <br />
            <br />
            Oh, I am back to my mom’s womb. <br />


          </div>
        </div>
      </div>
    )
};

export default Accordion;
  