import { GridList, GridListTile, GridListTileBar, IconButton, makeStyles } from "@material-ui/core"
import { Info } from "@material-ui/icons"
import axios from "axios"
import { useEffect, useState } from "react"

const useStyles = makeStyles(()=>({
    gridList: {
        width: 500,
        height: 450,
  },
}))

export function Animals(){
    const [animals, setAnimals] = useState([])


    useEffect(()=>{
        axios("https://jsonplaceholder.typicode.com/posts")
        .then(data => data.data)
        .then(data => setAnimals(data))
    },[])

    return <GridList cellHeight={350} >
        {
            animals.map(animal => (
                <GridListTile key={animal.title}>
                    <img src={"https://cataas.com/cat"} />
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