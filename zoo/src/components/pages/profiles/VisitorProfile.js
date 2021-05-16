
import { Grid, Paper, Input, InputAdornment, Button } from '@material-ui/core';
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

export function VisitorProfile(props){

    const classes = useStyles(); 
    const [visitor, setVisitor] = useState(null)
    const [money, setMoney] = useState(0)

    const submit = ()=>{
        axios.post('http://localhost:3003/auth/money',{username:props.user.username, amount: money})
            .then(data => data.data)
            .then(data => {
                if(!data.exists) props.fail(data.message)
                else props.success(data.message)
            }).then(onLoad)
    }

    const onLoad = ()=>{ 
        axios.post('http://localhost:3003/auth/visitor',{username:props.user.username})
            .then(data => data.data)
            .then(data => {
                if(!data.exists) props.fail(data.message);
                else setVisitor(data.visitor);
            })
    }

    useEffect(onLoad,[])

    const info = visitor ? <Paper className={classes.paper}>
        <h1>Name: {visitor.name + "  " + visitor.surname}</h1> 
        <h2>Phone: {visitor.phone}</h2>
    </Paper> : <></>

    const moneyField = visitor ? <Paper className={classes.paper}>
        <h2>Money: {visitor.total_money}</h2>
        <FormControl fullWidth >
            <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
            <Input
                id="standard-adornment-amount"
                value={money}
                onChange={(val)=> setMoney(val.target.value)}
                startAdornment={<InputAdornment position="start">₺</InputAdornment>}
            />
        </FormControl>
        <Button onClick={submit}
            style={{width:"70%", marginTop:10}}
            color="primary" 
            variant="contained">
                Insert
        </Button>
    </Paper> : <></>

    return (
        <Grid container spacing={3}>
            <Grid item xs={6}>
                {info}
            </Grid>
            <Grid item xs={6}>
                {moneyField}
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
        </Grid>
    )
}