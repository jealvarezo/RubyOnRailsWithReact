/*-Jumbotron
-TableOfContents/List
    -Items
        -Preview/Thumbnail
    -ActiveItem
        -Video
*/
import React, {Component} from 'react'
import Jumbotron from './Jumbotron'
import Table from './Table/Table'
import axios from 'axios'

class Home extends Component{
    constructor(){
        super();
        this.state = {
            motorcicle_modules: []
        }
    }

    componentDidMount(){
        axios.get('page/episodes.json')
        .then(data => {
            debugger
            let res = []
            data.data.data.map( (data) => {
                res.push(
                    {
                        id:data.id, 
                        title: data.title, 
                        description: data.description,
                        active: false
                    })
                this.setState({ motorcicle_modules: res })    
            })
        })
        .catch(data => {
            debugger
        })
    }

    handleVideoChange(item, event){
        event.preventDefault()

        let motorcicle_modules = [...this.state.motorcicle_modules]

        console.log(motorcicle_modules)

        motorcicle_modules.map( data => {
            data.active = false
        })

        item.active = !item.active

        motorcicle_modules[item.id - 1 ] = item

        this.setState({motorcicle_modules})
    }

    render(){
        return(
            <div>
                <Jumbotron/>
                <Table handleVideoChange={this.handleVideoChange.bind(this)} motorcicle_modules={this.state.motorcicle_modules} />
            </div>
        )
    }
}

export default Home