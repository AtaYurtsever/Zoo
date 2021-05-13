import { Button, Card, CardActionArea, CardActions, CardMedia, Grid } from "@material-ui/core"
import { Link, useHistory } from "react-router-dom"



export function Events(){
  let gt = <Grid key={"GT"} item>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component = "img"
                        alt="something"
                        height="140"
                        image="/gt_logo.jpg"
                        title="Browse Group Tours"
                      />
                    </CardActionArea>
                    <CardActions> 
                      <Button component={Link} to="/gt">
                      Browse Group Tours
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>

    let ev = <Grid key={"EV"} item>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component = "img"
                        alt="something"
                        height="140"
                        image="/ev_logo.jpg"
                        title="Browse Educational Events"
                      />
                    </CardActionArea>
                    <CardActions> 
                      <Button component={Link} to="/ev">
                      Browse Educational Events
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>

    let co = <Grid key={"CO"} item>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component = "img"
                        alt="something"
                        height="140"
                        image="/co_logo.jpg"
                        title="Browse Conservation Organizations"
                      />
                    </CardActionArea>
                    <CardActions> 
                      <Button component={Link} to="/co">
                      Browse Conservation Organizations
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>


    return (<Grid container justify="center" spacing={10} style={{flexGrow:1}}>
        {gt}
        {ev}
        {co}
    </Grid>)
}


/*
import { AppBar, Toolbar, Typography,GridList, GridListTile, GridListTileBar, makeStyles, Button, CardActions} from "@material-ui/core"
import { Info } from "@material-ui/icons"
import axios from "axios"
import { useEffect, useState } from "react"
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link, useHistory } from "react-router-dom"


const useStyles = makeStyles(()=>({
    gridList: {
        width: 600,
        height: 750,
  },
  buttonBase: {
        width: 600,
        height: 750,
  }
}))

export function Event(){
    
    const event = useStyles();

    const tileData = [
        {
            img: "gt_logo.jpg",
            title: "Browse Group Tours",
            url: "/groupTours"
        },
        {
            img: "co_logo.jpg",
            title: "Browse Conservation Organizations",
            url: "/consOrg"
        },
        {
            img: "ev_logo.jpg",
            title: "Browse Educational Events",
            url: "/edEvents"
        }
    ];
    
    return (
        <div className={event.root}
        style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
        }}>
          <GridList className={event.gridList} cols={1}>
            {tileData.map((tile) => (
              <GridListTile key={tile.img} >
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                  title={tile.title}
                  classes={{
                    root: event.titleBar,
                    title: event.title,
                  }}
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      );
}
*/