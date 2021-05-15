import { GridList, GridListTile, GridListTileBar, IconButton, makeStyles } from "@material-ui/core"
import { Info, Shop } from "@material-ui/icons"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from 'react-router-dom';

function withDiscount(price,discount){
    return <><strike>{price}</strike>  {price*(1-discount)}₺</>
}

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
                <GridListTile key={gift.name} margin="dense">
                    <img src={`/shop/p${index%3}.jpg`} />
                    <GridListTileBar
                        cols={2}
                        title={gift.name}
                        subtitle={parseFloat(gift.discount) === 0 ? gift.price: withDiscount(parseFloat(gift.price), parseFloat(gift.discount))}
                        actionIcon={
                        <IconButton aria-label={`info about ${gift.name}`}>
                            <Shop/>
                        </IconButton>
                    }
                    />
                    {(parseFloat(gift.discount)!== 0) ?
                        <GridListTileBar
                            titlePosition="top"
                            margin="dense"
                            cols={2}
                            title={parseFloat(gift.discount)*100 + "% Discount"}
                            style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'}}
                        /> : ""
                    }
                </GridListTile>
            ))
        }
    </GridList>
    </>
}