import Topbar from "../layouts/topbar/Topbar";
import Sidebar from "../layouts/sidebar/Sidebar";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        display: 'flex'
    },
    page: {
        width: '100%',
        padding: 40,
        marginLeft: 240,
        marginTop: 60
    },
})

const Layout = ({children, handleLogged}) => {

    const classes = useStyles()

    return (
        <>
            <Topbar setIsLog={handleLogged} />
            <div className={classes.root}>
                <Sidebar />
                <div className={classes.page}>
                    {children}
                </div>
            </div>
        </>

    )
}

export default Layout