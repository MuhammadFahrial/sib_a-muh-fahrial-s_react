import { Component } from "react"

export class App extends Component {
    constructor (){
        super()
        this.state = {
            peoples: [{
                name: 'Fahrial',
                status: 'jedi'
            },{
                name: 'Rial',
                status: 'Padawan'
            }]
        }
    }
    render(){
        <div>
            <ListPeople people={this.state.peoples}/>
        </div>
    }
}

// ------------------------------------------------------------

export class ListPeople extends Component {
    constructor(props){
        super(props)
    }
    render(){
        <ul>
            {this.props.people(p => <li>{name}</li>)}
        </ul>
    }
}