import { teams } from '../data/teams'
import TeamCard from './TeamCard'

const TeamContainer = () => {
    return (
        <div className="team-container">
            {teams.map((team) => {
                return (
                    <TeamCard {...team}
                    />
                )
            })}
        </div>
    )
}

export default TeamContainer