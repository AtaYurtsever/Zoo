
import { 
    Grid, 
    Paper, 
    Input, 
    TableBody, 
    TableHead, 
    Table, 
    TableRow, 
    TableCell, 
    TableContainer, 
    Button,
    Select,
    Dialog,
DialogTitle,
MenuItem, TextField, DialogActions} from '@material-ui/core';
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

export function KeeperProfile(props){

    const classes = useStyles(); 
    const [keeper, setKeeper] = useState(null)
    const [cages, setCages] = useState([])
    const [vets, setVets] = useState([])
    const [regularized, setRegularized] = useState([]) 
    const [food, setFood] = useState([])
    const [openReg, setOpenReg] = useState(false)
    const [openT, setOpenT] = useState(false)
    const [selectedVet, setVet] = useState('')
    const [selectedAnimal, setAnimal] = useState(["",""])
    const [condition, setCondition] = useState("")
    const [cage, setCage] = useState("")
    const [sfood, setsFood] = useState("")
    const [portion, setPortion] = useState(1)
    const [frequency, setFrequency] = useState(1)


    const insertTreatment = () => {
        axios.post('http://localhost:3003/vet/insertTreatment',{requested: selectedVet, requester:props.user.username, animal_name:selectedAnimal[0], animal_type:selectedAnimal[1], condition:condition})
            .then(onLoad)
    }

    const insertRegularize = () => {
        axios.post('http://localhost:3003/vet/insertRegularize',{cage:cage, food:sfood, keep:props.user.username, portion: portion, freq:frequency})
            .then(onLoad)
    }

    const onLoad = ()=>{ 
        axios.get('http://localhost:3003/auth/vets')
            .then(data => data.data)
            .then(data => {
                if(!data.exists) props.fail(data.message);
                else setVets(data.value);
            })
        axios.post('http://localhost:3003/auth/keeper',{username:props.user.username})
            .then(data => data.data)
            .then(data => {
                if(!data.exists) props.fail(data.message);
                else setKeeper(data.value);
            })
        axios.post('http://localhost:3003/vet/cages',{username:props.user.username})
            .then(data => data.data)
            .then(data => {
                if(!data.exists) props.fail(data.message);
                else setCages(data.value);
            })
        axios.post('http://localhost:3003/vet/regularized',{username:props.user.username})
            .then(data => data.data)
            .then(data => {
                if(!data.exists) props.fail(data.message);
                else setRegularized(data.value);
            })
        axios.get('http://localhost:3003/vet/food')
            .then(data => data.data)
            .then(data => {
                if(!data.exists) props.fail(data.message);
                else setFood(data.value);
            })
    }

    useEffect(onLoad,[])

    const info = keeper ? <Paper className={classes.paper}>
        <h1>Name: {keeper.name + "  " + keeper.surname}</h1> 
        <h2>Phone: {keeper.phone}</h2>
        <h3>Salary: {keeper.salary}</h3>

    </Paper> : <></>

const regBtn = <>
            <Button color="primary" onClick={()=>setOpenT(true)}>regularize</Button>
            <Dialog  
                open={openT} 
                onClose={()=>setOpenT(false)}>
                <DialogTitle id="login-dialog-title">regularize</DialogTitle>
                    <Select
                        onChange={(event) => setsFood(event.target.value)}
                    style={{width:"70%", left:"15%"}}
                    >
                     {food.map(vet=>(
                         <MenuItem value={vet.food_id}>{vet.name}</MenuItem>
                     ))}   
                    </Select>
                    <Select
                        onChange={(event) => setCage(event.target.value)}
                    style={{width:"70%", left:"15%"}}
                    >
                     {cages.map(vet=>(
                         <MenuItem value={vet.cage_id}>{vet.address}</MenuItem>
                     ))}   
                    </Select>
                    
                    <TextField
                    required
                    autoFocus
                    margin="dense"
                    id="q"
                    label="portion"
                    fullWidth
                    value={portion}
                    onChange={val => setPortion(val.target.value)}
                    style={{width:"70%", left:"15%"}}
                    />

                    <TextField
                    required
                    autoFocus
                    margin="dense"
                    id="q"
                    label="frequency"
                    fullWidth
                    value={frequency}
                    onChange={val => setFrequency(val.target.value)}
                    style={{width:"70%", left:"15%"}}
                    />

                    <DialogActions> 
                        <Button color="primary" onClick={()=>insertRegularize()}>regularize</Button>
                    </DialogActions>
            </Dialog>
            </>

    const trtmntBtn = <>
            <Button color="primary" onClick={()=>setOpenReg(true)}>treatment</Button>
            <Dialog  
                open={openReg} 
                onClose={()=>setOpenReg(false)}>
                <DialogTitle id="login-dialog-title">treatment</DialogTitle>
                    <Select
                        onChange={(event) => setVet(event.target.value)}
                    style={{width:"70%", left:"15%"}}
                    >
                     {vets.map(vet=>(
                         <MenuItem value={vet.username}>{vet.username}</MenuItem>
                     ))}   
                    </Select>
                    <Select
                        onChange={(event) => setAnimal(event.target.value)}
                    style={{width:"70%", left:"15%"}}
                    >
                     {cages.map(vet=>(
                         <MenuItem value={[vet.name,vet.type]}>{vet.name} {vet.type}</MenuItem>
                     ))}   
                    </Select>
                    
                    <TextField
                    required
                    autoFocus
                    margin="dense"
                    id="q"
                    label="condition"
                    fullWidth
                    value={condition}
                    onChange={val => setCondition(val.target.value)}
                    style={{width:"70%", left:"15%"}}
                    />

                    <DialogActions> 
                        <Button color="primary" onClick={()=>insertTreatment()}>treatment</Button>
                    </DialogActions>
            </Dialog>
            </>

    const invitedField = keeper ? 
    <TableContainer component={Paper} className={classes.paper}>
        <h2>Assigned</h2>
        {trtmntBtn}
        <Table aria-label="sold">
            <TableHead>
                <TableRow>
                    <TableCell> cage </TableCell>
                    <TableCell> address </TableCell>
                    <TableCell> animal name </TableCell>
                    <TableCell> animal type </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {cages.map((row) => (
                    <TableRow key={row.cage_id}>
                        <TableCell component="th" scope="row">
                            {row.cage_id}
                        </TableCell>
                        <TableCell align="right">{row.address}</TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.type}</TableCell>
                    </TableRow> 
                ))}
            </TableBody>
        </Table>
    </TableContainer> : <></>         
    
    const requestField = keeper ? 
    <TableContainer component={Paper} className={classes.paper}>
        <h2>Regularized</h2>
        {regBtn}
        <Table aria-label="sold">
            <TableHead>
                <TableRow>
                    <TableCell> cage</TableCell>
                    <TableCell> food </TableCell>
                    <TableCell> portion </TableCell>
                    <TableCell> frequency </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {regularized.map((row) => (
                    <TableRow key={row.cage_id}>
                        <TableCell component="th" scope="row">
                            {row.cage_id}
                        </TableCell>
                        <TableCell align="right">{row.food_id}</TableCell>
                        <TableCell align="right">{row.portion}</TableCell>
                        <TableCell align="right">{row.frequency}</TableCell>
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
                {invitedField}
            </Grid>
            <Grid item xs={12}>
                {requestField}
            </Grid>
        </Grid>
    )
}