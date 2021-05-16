import { Typography, Button, GridList, GridListTile, GridListTileBar, IconButton, makeStyles } from "@material-ui/core"
import axios from "axios"
import { useEffect, useState } from "react"
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { Link, useHistory } from "react-router-dom"
import InfoIcon from '@material-ui/icons/Info';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import FeedbackIcon from '@material-ui/icons/Feedback';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import RateReviewIcon from '@material-ui/icons/RateReview';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';

const useStyles = makeStyles((theme)=>({
    gridList: {
        width: 500,
        height: 450,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.primary.light, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.light, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    marginBottom: 30
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  button: {
    margin: theme.spacing(1),
  }
}))


export function GtInfo(){
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [gt, setGroupTours] = useState([])
  
    useEffect(()=>{
        axios("https://jsonplaceholder.typicode.com/posts")
        .then(data => data.data)
        .then(data => setGroupTours(data))
    },[])

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
      <Card className={classes.root}>
        <CardHeader
          title="{gt.event_name}"
          subheader="{{gt.event_date} + {gt.time}}"
        />
        <img src={"/gt_logo.jpg"}  width="600" height="400" align="center"/>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Length: +"{gt.length}"
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            Capacity: +"{gt.capacity}"
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            Price: +"{gt.price}"
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<RateReviewIcon />}
                >
                Provide Feedback
            </Button>
            <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<FeedbackIcon />}
                >
                View Feedback
            </Button>
            <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<EventSeatIcon/>}
                >
                Reserve Place
            </Button>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Explanation about the Tour:</Typography>
            <Typography paragraph>
                "{gt.explanation}"
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
}

export function BrowseGroupTours(props){
    const [groupTours, setGroupTours] = useState([])
    const classes = useStyles();


    useEffect(()=>{
        axios(`http://localhost:3003/gt`)
        .then(data => data.data)
        .then(data => {
          if(!data.exists) props.setFail(data.message)
          else setGroupTours(data.groupTours)
      })
    },[])

    return (
        <div>
        <div className={classes.search}>
        <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
      <GridList cellHeight={350} >
        {
            groupTours.map(gt => (
                <GridListTile key={gt.title}>
                    <img src={"/gt_logo.jpg"} />
                    <GridListTileBar
                        title={gt.title}
                        actionIcon={
                            <IconButton aria-label={`info about ${gt.title}`} className={classes.icon}>
                              <Button component={Link} to="/gt_info" className={classes.icon}>
                              <InfoIcon />
                              </Button>
                            </IconButton>
                          }
                    />
                </GridListTile>
            ))
        }
    </GridList>
      </div>)
}