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
import FeedbackIcon from '@material-ui/icons/Feedback';
import PublicIcon from '@material-ui/icons/Public';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

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
  },
}))


export function CoComplaint(props){
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [gt, setGroupTours] = useState([])
  const {name} = useParams()

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const onLoad = (props)=>{
    axios(`http://localhost:3003/co/complaint/${name}`)
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

export function CoComment(props){
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [gt, setGroupTours] = useState([])
  const {name} = useParams()

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const onLoad = (props)=>{
    axios(`http://localhost:3003/co/comment/${name}`)
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
        <h2>{comment.message} on {comment.comment_date}</h2>
    ))}
    </GridList>
    </>
      else return <></>
}


export function CoInfo(props){
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [co, setConsOrg] = useState(null)
    const {name} = useParams()
   
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const onLoad = (props)=>{
      axios(`http://localhost:3003/co/${name}`)
      .then(data => data.data)
      .then(data => {
          if(!data.exists) props.fail(data.message)
          else setConsOrg(data.value)
      })
    }
    useEffect(onLoad,[])
    console.log(co)
    if( co)
    return <>
      <Card className={classes.root}>
        <CardHeader
          title={name}
          subheader={`${co.event_date}`}
        />
        <img src={"/co_logo.jpg"}  width="600" height="400" align="center"/>
        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            Purpose: {co.purpose}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Target Money: {co.target_money}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Target Place: {co.target_place}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Length: {co.length}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <FormControl fullWidth className={classes.margin}>
                <InputLabel htmlFor="standard-adornment-amount">Enter Amount to Donate</InputLabel>
                <Input
                    id="standard-adornment-amount"
                    value={""}
                    startAdornment={<InputAdornment position="start">₺</InputAdornment>}
                />
            </FormControl>
            <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<PublicIcon/>}
                >
                DONATE
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
            <Typography paragraph>Explanation about the Organization:</Typography>
            <Typography paragraph>
                {co.explanation}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
    else return <></>
}


export function BrowseConsOrg(props){
    const [consOrgs, setConsOrg] = useState([])
    const classes = useStyles();


    useEffect(()=>{
        axios("http://localhost:3003/co")
        .then(data => data.data)
        .then(data => {
          if(!data.exists) props.setFail(data.message)
          else setConsOrg(data.value)
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
            consOrgs.map(co => (
                <GridListTile key={co.event_name}>
                    <img src={"/co_logo.jpg"} />
                    <GridListTileBar
                        title={co.event_name}
                        actionIcon={
                            <IconButton aria-label={`info about ${co.event_name}`} className={classes.icon}>
                              <Button component={Link} to={`/co/${co.event_name}`} className={classes.icon}>
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