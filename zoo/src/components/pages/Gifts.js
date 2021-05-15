import { GridList, GridListTile, GridListTileBar, IconButton, makeStyles } from "@material-ui/core"
import { Info, Shop } from "@material-ui/icons"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from 'react-router-dom';

const useStyles = makeStyles(()=>({
    gridList: {
        width: 500,
        height: 450,
  },
}))

export function Gifts(props){
    const [gifts, setGifts] = useState([]) 
    const {name} = useParams()
    useEffect(()=>{
        axios(`http://localhost:3003/gift/shops/${name}`)
        .then(data => data.data)
        .then(data => {
            if(!data.exists) props.setFail(data.message)
            else setGifts(data.gifts)
        })
    },[])

    return <>
    <h1>Welcome to {name}!</h1>
    <h2>We are very proud to display our {gifts.length} items.</h2>
    <GridList cellHeight={150} >
        {
            gifts.map((gift,index) => (
                <GridListTile key={gift.name}>
                    <img src={`/shop/p${index%3}.jpg`} />
                    <GridListTileBar
                        margin="dense"
                        cols={2}
                        title={gift.name}
                        subtitle={gift.price}
                        actionIcon={
                        <IconButton aria-label={`info about ${gift.name}`}>
                            <Shop/>
                        </IconButton>
                    }
                    />
                </GridListTile>
            ))
        }
    </GridList>
    </>
}