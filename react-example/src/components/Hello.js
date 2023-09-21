import React from 'react'

const Hello = () => {
    //return (
    //    <div>
    //        <h1>hello sandi</h1>
    //    </div>
    //)
    return React.createElement('div', {id : 'hello'}, React.createElement('h1', null, 'hello world'))
}

export default Hello