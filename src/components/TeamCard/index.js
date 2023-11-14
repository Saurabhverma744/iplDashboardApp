// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachTeam} = props
  const {id, name, teamImgUrl} = eachTeam

  return (
    <Link className="ipl-link" to={`/team-matches/${id}`}>
      <li className="list">
        <img src={teamImgUrl} alt={name} className="ipl-team-image" />
        <p className="para">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
