import { teams } from '../data/teams'
import TeamCard from './TeamCard'

const TeamContainer = () => {
    return (
        <div className="team-container">
            {teams.map((team) => {
                return (
                    <TeamCard
                        teamID= {team.idTeam}
                        teamBadge={team.strTeamBadge}
                        teamName={team.strTeam}
                    />
                )
            })}
        </div>
    )
}

export default TeamContainer