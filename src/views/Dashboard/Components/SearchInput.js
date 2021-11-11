import {Button, Input, Paper, Grid} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const SearchInput = () => {

    return (
        <Grid container spacing={2}>
            <Grid item md={10}>
                <Paper>
                    <SearchIcon />
                    <Input placeholder='hello'></Input>
                </Paper>
            </Grid>
            <Grid item md={2}>
                <Button>
                    CLEAR
                </Button>
            </Grid>
        </Grid>

    )
}

export default SearchInput