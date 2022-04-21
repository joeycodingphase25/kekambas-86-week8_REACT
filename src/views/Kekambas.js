import React, { Component } from 'react'

export default class Kekambas extends Component {
    constructor(props){
        super(props);
        this.state = { // always an object
            myPeeps: []
        }
    }

    // componentDidMount(){
    //     fetch('https://kekambas-bs.herokuapp.com/kekambas')
    //         .then(res => res.json())
    //         .then(data => {
    //             this.setState({myPeeps: data})
    //         })
    // }

    getKekambas = () => {
        fetch('https://kekambas-bs.herokuapp.com/kekambas')
            .then(res => res.json())
            .then(data => {
                this.setState({myPeeps: data})
            })
    }
    clearKekambas = () => {
        this.setState({myPeeps: [] })
    }

    render() {
        // button is dependent on getKekambas which is like didmount except called onclick
        return (
            <div>
                <h4 className='text-center'>My Peeps</h4>
                <button className='btn btn-success' onClick={this.getKekambas}>Get My Peeps</button> 
                <button className='btn btn-danger' onClick={this.clearKekambas}>Clear My Peeps</button> 
                
                { this.state.myPeeps.length > 0 ? (
                    <ul className='list-group'>
                        {this.state.myPeeps.map((k,i) => <li className='list-group-item' key={i}>{k.first_name} {k.last_name}</li>)}
                    </ul>): null}
            </div>
        )
    }
}
