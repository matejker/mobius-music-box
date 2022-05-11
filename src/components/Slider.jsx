import React from 'react';

const Slider = ({min, max, step, stateChanger, value}) => {
  return <input
    type="range"
    min={ min }
    max={ max }
    step={step}
    value={ value }
    onChange={(e) => (stateChanger(e.target.value)) }
 />;
};

export default Slider;