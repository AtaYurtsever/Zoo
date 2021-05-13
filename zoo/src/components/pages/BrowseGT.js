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

export function BrowseGroupTours(){
    const [gtours, setGroupTours] = useState([])


    useEffect(()=>{
        axios("https://jsonplaceholder.typicode.com/posts")
        .then(data => data.data)
        .then(data => setGroupTours(data))
    },[])

    return <GridList cellHeight={350} >
        {
            gtours.map(gt => (
                <GridListTile key={gt.title}>
                    <img src={"/gt_logo.jpg"} />
                    <GridListTileBar
                        title={gt.title}
                    />
                </GridListTile>
            ))
        }
    </GridList>
}