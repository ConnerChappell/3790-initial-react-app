import '../App.css'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const TeamCard = (props) => {
    const { teamID, teamBadge, teamName } = props
    return (
        <Card key={teamID} className="card">
            <img src={teamBadge} alt="Team Badge"/>
            <CardContent>
                <Typography variant="h4" component="h2">
                    {teamName}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default TeamCard