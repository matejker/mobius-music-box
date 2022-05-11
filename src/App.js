import React, { useState } from 'react';
import * as Tone from 'tone';
import github from './img/github.png';
import MusicSheet from './components/MusicSheet';
import Slider from './components/Slider';
import { WINGO_NOTES, WINGO_NOTES_URLS, WINGO_NOTES_INVERSE } from './constants';

export default function App() {
  const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  const sampler = new Tone.Sampler({
    urls: WINGO_NOTES_URLS,
    baseUrl: "https://tonejs.github.io/audio/casio/",
  }).toDestination();
  const [inputs, setInputs] = useState({});
  const [speed, setSpeed] = useState(1);
  const [timeSignature, setTimeSignature] = useState(4);
  const [numBars, setNumBars] = useState(1);
  const [numLoops, setNumLoops] = useState(3);

  const playNote = () => {
    const now = Tone.now();
    for (const [key, value] of Object.entries(inputs)) {
      if (value) {
        const code = key.split('_');
        const note = code[0];
        const time = code[1];

        for (let i=0; i < numLoops; i++) {
            const transpose = i * numBars * 2 / speed;
            if (i % 2) {
                synth.triggerAttackRelease(note, "8n", now + (time) / (timeSignature * speed) + transpose);
            } else {
                synth.triggerAttackRelease(WINGO_NOTES_INVERSE[note], "8n", now + (time) / (timeSignature * speed) + transpose);
            }
        }
      }
    }
  };

  return (<>
     <div id="main">
        <h1>Möbius music box</h1>
        <em className="description">
            ...
        </em>
        <MusicSheet
          numBars={ numBars }
          notes={ WINGO_NOTES }
          timeSignature={ timeSignature }
          setInputs={ setInputs }
          inputs={ inputs }
        />
        Number of bars: <input type="number" value={ numBars } min="1" max="50" onChange={(e) => (setNumBars(e.target.value)) } />
        <br />
        Number of loops: <input type="number" value={ numLoops } min="1" max="10" onChange={(e) => (setNumLoops(e.target.value)) } />
        <br />
        Speed <Slider
            min={ 0.1 }
            max={ 2 }
            step={ 0.1 }
            value={ speed }
            stateChanger={ setSpeed }
        /> <em>{ speed }s per bar</em>
        <br />
        <button onClick={ playNote }>► Play</button>
    </div>
    <footer>
        &copy; Matej Kerekrety 2022 <a href="https://github.com/matejker"><img src={ github } alt="github" />
        </a>
    </footer>
    </>);
}

