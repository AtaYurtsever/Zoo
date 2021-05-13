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

export function BrowseConsOrg(){
    const [consOrgs, setConsOrg] = useState([])


    useEffect(()=>{
        axios("https://jsonplaceholder.typicode.com/posts")
        .then(data => data.data)
        .then(data => setConsOrg(data))
    },[])

    return <GridList cellHeight={350} >
        {
            consOrgs.map(co => (
                <GridListTile key={co.title}>
                    <img src={"/co_logo.jpg"} />
                    <GridListTileBar
                        title={co.title}
                    />
                </GridListTile>
            ))
        }
    </GridList>
}