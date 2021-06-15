import {useState} from 'react';
import Result from './Result';

const SearchField = () => {

  const [meaning, setMeaning] = useState("translation will show up here..");
  const [emoji, setEmoji] = useState("");


  const flowerEmojies = 
    {
      "💐": "Bouquet",
      "🌸": "Cherry Blossom",
      "💮": "White Flower",
      "🏵️": "Rosette",
      "🌹": "Rose",
      "🥀": "Wilted Flower",
      "🌺": "Hibiscus",
      "🌻": "Sunflower",
      "🌼": "Blossom",
      "🌷": "Tulip",
      "🌱": "Seedling"
      
  };

  const emojies = Object.keys(flowerEmojies);

  const handleChange = (e)=> {
    const userInput = e.target.value;
    setEmoji(userInput);

    if (userInput in flowerEmojies) {
      setMeaning(flowerEmojies[userInput]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }


  function handleClick(userInput) {
    setMeaning(flowerEmojies[userInput]);
  }  
              
    return (
         <div>
           <h1>Call of Flowers..</h1>
            <input id="input" styles={styling} onChange={handleChange} value={emoji} placeholder={"put an emoji here to know the meaning"} />
            
           <Result 
           meaning={meaning}  
           emoji={emoji} 
           handleChange={handleChange} 
           handleClick = {handleClick} 
           emojies = {emojies} 
            />
         </div> 
        

        );
}
 
export default SearchField;

const styling = {
    padding: "1em",
    minWidth: "80%"
}