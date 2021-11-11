import {
    Avatar,
    Box,
    Divider,
    Drawer,
    List,
    makeStyles,
    Typography,
    ListItem,
    ListItemIcon, ListItemText
} from "@material-ui/core";
import SidebarData from './SidebarData'
import {useHistory, useLocation} from 'react-router-dom'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import {useState} from "react";

const useStyles = makeStyles({
    drawer: {
        width: 240,
        marginTop: 64,
        padding: 6
    },
    avatar: {
        width: 60,
        height: 60,
    },
    box: {
        height: 120,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
    },
    active: {
        backgroundColor: 'red'
    }
})

const Sidebar = () => {

    const history = useHistory()
    const location = useLocation()
    const classes = useStyles()

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <Drawer
            variant='permanent'
            classes={{paper: classes.drawer}}
        >
            <div>
                <Box className={classes.box}>
                    <Avatar className={classes.avatar}/>
                    <Typography>
                        hello
                    </Typography>
                </Box>
                <Divider />
                <List>
                    {SidebarData.map((item) => (
                        <ListItem
                            button
                            onClick={() => history.push(item.href)}
                            className={location.pathname == item.href ? classes.active : null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.title} />
                            {click ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                        </ListItem>
                    ))}
                </List>
            </div>
        </Drawer>
    )
}

export default Sidebar