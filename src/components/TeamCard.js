import '../App.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'

const TeamCard = (team) => {
    // const { teamID, teamBadge, teamName, teamStadium, teamJersey } = props

    return (
        <Card
            key={team.idTeam}
            className="card"
            sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                textAlign: 'center',
                p: '20px 50px',
                m: '20px',
                width: 200,
                height: 400,
            }}>
            <CardMedia
                component="img"
                image={team.strTeamBadge}
                alt="Team Badge"
                sx={{
                    width: 125,
                    height: 'auto',
                }}
            />
            <CardContent>
                <Typography variant="h4" component="h2">
                    {team.strTeam}
                </Typography>
                <Typography
                    component="p"
                    color="text.secondary"
                    className="stadium"
                    sx={{
                        m: '20px 0',
                    }}>
                    Stadium: {team.strStadium}
                </Typography>
            </CardContent>
            <img
                src={team.strTeamJersey}
                alt="Team Jersey"
                className="jersey"
            />
        </Card>
    )
}

export default TeamCard
