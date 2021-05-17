
// import { 
//     Grid, 
//     Paper, 
//     Input, 
//     TableBody, 
//     TableHead, 
//     Table, 
//     TableRow, 
//     TableCell, 
//     TableContainer, 
//     Button} from '@material-ui/core';
// import { makeStyles } from '@material-ui/core';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import axios from 'axios';
// import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     height: "42vh"
//   },
// }));

// export function CoordProfile(props){

//     const classes = useStyles(); 
//     const [coord, setCoord] = useState(null)

//     // const updateInvite = (status,id) => {
//     //     axios.post('http://localhost:3003/vet/inviteUpdate',{id:id, status:status})
//     //         .then(onLoad)
//     // }

//     // const updateTreatment = (status,id) => {
//     //     axios.post('http://localhost:3003/vet/treatmentUpdate',{id:id, status:status})
//     //         .then(onLoad)
//     // }

//     const onLoad = ()=>{ 
//         axios.post('http://localhost:3003/auth/coord',{username:props.user.username})
//             .then(data => data.data)
//             .then(data => {
//                 if(!data.exists) props.fail(data.message);
//                 else setVet(data.value);
//             })
//         // axios.post('http://localhost:3003/vet/requested',{username:props.user.username})
//         //     .then(data => data.data)
//         //     .then(data => {
//         //         if(!data.exists) props.fail(data.message);
//         //         else setRequested(data.value);
//         //     })
//         // axios.post('http://localhost:3003/vet/invited',{username:props.user.username})
//         //     .then(data => data.data)
//         //     .then(data => {
//         //         if(!data.exists) props.fail(data.message);
//         //         else setInvited(data.value);
//         //     })
//     }

//     useEffect(onLoad,[])

//     const info = coord ? <Paper className={classes.paper}>
//         <h1>Name: {cord.name + "  " + coord.surname}</h1> 
//         <h2>Phone: {coord.phone}</h2>
//     </Paper> : <></>


<<<<<<< HEAD
    // const invitedField = coord ? 
    // <TableContainer component={Paper} className={classes.paper}>
    //     <h2>Invited Organizations</h2>
    //     <Table aria-label="sold">
    //         <TableHead>
    //             <TableRow>
    //                 <TableCell> c1 </TableCell>
    //                 <TableCell> c2</TableCell>
    //                 <TableCell> c3 </TableCell>
    //                 <TableCell> c4 </TableCell>
    //                 <TableCell>  </TableCell>
    //                 <TableCell>  </TableCell>
    //             </TableRow>
    //         // </TableHead>
    //         // <TableBody>
    //         //     {invited.map((row) => (
    //         //         <TableRow key={row.id}>
    //         //             <TableCell component="th" scope="row">
    //         //                 {row.event_name}
    //         //             </TableCell>
    //         //             <TableCell align="right">{row.event_date}</TableCell>
    //         //             <TableCell align="right">{row.inviter}</TableCell>
    //         //             <TableCell align="right">{row.request_status}</TableCell>
    //         //             <TableCell align="right">{row.request_status === "a" ?
    //         //                 <Button color="primary" onClick={()=>updateInvite("y",row.id)}>Accept</Button> : ""}
    //         //             </TableCell>

    //         //             <TableCell align="right">{row.request_status === "a" ?
    //         //                 <Button color="secondary" onClick={()=>updateInvite("n",row.iid)}>Decline</Button> : ""}
    //         //             </TableCell>
    //         //         </TableRow> 
    //         //     ))}
    //         // </TableBody>
    //     </Table>
    // </TableContainer> : <></>         
    
    // const requestField = vet ? 
    // <TableContainer component={Paper} className={classes.paper}>
    //     <h2>Invited Organizations</h2>
    //     <Table aria-label="sold">
    //         <TableHead>
    //             <TableRow>
    //                 <TableCell> id </TableCell>
    //                 <TableCell> requested </TableCell>
    //                 <TableCell> requester </TableCell>
    //                 <TableCell> animal name </TableCell>
    //                 <TableCell> animal type </TableCell>
    //                 <TableCell> condition </TableCell>
    //                 <TableCell> request status </TableCell>
    //                 <TableCell>  </TableCell>
    //                 <TableCell>  </TableCell>
    //             </TableRow>
    //         </TableHead>
    //         <TableBody>
    //             {requested.map((row) => (
    //                 <TableRow key={row.id}>
    //                     <TableCell component="th" scope="row">
    //                         {row.id}
    //                     </TableCell>
    //                     <TableCell align="right">{row.requested}</TableCell>
    //                     <TableCell align="right">{row.requester}</TableCell>
    //                     <TableCell align="right">{row.animal_name}</TableCell>
    //                     <TableCell align="right">{row.animal_type}</TableCell>
    //                     <TableCell align="right">{row.condition}</TableCell>
    //                     <TableCell align="right">{row.request_status}</TableCell>
    //                     <TableCell align="right">{row.request_status === "a" ?
    //                         <Button color="primary" onClick={()=>updateTreatment("y",row.id)}>Accept</Button> : ""}
    //                     </TableCell>

    //                     <TableCell align="right">{row.request_status === "a" ?
    //                         <Button color="secondary" onClick={()=>updateTreatment("n",row.id)}>Decline</Button> : ""}
    //                     </TableCell>
    //                 </TableRow> 
    //             ))}
    //         </TableBody>
    //     </Table>
    // </TableContainer> : <></>   
