import React from 'react';

const MusicSheet = ({ numBars, notes, timeSignature, setInputs, inputs }) => {
  const handleChange = (e) => {
    setInputs(values => ({...values, [e.target.name]: e.target.checked}))
  }
  const bars = numBars * 2 * timeSignature;

  return (<>
  <div id="scroller">
     <div id="slide-container">
        <table id="musicbox">
            { notes.map((e, note) => <tr>
                <td className="grey headcol"><strong>{ notes[note] }</strong></td>
                { [...Array(bars)].map((f, t) => <td className={ (Math.floor(t / timeSignature / 2) % 2 === ((notes[note].slice(1, 2) === "#") ? 1 : 0)) ? "white" : "grey" }>
                    <input type="checkbox" name={ `${notes[note]}_${t}` } defaultChecked={ inputs[`${notes[note]}_${t}`] || false } onChange={ handleChange } />
                </td>) }
            </tr>) }
            <tr>
                <td>&nbsp;</td>
                { [...Array(bars)].map((f, t) => <td>
                    { (Math.floor(t % (timeSignature * 2)) === 0) ? Math.floor(t / timeSignature / 2 + 1) : "" }
                </td>) }
            </tr>
         </table>
      </div>
  </div>
  <div class="holder"></div>
  </>);
};

export default MusicSheet;