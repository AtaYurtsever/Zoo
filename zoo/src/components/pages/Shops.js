import { GridList, GridListTile, GridListTileBar, IconButton, makeStyles } from "@material-ui/core"
import { Info, Shop } from "@material-ui/icons"
import axios from "axios"
import { useEffect, useState } from "react"

const useStyles = makeStyles(()=>({
    gridList: {
        width: 500,
        height: 450,
  },
}))

export function Shops(props){
    const [shops, setShops] = useState([])

    useEffect(()=>{
        axios("http://localhost:3003/gift/shops")
        .then(data => data.data)
        .then(data => {
            if(!data.exists) props.setFail(data.message)
            else setShops(data.shops)
        })
    },[])

    return <GridList cellHeight={350} >
        {
            shops.map((shop,index) => (
                <GridListTile key={shop.name}>
                    <img src={`/shop/p${index%3}.jpg`} />
                    <GridListTileBar
                        margin="dense"
                        title={shop.name}
                            actionIcon={
                        <IconButton aria-label={`info about ${shop.name}`}>
                            <Shop/>
                        </IconButton>
                    }
                    />
                </GridListTile>
            ))
        }
    </GridList>
}