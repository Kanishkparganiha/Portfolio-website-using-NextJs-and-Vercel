import React from "react";
import {Grid,Card,CardActionArea, CardActions,CardContent,CardMedia,Button ,Typography}   from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import { Link } from '@material-ui/core';
import {motion} from "framer-motion";
const useStyles=makeStyles({
  gridContainer:{
    paddingTop:"100px",
    paddingLeft:"50px",
    paddingRight:"50px",
    paddingBottom:"50px"

  },


  root: {



    width:300,
    height:600
  },  media: {

      height: 200,
      paddingTop: '16.25%', // 16:9
    }



});


const OfferingCard = () =>  {
  const classes = useStyles();



  return (

    <div className={classes.gridContainer} >
    <Grid container spacing={3}  justify="space-eve">

    <Grid item sm={3} ms={4}   spacing={2}>

    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia className={classes.media}
          image="/NEIF.png"
          title="NEIF"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Fine-Tuning BERT model on CoNLL dataset using PyTorch
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          In this work I proposed pretraining larger
Transformer based Encode-Decoder models on
massive text corpora of MIT movie dataset by
adding a token-level classifier on the top of the
BERT model. We will then evaluate our model
using F-1 score as this problem is typically a
multi-class problem
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link href="https://marketplace.raisegreen.com/offers/PreviewOffers/NjU0ODk=">

        <Button size="small" color="primary">
          Learn More
        </Button>
        </Link>
      </CardActions>
    </Card>

    </Grid>

    <Grid item sm={3} ms={4}   spacing={2}>

    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia className={classes.media}
          image="/BLocPower.png"
          title="BlocPower"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Blocpower Energy Services 3
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Invest in greener, smarter, healthier buildings across the United States. BlocPower LLC is a Brooklyn-based climate technology startup that is making American cities greener, smarter and healthier. BlocPower partners with utilities, government agencies, and building owners to identify unhealthy, energy-wasting buildings to retrofit.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <Link href="https://marketplace.raisegreen.com/offers/PreviewOffers/Njc1ODQ=">

        <Button size="small" color="primary">
          Learn More
        </Button>
        </Link>
      </CardActions>
    </Card>

    </Grid>

    <Grid item sm={3} ms={4}   spacing={2}>

    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia className={classes.media}
          image="/Solaris.png"
          title="Solaris"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            National Energy Improvement Fund
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            National Energy Improvement Fund provides loans to make homes and businesses more resilient. NEIF serves all income levels including low-moderate income borrowers, where access to affordable energy improvements is vital. Low and moderate income households account for 43% of all loans.

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <Link href="https://marketplace.raisegreen.com/offers/PreviewOffers/NDY1Nzg=">

        <Button size="small" color="primary">
          Learn More
        </Button>
        </Link>
      </CardActions>
    </Card>

    </Grid>




  </Grid>








</div>
  );
}
export default OfferingCard;
