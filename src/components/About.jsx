import React, { useState } from 'react';

const About = () => {
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  const handleSizeChange = (size) => {
    setSelectedSizes(prevSizes =>
      prevSizes.includes(size) ? prevSizes.filter(s => s !== size) : [...prevSizes, size]
    );
  };

  const handleColorChange = (color) => {
    setSelectedColors(prevColors =>
      prevColors.includes(color) ? prevColors.filter(c => c !== color) : [...prevColors, color]
    );
  };

  const colorMap = {
    Blanc: '#FFF',
    Noir: '#000000',
    Gris: '#808080',
    Beige: '#F9E2AF',
    Marron: '#8B4513',
    Violet: '#8967B3',
    Orange: '#EB5B00',
    Rose: '#FF8A8A',
  };

  return (
    <div style={{ display: 'flex' }}>
      <fieldset>
        <legend>Choisissez la taille</legend>
        <div className="child1">
          {['36', '37', '38', '39', '40', '41', '42', '43' ].map(size => (
            <div key={size} style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
              <input
                type="checkbox"
                id={size}
                checked={selectedSizes.includes(size)}
                onChange={() => handleSizeChange(size)}
              />
              <label
                htmlFor={size}
                style={{
                  textDecoration: selectedSizes.includes(size) ? 'line-through' : 'none',
                }}
              >
                Taille {size}
              </label>
            </div>
          ))}
        </div>
        <div className="child2">
          <h4>Tailles choisies:</h4>
          {selectedSizes.map(size => (
            <span key={size}>{<ul><li> {size}  </li></ul>} </span>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend>Choisissez la couleur</legend>
        <div className="child1">
          {['Blanc', 'Noir', 'Gris', 'Beige','Marron', 'Violet', 'Orange', 'Rose'].map(color => (
            <div key={color} style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
              
              <input
                type="checkbox"
                id={color}
                checked={selectedColors.includes(color)}
                onChange={() => handleColorChange(color)}
              />
              <span
                style={{
                  display: 'inline-block',
                  width: '15px',
                  height: '15px',
                  borderRadius: '50%',
                  backgroundColor: colorMap[color],
                }}
              ></span>
              <label
                htmlFor={color}
                style={{
                  textDecoration: selectedColors.includes(color) ? 'line-through' : 'none',
                }}
              >
                {color}
              </label>
            </div>
          ))}
        </div>
        <div className="child2">
          <h4>Couleurs choisies:</h4>
          {selectedColors.map(color => (
            <span key={color}>{<ul><li> {color}  </li></ul>}</span>
          ))}
        </div>
      </fieldset>
    </div>
  );
};

export default About;
