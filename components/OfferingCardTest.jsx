import React from "react";
import {Grid,Card,CardActionArea, CardActions,CardContent,CardMedia,Button ,Typography}   from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import { Link } from '@material-ui/core';
import {motion} from "framer-motion";
import OfferingCardData from './OfferingCardData';

const useStyles=makeStyles({
  gridContainer:{
    paddingTop:"100px",
    paddingLeft:"50px",
    paddingRight:"50px",
    paddingBottom:"50px"

  },


  root: {

    width:400,
    height:700

  },
  media: {

      height: 200,
      paddingTop: '16.25%', // 16:9

    }



});


const OfferingCardTest = () =>  {
  const classes = useStyles();



  return (

    <div className={classes.gridContainer} >
    <Grid container spacing={3}  justify="space-eve">
  {OfferingCardData.map((Data) => (
    <Grid item sm={3} ms={4}   spacing={2}>


    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia className={classes.media}
          image={Data.img}
          title={Data.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1">
            {Data.Typography_H1}
          </Typography>
          <Typography gutterBottom  component="p">
            <strong>{Data.Typography_H2}</strong>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {Data.Typography_p}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link href={Data.link}>

        <Button size="small" color="primary">
          Learn More
        </Button>
        </Link>
      </CardActions>
    </Card>

    </Grid>
    )  )}

  </Grid>

</div>
  );
}
export default OfferingCardTest;
