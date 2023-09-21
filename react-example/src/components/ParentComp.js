import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureCompo from './PureCompo'
import RegularComp from './RegularComp'

class ParentComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'sandeep'
        }
    }

    componentDidMount(){
        setInterval(() =>(
            this.setState({
                name: 'sandeep'                
            })
        ), 2000)
    }
    

    render() {
        console.log('***********Parent Compo***********')
        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name}/>
                {/* <RegularComp name={this.state.name} />
                <PureCompo name={this.state.name} /> */}
            </div>
        )
    }
}

export default ParentComp
