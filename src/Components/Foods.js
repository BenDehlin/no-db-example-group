import React, {Component} from 'react'
import axios from 'axios'
import Food from './Food'

class Foods extends Component{
    constructor(props){
        super(props)
        this.state = {
            food: []
        }
    }
    componentDidMount(){
        axios.get('/api/food')
        .then((response) => {
            this.setState({food: response.data})
        })
        .catch(err => console.log(err))
    }

    deleteFood = (id) => {
        axios.delete(`/api/food/${id}`)
        .then((response) => {
            console.log(response)
            this.setState({food: response.data})
        })
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
                <h1>Foods</h1>
                {this.state.food.map((element) => {
                    return <Food info={element} key={element.id} deleteFood={this.deleteFood} />
                })}
            </div>
        )
    }
}

export default Foods