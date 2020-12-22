import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        //    margin: 'auto',
        //  maxWidth: 500,
        minWidth: 300
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function HomePage() {
    const classes = useStyles();

    return (
        <div className={classes.root, "my-5 mx-5"}>
            <Paper>

                <Grid container direction="row" alignContent="flex-start" justify="space-evenly">

                    <Grid item>
                        <span>Hai Grid Item 1</span>
                    </Grid>

                    <Grid item xs={6} sm={6} md={6}>
                        <Grid container alignContent="flex-start" justify="space-evenly" >
                            <Grid item >
                                <span>Hai Grid Container1 Item 2</span>
                            </Grid>
                            <Grid item>
                                <span>Hai Grid Container1 Item 3</span>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>




                <Grid container direction="row" alignContent="flex-start" justify="space-evenly">

                    <Grid item>
                        <span>Hai Grid Container2 Item 1</span>
                    </Grid>

                    <Grid item>
                        <span>Hai Grid Container2 Item 1</span>
                    </Grid>

                    <Grid item>
                        <span>Hai Grid Container2 Item 1</span>
                    </Grid>

                </Grid>



            </Paper>
        </div>
    );
}
