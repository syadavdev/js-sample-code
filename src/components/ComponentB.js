import React, { Component } from 'react'
import ComponentC from './ComponentC'
import UserContext from './UserContext'

class ComponentB extends Component {

    static contextType = UserContext
    
    render() {
        return(
            <div>
                Component C context {this.context}
                <ComponentC />
            </div>
        )
    }
}

//ComponentB.contextType = UserContext

export default ComponentB