import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class ComponentC extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (name) => {
                        return <div>Hello {name}</div>
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentC