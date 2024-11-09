import React, { useState } from 'react';
import './Style.css';

const Shop = () => {
  const [chaussure, setChaussure] = useState(''); // La chaussure saisie
  const [chaussures, setChaussures] = useState([]); // La liste des chaussures

  // Fonction pour ajouter une chaussure
  const ajouterChaussure = () => {
    if (chaussure.trim() !== '') { // Vérifie si le champ n'est pas vide
      setChaussures([...chaussures, chaussure]); // Ajoute la chaussure à la liste
      setChaussure(''); // Vide le champ de texte après l'ajout
    }
  };

  // Fonction pour supprimer une chaussure par index
  const supprimerChaussure = (index) => {
    const nouvellesChaussures = chaussures.filter((_, i) => i !== index); // Filtre la liste pour exclure l'index sélectionné
    setChaussures(nouvellesChaussures);
  };

  return (
    <div>
      <fieldset>
        <legend>ToDo LiSt</legend>
        
        <label> Le Nom de Chaussure : </label>
        <input 
          type="text" 
          size="30" 
          value={chaussure} 
          onChange={(e) => setChaussure(e.target.value)} 
        /> 
        <button onClick={ajouterChaussure} type="button" className="btn btn-outline-dark">
          Add
        </button>  

        <h5>Les chaussures choisies :</h5>
        <div className="ajout">
          {chaussures.map((c, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
              <span>{c}</span>
              <button 
                onClick={() => supprimerChaussure(index)} 
                
              >
                <i class="bi bi-x-circle"></i>
              </button>
            </div>
          ))}
        </div>
        
        <h5>Total : {chaussures.length} chaussures</h5>
      </fieldset>
    </div>
  );
};

export default Shop;
