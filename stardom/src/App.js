import React, { Component } from 'react'
import prostars from './prostars.json'
import StarDom from './components/StarDom'
import './App.css'

export default class App extends Component {

    constructor() {
        super()
        this.state = { stars: {} }
    }

    //to Display 5 Star Celebrities
    displayStarCelebrities = () => {

        let proStarsList = {}
        for (let i = 0; i < 7; i++) {

            proStarsList[prostars[i].id] = {

                url: prostars[i].pictureUrl,
                name: prostars[i].name,
                popularity: prostars[i].popularity

            }
        }

        return proStarsList
    }

    componentDidMount() {
        this.setState({ stars: { ...this.displayStarCelebrities() } })
    }

    //Add New Random Prostars
    displayRandomProStars = () => {

        let proStarsList = {}
        let array = [1, 1, 1, 1, 1].map(() => { return Math.floor(Math.random() * prostars.length) })

        array.forEach(index => {
            let prostar = prostars[index]
            proStarsList[prostar.id] = {
                url: prostar.pictureUrl,
                name: prostar.name,
                popularity: prostar.popularity
            }
        })
        this.setState({ stars: proStarsList })
    }

     //Sort By Name
    sortByName = () => {

        let sorted = prostars.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))

        let proStarsList = {}
        for (let i = 0; i < 5; i++) {
            proStarsList[sorted[i].id] = {
                url: sorted[i].pictureUrl,
                name: sorted[i].name,
                popularity: sorted[i].popularity
            }
        }
        this.setState({ stars: proStarsList })
    }

    //Sort By Popularity
    sortByPopularity = () => {
        let sorted = prostars.sort((a, b) => b.popularity - a.popularity)

        let proStarsList = {}
        for (let i = 0; i < 5; i++) {
            proStarsList[sorted[i].id] = {
                url: sorted[i].pictureUrl,
                name: sorted[i].name,
                popularity: sorted[i].popularity
            }
        }
        this.setState({ stars: proStarsList })
    }

    // Remove Prostars
    deleteStar = (id) => {

      this.setState(prevState => {
          
        delete prevState.stars[id]
          return {

              ...prevState

          }
      })
  }
    

    render() {
        let stars = this.state.stars
        let idstar = Object.keys(stars)

        return (
            <React.Fragment>
                <div className="buttons">
                    <div className="random" onClick={this.displayRandomProStars}>Get Random Contact</div>
                    <div className="byName" onClick={this.sortByName}>Get By Name</div>
                    <div className="byPopularity" onClick={this.sortByPopularity}>Get By Popularity</div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>Picture</td>
                            <td>Name</td>
                            <td>Popularity</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            idstar.map(id =>
                                <StarDom key={id} {...stars[id]} id={id} deleteStar={this.deleteStar} />
                            )

                        }
                    </tbody>
                </table>

            </React.Fragment>
        )
    }
}