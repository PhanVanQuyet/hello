import {Button, Card, CardContent, CardHeader, Divider, makeStyles, TextField} from "@material-ui/core";
import {useState} from "react";

const useStyles = makeStyles(theme => ({
    root: {
        width: 500,
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column"
    },
    title: {
        textAlign: "center"
    }
}))

const SignIn = ({isLog}) => {

    const classes = useStyles()

    const [formState, setFormState] = useState(
        {
            email:'',
            pass:''
        }
    )
    console.log(formState.email)

    const handleSubmit = (e) => {
        e.preventDefault()
        isLog(true)
    }

    const handleChange = (e) => {
        const {name, value}= e.target
    }

    return (
        <form onSubmit={handleSubmit}>
            <Card className={classes.root}>
                <CardHeader
                    title="SWelcome to Squeegee Squad"
                />
                <Divider />
                <CardContent>
                    <TextField label="username" variant="outlined" fullWidth onChange={handleChange}/>
                    <TextField label="password" variant="outlined" fullWidth onChange={handleChange}/>
                    <Button type="submit" onSubmit={handleSubmit}>
                        Sign in now
                    </Button>
                </CardContent>
            </Card>
        </form>
    )
}

export default SignIn