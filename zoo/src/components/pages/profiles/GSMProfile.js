
import { 
    Grid, 
    Paper, 
    Input, 
    TableBody, 
    TableHead, 
    Table, 
    TableRow, 
    TableCell, 
    TableContainer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "42vh"
  },
}));

export function GSMProfile(props){

    const classes = useStyles(); 
    const [GSM, setGSM] = useState(null)
    const [soldStuff, setSoldStuff] = useState([])
    const [profit, setProfit] = useState({max:"", sum:""})

    const onLoad = ()=>{ 
        axios.post('http://localhost:3003/auth/gsm',{username:props.user.username})
            .then(data => data.data)
            .then(data => {
                if(!data.exists) props.fail(data.message);
                else setGSM(data.gsm);
            })
        axios.post('http://localhost:3003/gift/soldStuff',{username:props.user.username})
            .then(data => data.data)
            .then(data => {
                if(!data.exists) props.fail(data.message);
                else setSoldStuff(data.value);
            })
        axios.post('http://localhost:3003/gift/profit',{username:props.user.username})
            .then(data => data.data)
            .then(data => {
                if(!data.exists) props.fail(data.message);
                else setProfit(data.value);
            })
    }

    useEffect(onLoad,[])

    const info = GSM ? <Paper className={classes.paper}>
        <h1>Name: {GSM.name + "  " + GSM.surname}</h1> 
        <h2>Phone: {GSM.phone}</h2>
        <h3>Salary: {GSM.salary}</h3>
    </Paper> : <></>

    const profitField = GSM ? <Paper className={classes.paper}>
        <h2>Giftshop: {GSM.shop_name}</h2>
        <h1>Highest sale last 7 days: {profit.max}</h1> 
        <h2>Total sale last 7 days: {profit.sum}</h2>
    </Paper> : <></>

    const moneyField = GSM ? <TableContainer component={Paper} className={classes.paper}>
        <h2>Sold items</h2>
        <Table aria-label="sold">
            <TableHead>
                <TableRow>
                    <TableCell> pid </TableCell>
                    <TableCell> Gift </TableCell>
                    <TableCell> GiftShop </TableCell>
                    <TableCell> Bought&nbsp;by </TableCell>
                    <TableCell> Date </TableCell>
                    <TableCell> Price </TableCell>
                    <TableCell> Discount </TableCell>
                    <TableCell> Sale&nbsp;Price</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {soldStuff.map((row) => (
                    <TableRow key={row.product_code}>
                        <TableCell component="th" scope="row">
                            {row.product_code}
                        </TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.shop}</TableCell>
                        <TableCell align="right">{row.username}</TableCell>
                        <TableCell align="right">{row.buy_date}</TableCell>
                        <TableCell align="right">{row.price}</TableCell>
                        <TableCell align="right">{`${parseFloat(row.discount)*100}%`}</TableCell>
                        <TableCell align="right">{row.salevalue}</TableCell>
                    </TableRow> 
                ))}
            </TableBody>
        </Table>
    </TableContainer> : <></>          

    return (
        <Grid container spacing={3}>
            <Grid item xs={6}>
                {info}
            </Grid>
            <Grid item xs={6}>
                {profitField}
            </Grid>
            <Grid item xs={12}>
                {moneyField}
            </Grid>
        </Grid>
    )
}