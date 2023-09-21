import React from 'react';

const Greet = (props) => {
    //console.log(props)
    const {name, sirname} = props
    return ( 
        <div>
            <h1>hello {name} {sirname}</h1>
            {/* {props.children} */}
        </div>
        ) 
}

export default Greet