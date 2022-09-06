// Mendefinisikan State

import React, { Component } from 'react'
export class ReactDemo extends Component {
    constructor (){
        super()
        this.state = {
            username: ''
        }
    }
}

// Membaca State
import React, { Component } from 'react'
export class ReactDemo extends Component {
    constructor (){}
        render(){
            return <h1>{this.state.username}</h1>
        }
}

// Menulis State
this.state.username = 'rial'

// contoh kode komplit
import React, { Component } from 'react'
export class ReactDemo extends Component {
    constructor (){
        super()
        this.state = {
            username: ''
        }
    }

    loggingIn(){
        this.setState({
            username: 'rial'
        })
    }

    logginOut(){
        this.setState({
            username: ''
        })
    }

    render(){
        <div>
            <Login onClick={this.loggingIn}/>
            <Logout onClick={this.logginOut}/>
        </div>
    }
}