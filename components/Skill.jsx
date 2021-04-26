import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from './tileData';
import {Grid,Card,CardActionArea, CardActions,CardContent,CardMedia,Button ,Typography}   from '@material-ui/core';
import {motion} from "framer-motion";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
borderRadius: "30px",
      margin: 'auto',
      minWidth:200,
          width:220,
          height:220
    },

    gridContainer:{

      padding:300
    }, media: {

        height: "150 px",
        width:"300 px",
        padding:"32.8%"
         // 16:9
      }
  }),
);

export default function Skill() {
  const classes = useStyles();

  return (
    <div className={classes.gridContainer}>
    <Grid container spacing={1}  justify="space-evenly">

        {tileData.map((tile) => (

          <Grid item sm={1.1} ms={1}   spacing={0.3}>

          <motion.p   whileHover={{
                position: 'relative',
                zIndex: 1,

                scale: [1, 1.4, 1.2],
                rotate: [0, 10, -10, 0],

                transition: {
                  duration: .5
                }
              }}>

          <Card className={classes.root} >

            <CardActionArea>
              <CardMedia className={classes.media}
                image={tile.img}
                title={tile.title}
              />
              </CardActionArea>
              </Card>
</motion.p>


              </Grid>


        ))}
      </Grid>
    </div>
  );
}
