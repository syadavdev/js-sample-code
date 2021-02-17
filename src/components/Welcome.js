import React, {Component} from 'react'

class Welcome extends Component{
    render(){
        const {name, sirname} = this.props
        return (
            <div>
                <h1>Welcome {name} {sirname}</h1>        
                {this.props.children}
            </div>
        )
    }
}

export default Welcome