import { Button, TextField, Dialog, DialogTitle, DialogActions, GridList, GridListTile, GridListTileBar, IconButton, makeStyles, Slider } from "@material-ui/core"
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
    const [open,setOpen] = useState(false)
    const [searchQ, setSearchQ] = useState("")
    const [range,setRange] = useState([0,1000])

    const submit = ()=>{
        axios.post(`http://localhost:3003/gift/search`,{shop:name, min: range[0], max: range[1], search: searchQ})
        .then(data => data.data)
        .then(data => {
            if(!data.exists) props.fail(data.message)
            else {
                setGifts(data.gifts)
                setOpen(false)
                }
        })
    }

    const search = <>
            <Button color="primary" onClick={()=>setOpen(true)}>Search</Button>
            <Dialog  
                open={open} 
                onClose={()=>setOpen(false)}>
                <DialogTitle id="login-dialog-title">Search</DialogTitle>
                    <TextField
                    required
                    autoFocus
                    margin="dense"
                    id="q"
                    label="search"
                    fullWidth
                    value={searchQ}
                    onChange={val => setSearchQ(val.target.value)}
                    style={{width:"70%", left:"15%"}}
                    />
                    <Slider
                        value={range}
                        onChange={(val,nv) => setRange(nv)}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        max = {500}
                        min = {0}
                    style={{width:"70%", left:"15%"}}
                        />
        
                    <DialogActions> 
                        <Button color="primary" onClick={()=>submit()}>Search</Button>
                    </DialogActions>
            </Dialog>
            </>

    const buy = (product_code)=>{
        axios.post(`http://localhost:3003/gift/buy`,{product_code:product_code,username:props.user.username})
            .then(data => data.data)
            .then(data => {
                if(!data.exists) props.fail(data.message);
                else props.success(data.message);
            }).then(onLoad)
    }

    const onLoad = ()=>{
        axios(`http://localhost:3003/gift/shops/${name}`)
        .then(data => data.data)
        .then(data => {
            if(!data.exists) props.fail(data.message)
            else setGifts(data.gifts)
        })
    }

    useEffect(onLoad,[])

    return <>
    <h1>Welcome to {name}!</h1>
    <h2>We are very proud to display our {gifts.length} items.</h2>
    {search}
    <GridList cellHeight={150} >
        { gifts.map((gift,index) => (
                <GridListTile key={gift.name + index} margin="dense">
                    <img src={`/shop/p${index%3}.jpg`} />
                    <GridListTileBar
                        cols={2}
                        title={gift.name}
                        subtitle={parseFloat(gift.discount) === 0 ? gift.price: withDiscount(parseFloat(gift.price), parseFloat(gift.discount))}
                        actionIcon={
                        props.user && props.user.type === "visitor" ?
                        <IconButton aria-label={`Buy ${gift.name}`} onClick={(_) => buy(gift.product_code)}>
                            <Shop/>
                        </IconButton>: <></>
                    }/>
                    
                    {(parseFloat(gift.discount) !== 0) ?
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