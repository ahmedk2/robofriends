//we need to impot react to use JSX (HTML+JS)
import React from 'react';


//here we are destructuring i.e. extracting multiple values from data stored in 
//(possibly nested) objects and Arrays
//in this case we are destructuing the values id name and email from
//the array robots in the file robot.js

//this component is pure because it receives an input and always gives the same output
//there are no side effects or anything. Similarly some people call pure 
//pure components dumb components because its unaware of things outside
//it just recieves something and return something thats it
const Card = ({id, name, email}) => {
    return(
        //This is JSX Code 
        <div className= "tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
          <div>
            <img alt = "robots "src={`https://robohash.org/${id}`} />
         </div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
    ); 
    
    
}

export default Card;

