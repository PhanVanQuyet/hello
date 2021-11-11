import {Grid} from "@material-ui/core";
import SearchInput from "./Components/SearchInput";
import BidToDo from "./Components/BidToDo";
import Test from "./Components/Test";

const Dashboard = () => {

    return (
        <Grid container spacing={4}>
            <Grid item md={12}>
                <SearchInput />
            </Grid>
            <Grid item md={3}>
                <BidToDo />
            </Grid>
            <Grid item md={3}>
                <BidToDo />
            </Grid>
            <Grid item md={3}>
                <BidToDo />
            </Grid>
            <Grid item md={3}>
                <BidToDo />
            </Grid>
            <Grid item >
                <Test />
            </Grid>
        </Grid>
    )
}

export default Dashboard