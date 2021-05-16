import { Button, CardHeader, GridList, GridListTile, GridListTileBar, IconButton, makeStyles } from "@material-ui/core"
import { Info } from "@material-ui/icons"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import React from 'react';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles(()=>({
    gridList: {
        width: 500,
        height: 450,
  },
}))

export function AnimalInfo(props){
    const classes = useStyles();
    const[expanded, setExpanded] = React.useState(false);
    const [a, setAnimals] = useState(null)
    const {name, type} = useParams()


    const onLoad = () => {
        axios.post(`http://localhost:3003/animals/get`, {name:name, type:type} )
        .then(data=>data.data)
        .then(data => {
            if(!data.exists) props.fail(data.message)
            else setAnimals(data.value)
        })
    }
    useEffect(onLoad, [])
    console.log(a)
    if(a)
    return <>
        <Card className ={classes.root}>
            <CardHeader
                title={name}
                subheader={`${a.type}  ${a.notable_features}`}
            />
            <img src={"/animals/a0.jpg"} width="600" height="400" align="center"/>
        </Card>
    </>
    else return <></>
}



export function Animals(props){
    const [animals, setAnimals] = useState([])
    const classes = useStyles()
    useEffect(()=>{
        axios("http://localhost:3003/animals")
        .then(data => data.data)
        .then(data => {
            if(!data.exists) props.setFail(data.message) 
            else setAnimals(data.animals)
        })
    },[])

    return <GridList cellHeight={350} >
        {
            animals.map((animal,index) => (
                <GridListTile key={animal.name} margin="dense">
                    <img src={`/animals/a${index%4}.jpg`} />
                    <GridListTileBar
                        
                        title={animal.name}
                        subtitle={animal.type}
                        actionIcon={
                        <IconButton aria-label={`info about ${animal.name}`} className={classes.icon}>
                        <Button component={Link} to={`/animals/${animal.name}/${animal.type}`} className={classes.icon}>
                            <InfoIcon/>
                            </Button>
                        </IconButton>
                        }
                    />
                </GridListTile>
            ))
        }
    </GridList>
}