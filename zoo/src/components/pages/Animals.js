import { GridList, GridListTile, GridListTileBar, IconButton, makeStyles } from "@material-ui/core"
import { Info } from "@material-ui/icons"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from 'react-router-dom';

const useStyles = makeStyles(()=>({
    gridList: {
        width: 500,
        height: 450,
  },
}))

export function Animals(props){
    const [animals, setAnimals] = useState([])
    const {name} = useParams()
    // useEffect(()=>{
    //     axios("http://localhost:3003/animals")
    //     .then(data => data.data)
    //     .then(data => {
    //         if(!data.exists) props.setFail(data.message) 
    //         else setAnimals(data.animals)
    //     })
    // },[])

    useEffect(() => {
        axios(`http://localhost:3003/animals/${name}`)
        .then(data => data.data)
        .then(data =>{
            if(!data.exists) props.fail(data.message)
            else setAnimals(data.animals)
        })
    },[])

    return <GridList cellHeight={350} >
        {
            animals.map((animal,index) => (
                <GridListTile key={animal.title} margin="dense">
                    <img src={`/animals/p${index%2}.jpg`} />
                    <GridListTileBar
                        
                        title={animal.title}
                        subtitle={animal.body.substr(0,10) + "..."}
                            actionIcon={
                        <IconButton aria-label={`info about ${animal.title}`}>
                            <Info/>
                        </IconButton>
                    }
                    />
                </GridListTile>
            ))
        }
    </GridList>
}