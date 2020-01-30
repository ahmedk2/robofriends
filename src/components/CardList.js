import React from 'react'
import Card from './Card'

//here we created a new component with robots as the prop
//we were able destructre robots and use it as prop because
//CardList is a child of Card and data carries downard from parent to child
//we are destructuring robots because we want to access this arrays values
const CardList = ({robots}) => {
        //we are creating a new array to store the values of the mapped 
        //robots array from robots.js
        //remember with map we have 2 brackets to store all looped code 
        //and curly brace for more than one line
        //also the param user is used to loop through each element of the array and return array
        //the param index is used to go through each element
    
        //here we are returning the CardArray so that we can have cleaner code
        //also we need to use curly braces since the CardArray is javascript and 
        //we need to access its values with destructuring
        return(
            <div>
            { //curly braces are red to show everything insde is JS
                robots.map((user, index) => {
    
                //every child in an array/iterator should have a unique key
                /*
                It is important that keys have a “stable identity” across re-renders so that React 
                can determine when items are added, removed, or re-ordered. Ideally, keys should 
                correspond to unique and stable identifiers coming from your data, such as post.id.
                */
                //whenever you loop always give a unique key
                //user {} because its javascript everything inside the comopent
                //is considered JSX so to seperate Javascript we need to use {}
                    return (
                        <Card 
                        key ={index} 
                        id={robots[index].id} 
                        name ={robots[index].name} 
                        email = {robots[index].email}/>
                    );
            
                })
            }
            </div>
        );
}

//remember we need to export this file so it can be imported elsewhere
export default CardList;