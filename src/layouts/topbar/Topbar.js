import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    IconButton, Tooltip
} from '@material-ui/core'
import InputIcon from '@material-ui/icons/Input'
import {useHistory} from "react-router-dom";

const useStyles = makeStyles({
  logo: {
      fontWeight: "bold"
  },
  input: {
      display: "flex",
      justifyContent: "flex-end",
      flexGrow: 1,
  },
})

const Topbar = ({setIsLog}) => {

    const classes = useStyles()

    const history = useHistory()

    const handleClick =() => {
        history.push('/')
        setIsLog(false)
    }

    return (
        <AppBar elevation={0}>
            <Toolbar>
                <Tooltip arrow className={classes.logo} title={
                    <Typography>
                        Dashboard
                    </Typography>
                }>
                    <Typography variant='h6'>
                        SQUEEGEE SQUAD
                    </Typography>
                </Tooltip>
                <Typography className={classes.input}>
                    Squeegee Squad - Headquarters
                </Typography>
                <Tooltip arrow title={
                    <Typography>Logout</Typography>
                }>
                    <IconButton color='inherit' onClick={handleClick}>
                        <InputIcon />
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar>
    )
}

export default Topbar