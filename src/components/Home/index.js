import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {matchesList: [], isLoading: true}

  componentDidMount() {
    this.getMatchCard()
  }

  getMatchCard = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const newData = data.teams
    const updatedTeams = newData.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImgUrl: eachTeam.team_image_url,
    }))
    this.setState({matchesList: updatedTeams, isLoading: false})
  }

  render() {
    const {matchesList, isLoading} = this.state
    return isLoading ? (
      <div data-testid="loader" className="loader-container">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      <div className="ipl-card-container">
        <div className="card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="image-logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <ul className="ul-list">
          {matchesList.map(eachList => (
            <TeamCard key={eachList.id} eachTeam={eachList} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Home
