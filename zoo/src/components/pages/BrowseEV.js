import { Typography, Button, GridList, GridListTile, GridListTileBar, IconButton, makeStyles } from "@material-ui/core"
import axios from "axios"
import { useEffect, useState } from "react"
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { Link, useParams } from "react-router-dom"
import InfoIcon from '@material-ui/icons/Info';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';
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

export function EvComplaint(props){
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [gt, setGroupTours] = useState([])
  const {name} = useParams()

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const onLoad = (props)=>{
    axios(`http://localhost:3003/ev/complaint/${name}`)
    .then(data => data.data)
    .then(data => {
        if(!data.exists) props.fail(data.message)
        else setGroupTours(data.value)
    })
  }
  useEffect(onLoad,[])
  console.log(gt)
  if( gt)
    return <>
    <h1>Complaints on {name}</h1>
    <GridList cellHeight={150} >
        {
        gt.map((comment,index) => (
          <>
        <h2>{comment.complaint_type} : {comment.message} on {comment.complaint_date}</h2>
        <h3 >RESPONSE OF COORDINATOR: {comment.response}</h3> 
          </>
    ))}
    </GridList>
    </>
      else return <></>
}

export function EvComment(props){
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [gt, setGroupTours] = useState([])
  const {name} = useParams()

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const onLoad = (props)=>{
    axios(`http://localhost:3003/ev/comment/${name}`)
    .then(data => data.data)
    .then(data => {
        if(!data.exists) props.fail(data.message)
        else setGroupTours(data.value)
    })
  }
  useEffect(onLoad,[])
  console.log(gt)
  if( gt)
    return <>
    <h1>Comments on {name}</h1>
    <GridList cellHeight={150} >
        {
        gt.map((comment,index) => (
        <h2 >{comment.message} on {comment.comment_date}</h2>
    ))}
    </GridList>
    </>
      else return <></>
}
export function EvInfo(props){
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [ev, setEdEvents] = useState(null)
    const {name} = useParams()

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const onLoad = (props)=>{
      axios(`http://localhost:3003/ev/${name}`)
      .then(data => data.data)
      .then(data => {
          if(!data.exists) props.fail(data.message)
          else setEdEvents(data.value)
      })
    }
    useEffect(onLoad,[])
    console.log(ev)
    if( ev)
    return <>
      <Card className={classes.root}>
        <CardHeader
          title={name}
          subheader={`${ev.event_date}`}
        />
        <img src={"/ev_logo.jpg"}  width="600" height="400" align="center"/>
        <CardContent>
        
          <Typography variant="body2" color="textSecondary" component="p">
            Topic: {ev.topic}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Length: {ev.length}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Veterinarians Joining: TODO
          </Typography>

        </CardContent>
        <CardActions disableSpacing>
            <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<EmojiNatureIcon/>}
                >
                JOIN
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
            <Typography paragraph>Explanation about the Event:</Typography>
            <Typography paragraph>
                {ev.explanation}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
    else return <></>
}


export function BrowseEdEvents(props){
    const [edEvents, setEdEvents] = useState([])
    const classes = useStyles();


    useEffect(()=>{
        axios("http://localhost:3003/ev")
        .then(data => data.data)
        .then(data => {
          if(!data.exists) props.setFail(data.message)
          else setEdEvents(data.value)
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
            edEvents.map(ev => (
                <GridListTile key={ev.event_name}>
                    <img src={"/ev_logo.jpg"} />
                    <GridListTileBar
                        title={ev.event_name}
                        actionIcon={
                            <IconButton aria-label={`info about ${ev.event_name}`} className={classes.icon}>
                              <Button component={Link} to={`/ev/${ev.event_name}`} className={classes.icon}>
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