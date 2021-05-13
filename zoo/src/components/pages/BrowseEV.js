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

export function BrowseEdEvents(){
    const [edEvents, setEdEvents] = useState([])


    useEffect(()=>{
        axios("https://jsonplaceholder.typicode.com/posts")
        .then(data => data.data)
        .then(data => setEdEvents(data))
    },[])

    return <GridList cellHeight={350} >
        {
            edEvents.map(ev => (
                <GridListTile key={ev.title}>
                    <img src={"/ev_logo.jpg"} />
                    <GridListTileBar
                        title={ev.title}
                    />
                </GridListTile>
            ))
        }
    </GridList>
}