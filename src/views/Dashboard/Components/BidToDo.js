import {Avatar, Card, CardContent, Grid, Typography} from "@material-ui/core";
import FormatListNumberedRtlIcon from '@material-ui/icons/FormatListNumberedRtl'
import {useState, useEffect} from "react";

const BidToDo = () => {

    const [bidCount, setBidCount] = useState(0);

    // useEffect(() => {
    //     axios.get(apiConfig.url.BASE_URL + apiConfig.url.DASHBOARD_BILL_TO_DO_COUNT)
    //         .then(res => {
    //             setBidCount(res.data);
    //         })
    // }, [])

    return (
        <>
            <Card>
                <CardContent>
                    <Grid container justifyContent='space-between'>
                        <Grid item>
                            <Typography>
                                bid to do
                            </Typography>
                            <Typography>{bidCount}</Typography>
                        </Grid>
                        <Grid item>
                            <Avatar>
                                <FormatListNumberedRtlIcon />
                            </Avatar>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default BidToDo