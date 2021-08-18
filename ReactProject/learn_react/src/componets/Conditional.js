import React from 'react';

function Conditional(props) {

    return(
        <div className="text-center">
            {props.isLoading===true ? <h1>loading...</h1> : <h1>Condiotional loading allows for some prettty cool stuff</h1>}
        </div>
    )
}

export default Conditional;