import '../App.css'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const TeamCard = (props) => {
    const { teamID, teamBadge, teamName, teamStadium, teamJersey } = props
    return (
        <Card key={teamID} className="card">
            <img src={teamBadge} alt="Team Badge" className="badge"/>
            <CardContent>
                <Typography variant="h4" component="h2">
                    {teamName}
                </Typography>
                <Typography
                    component="p"
                    color="textSecondary"
                    className="stadium">
                    Stadium: {teamStadium}
                </Typography>
            </CardContent>
            <img src={teamJersey} alt="Team Jersey" className="jersey"/>
        </Card>
    )
}

export default TeamCard
