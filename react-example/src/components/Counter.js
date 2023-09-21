import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props){
        super()
        this.state = {
            count: 0
        }
    }

    increase(){
        // this.setState({ 
        //     count: this.state.count + 1
        // }, () => {console.log(this.state.count)})

        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    }

    increaseByFive(){
        this.increase();
        this.increase();
        this.increase();
        this.increase();
        this.increase();
    }

    render() {
        return (
            <div>
               Count - {this.state.count}
               <button onClick = {() => this.increaseByFive()}>+</button>
            </div>
        )
    }
}

export default Counter
