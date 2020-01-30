import React from 'react'

//component that can replace content of cardList
//everything inside the scroll component in App.js is a child
const Scroll = (props) => {
   
    /*use double curly brace for css 
   overflowY is for scrolling
   the height property is used to specify the
   height of the scroll component and make sure it is a large size
   because it needs to wrap the entire cardlist component */
    return (
        
        <div style = {{overflowY: 'scroll', height: '500px'}}>
        
        {props.children} {/*we use this to wrap components around
                          //other components 
                          remember to use curly braces for JS in JSX code*/}
        </div>
    )
}

//exporting component so its accessible outside file
export default Scroll;