import * as React from 'react'
import { teams } from '../data/teams'
import TeamCard from './TeamCard'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import CardMedia from '@mui/material/CardMedia'

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 1,
    boxShadow: 24,
    p: 4,
}

const TeamContainer = () => {
    // use state for opening modal
    const [open, setOpen] = React.useState(false)
    // use state for rendering team info into modal
    const [renderTeamInfo, setRenderTeamInfo] = React.useState([])

    const handleOpen = (team) => {
        setOpen(true)
        setRenderTeamInfo(() => {
            return [team]
        })
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div className="team-container">
            {teams.map((team) => {
                // Passes down team object as prop and handleOpen function as prop
                return (
                    <TeamCard
                        key={team.idTeam}
                        modalFunction={handleOpen}
                        team={{ ...team }}
                    />
                )
            })}

            <Modal open={open} onClose={handleClose}>
                <Box sx={modalStyle}>
                    {renderTeamInfo.map((team) => {
                        return (
                            <div>
                                <Typography variant="h3" component="h2">
                                    {team.strTeam}
                                </Typography>

                                <Typography>
                                    Formed in {team.intFormedYear}
                                </Typography>

                                <Typography>
                                    Location: {team.strStadiumLocation}
                                </Typography>

                                <Typography mt={2}>
                                    Stadium: {team.strStadium}
                                </Typography>
                                <Typography>
                                    Capacity: {team.intStadiumCapacity}
                                </Typography>
                                <CardMedia
                                    component="img"
                                    image={team.strStadiumThumb}
                                    alt="Team Stadium"
                                    sx={{
                                        width: 325,
                                        height: 'auto',
                                        mt: 1,
                                        mx: 'auto',
                                    }}
                                />
                                
                                <CardMedia
                                    component="img"
                                    image={team.strTeamJersey}
                                    alt="Team Jersey"
                                    sx={{
                                        width: 150,
                                        height: 'auto',
                                        mt: 4,
                                        mx: 'auto',
                                    }}
                                />
                            </div>
                        )
                    })}
                </Box>
            </Modal>
        </div>
    )
}

export default TeamContainer
