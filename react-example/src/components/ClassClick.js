import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler(){
        console.log('button click')
        console.log(this)
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default ClassClick
