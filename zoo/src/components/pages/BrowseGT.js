import { Typography, Button, GridList, GridListTile, GridListTileBar, IconButton, makeStyles } from "@material-ui/core"
import axios from "axios"
import { useEffect, useState } from "react"
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { Link, useHistory, useParams } from "react-router-dom"
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

export function GtComplaint(props){
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [gt, setGroupTours] = useState([])
  const {name} = useParams()

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const onLoad = (props)=>{
    axios(`http://localhost:3003/gt/complaint/${name}`)
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
        <h2 startIcon={<FeedbackIcon />}>{comment.complaint_type} : {comment.message} on {comment.complaint_date}</h2>
        <h3 >RESPONSE OF COORDINATOR: {comment.response}</h3> 
          </>
    ))}
    </GridList>
    </>
      else return <></>
}

export function GtComment(props){
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [gt, setGroupTours] = useState([])
  const {name} = useParams()

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const onLoad = (props)=>{
    axios(`http://localhost:3003/gt/comment/${name}`)
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
        <h2 startIcon={<FeedbackIcon />}>{comment.message} on {comment.comment_date}</h2>
    ))}
    </GridList>
    </>
      else return <></>
}

export function GtInfo(props){
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [gt, setGroupTours] = useState(null)
    const {name} = useParams()
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const onLoad = (props)=>{
      axios(`http://localhost:3003/gt/${name}`)
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
      <Card className={classes.root}>
        <CardHeader
          title={name}
          subheader= {`${gt.event_date}`}
        />
        <img src={"/gt_logo.jpg"}  width="600" height="400" align="center"/>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Length: {gt.length}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            Capacity: {gt.capacity} 
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            Price: {gt.price}
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
                component={Link} to={`/gt/comment/${gt.event_name}`}>
                View Comments
            </Button>
            <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<FeedbackIcon />}
                component={Link} to={`/gt/complaint/${gt.event_name}`}>
                View Complaints
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
                {gt.explanation}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      </>
      else return <></>
}

export function BrowseGroupTours(props){
    const [groupTours, setGroupTours] = useState([])
    const classes = useStyles();

    useEffect(()=>{
        axios(`http://localhost:3003/gt`)
        .then(data => data.data)
        .then(data => {
          if(!data.exists) props.setFail(data.message)
          else setGroupTours(data.value)
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
                <GridListTile key={gt.event_name}>
                    <img src={"/gt_logo.jpg"} />
                    <GridListTileBar
                        title={gt.event_name}
                        actionIcon={
                            <IconButton aria-label={`info about ${gt.event_name}`} className={classes.icon}>
                              <Button component={Link} to={`/gt/${gt.event_name}`} className={classes.icon}>
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