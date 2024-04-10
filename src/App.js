
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { faRibbon } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import { useState } from 'react';
import { useRef } from 'react';

function App() {
  const [openAccordion, setOpenAccordion] = useState(null);
  const handleAccordionClick = (index) => {;
    if (index !== openAccordion) {
      setOpenAccordion(index);
    } else {
      setOpenAccordion(null);
    }
  }
  const accordionRefs = useRef([]);
  return (
    <div className="App">
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
            <div className='poem__title'>Wild Nights - Wild Nights!</div>
            <div className='poem__author'>by Emily Dickinson</div>
          </div>
          <div className='poem__text'>
          Wild nights - Wild nights!<br />
          Were I with thee <br />
          Wild nights should be <br />
          Our luxury! <br />
          <br />
          Futile - the winds - <br />
          To a Heart in port - <br />
          Done with the Compass - <br />
          Done with the Chart! <br />
          <br />
          Rowing in Eden - <br />
          Ah - the Sea! <br />
          Might I but moor - tonight - <br />
          In thee!
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
            <div className='poem__title'>If I Thought</div>
            <div className='poem__author'>by Dana Schwartz</div>
          </div>            
          <div className='poem__text'>
          If I thought for just one moment that this would be my last breath,<br />
          I'd tell you I'll love you forever, even beyond death. <br />
          If I thought for just one moment that your face would be the last I'd see, <br />
          I'd take a million pictures and save them just for me. <br />
          If I thought for just one moment that your voice would be the last I'd hear, <br />
          I'd listen attentively and promise not to shed a tear. <br />
          If I thought for just one moment that your touch would be the last I'd feel, <br />
          I'd embrace you and know that this has all been real. <br />
          If I thought for just one moment that my heart would beat its last beat, <br />
          I'd thank the Lord for allowing us to meet.
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
            <div className='poem__title'>My Melody</div>
            <div className='poem__author'>by Eric Pribyl</div>
          </div>
          <div className='poem__text'>
          Amazing and beautiful, <br />
          not a flower or a tree. <br />
          Much prettier than that, <br />
          and only I can see. <br />
          <br />
          Loving and caring <br />
          right down to the core. <br />
          Filling me with happiness <br />
          and so much more. <br />
          <br />
          Eyes are so stunning, <br />
          cannot look away. <br />
          Gorgeous and shining <br />
          all throughout the day. <br />
          <br />
          Here in your arms <br />
          is where I belong. <br />
          The beating of your heart <br />
          is like a beautiful song. <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
