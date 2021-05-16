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
    useEffect(()=>{
        axios("http://localhost:3003/animals")
        .then(data => data.data)
        .then(data => {
            if(!data.exists) props.setFail(data.message) 
            else setAnimals(data.animals)
        })
    },[])

    // useEffect(() => {
    //     axios(`http://localhost:3003/animals/${name}`)
    //     .then(data => data.data)
    //     .then(data =>{
    //         if(!data.exists) props.fail(data.message)
    //         else setAnimals(data.animals)
    //     })
    // },[])

    return <GridList cellHeight={350} >
        {
            animals.map((animal,index) => (
                <GridListTile key={animal.name} margin="dense">
                    <img src={`/animals/a${index%4}.jpg`} />
                    <GridListTileBar
                        
                        title={animal.name}
                        subtitle={animal.type}
                            actionIcon={
                        <IconButton aria-label={`info about ${animal.name}`}>
                            <Info/>
                        </IconButton>
                    }
                    />
                </GridListTile>
            ))
        }
    </GridList>
}