=======
//     const invitedField = coord ? 
//     <TableContainer component={Paper} className={classes.paper}>
//         <h2>Invited Organizations</h2>
//         <Table aria-label="sold">
//             <TableHead>
//                 <TableRow>
//                     <TableCell> c1 </TableCell>
//                     <TableCell> c2</TableCell>
//                     <TableCell> c3 </TableCell>
//                     <TableCell> c4 </TableCell>
//                     <TableCell>  </TableCell>
//                     <TableCell>  </TableCell>
//                 </TableRow>
//             // </TableHead>
//             // <TableBody>
//             //     {invited.map((row) => (
//             //         <TableRow key={row.id}>
//             //             <TableCell component="th" scope="row">
//             //                 {row.event_name}
//             //             </TableCell>
//             //             <TableCell align="right">{row.event_date}</TableCell>
//             //             <TableCell align="right">{row.inviter}</TableCell>
//             //             <TableCell align="right">{row.request_status}</TableCell>
//             //             <TableCell align="right">{row.request_status === "a" ?
//             //                 <Button color="primary" onClick={()=>updateInvite("y",row.id)}>Accept</Button> : ""}
//             //             </TableCell>

//             //             <TableCell align="right">{row.request_status === "a" ?
//             //                 <Button color="secondary" onClick={()=>updateInvite("n",row.iid)}>Decline</Button> : ""}
//             //             </TableCell>
//             //         </TableRow> 
//             //     ))}
//             // </TableBody>
//         </Table>
//     </TableContainer> : <></>         
    
//     const requestField = vet ? 
//     <TableContainer component={Paper} className={classes.paper}>
//         <h2>Invited Organizations</h2>
//         <Table aria-label="sold">
//             <TableHead>
//                 <TableRow>
//                     <TableCell> id </TableCell>
//                     <TableCell> requested </TableCell>
//                     <TableCell> requester </TableCell>
//                     <TableCell> animal name </TableCell>
//                     <TableCell> animal type </TableCell>
//                     <TableCell> condition </TableCell>
//                     <TableCell> request status </TableCell>
//                     <TableCell>  </TableCell>
//                     <TableCell>  </TableCell>
//                 </TableRow>
//             </TableHead>
//             <TableBody>
//                 {requested.map((row) => (
//                     <TableRow key={row.id}>
//                         <TableCell component="th" scope="row">
//                             {row.id}
//                         </TableCell>
//                         <TableCell align="right">{row.requested}</TableCell>
//                         <TableCell align="right">{row.requester}</TableCell>
//                         <TableCell align="right">{row.animal_name}</TableCell>
//                         <TableCell align="right">{row.animal_type}</TableCell>
//                         <TableCell align="right">{row.condition}</TableCell>
//                         <TableCell align="right">{row.request_status}</TableCell>
//                         <TableCell align="right">{row.request_status === "a" ?
//                             <Button color="primary" onClick={()=>updateTreatment("y",row.id)}>Accept</Button> : ""}
//                         </TableCell>

//                         <TableCell align="right">{row.request_status === "a" ?
//                             <Button color="secondary" onClick={()=>updateTreatment("n",row.id)}>Decline</Button> : ""}
//                         </TableCell>
//                     </TableRow> 
//                 ))}
//             </TableBody>
//         </Table>
//     </TableContainer> : <></>   
>>>>>>> main

//     return (
//         <Grid container spacing={3}>
//             <Grid item xs={6}>
//                 {info}
//             </Grid>
//             <Grid item xs={6}>
//                 {invitedField}
//             </Grid>
//             <Grid item xs={12}>
//                 {requestField}
//             </Grid>
//         </Grid>
//     )
// }