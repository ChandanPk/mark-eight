import {useState} from 'react';
import Result from './Result';


const SearchField = () => {

  const [userOutput, setOutput] = useState(null);
  let [boolean, setBoolean] = useState(null)

  const dogsList = 
    {
      "🐕": "Dog",
      "🦮": "Guide dog",
      "🐕‍🦺": "Service dog"
    };

  const handleChange = (e)=> {
        var userInput = e.target.value;
        if (dogsList[userInput]){
          
        }
        var meaning = dogList[userInput];
        setOutput(e.target.value)
        }
        
              
    return (
         <div>
           <input onChange={(e)=> handleChange(e)} id="input" placeholder="copy paste a emoji here to know the meaning" />
           <Result result={userOutput} boolean={boolean} />
         </div> 
        

        );
}
 
export default SearchField;