import { AppBar, Toolbar, Typography, Button, Dialog, DialogTitle, TextField, DialogActions, Snackbar } from "@material-ui/core";
import {Switch, Route, BrowserRouter} from "react-router-dom"
import { Welcome } from './components/pages/welcome';
import { Animals } from './components/pages/Animals';
import { Events } from './components/pages/Event';
import { BrowseGroupTours, GtInfo } from './components/pages/BrowseGT';
import { BrowseEdEvents, EvInfo } from './components/pages/BrowseEV';
import { BrowseConsOrg, CoInfo } from './components/pages/BrowseCO';
import { useState } from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';

//user.type

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />; 
}


function App() {
  var headerTxt = "Welcome to the Zoo!";
  const [user,setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState("");
  const [fail, setFail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login=()=>{
    axios.post("http://localhost:8081/auth/login",{username:username, password:password})
      .then(resp => {
        if(resp.exists) {
          setSuccess("Successfully logged in");
          setOpen(false);
          setUser(resp.user);
        }
        else{
          setFail("User does not exist");
        }
      })
  }

  const loginBtn = <>
      <Button color="inherit" onClick={()=>setOpen(true)}>Login</Button>
      <Dialog 
        open={open} 
        onClose={()=>setOpen(false)}>
          <DialogTitle id="login-dialog-title">Login</DialogTitle>
            <TextField
              required
              autoFocus
              margin="dense"
              id="username"
              label="username"
              fullWidth
              value={username}
              onChange={val => setUsername(val.target.value)}
              style={{width:"70%", left:"15%"}}
            />
            <TextField
              required
              margin="dense"
              id="password"
              label="password"
              fullWidth
              value={password}
              type="password"
              onChange={val => setPassword(val.target.value)}
              style={{width:"70%", left:"15%"}}
            />
  
              <DialogActions>
                  <Button onClick={()=>setOpen(false)} color="primary">
                    Cancel
                  </Button>
                  <Button color="primary" onClick={()=>login()}>Submit</Button>
            </DialogActions>
      </Dialog>
  </>

  return (<>
    <AppBar position="static" style={{marginBottom:"20px"}}>
      <Toolbar>
        <Typography variant="h6" style={{flexGrow:1}}>
        {headerTxt}
        </Typography>
        {loginBtn}
      </Toolbar>
    </AppBar>
    <BrowserRouter>
      <div className="App">
            <Switch>
              <Route path="/hello">
                Hello
              </Route>
              <Route path="/animals">
                <Animals/>
              </Route>
              <Route path="/events">
                <Events/>
              </Route>
              <Route path="/gt">
                <BrowseGroupTours/>
              </Route>
              <Route path="/ev">
                <BrowseEdEvents/>
              </Route>
              <Route path="/co">
                <BrowseConsOrg/>
              </Route>
              <Route path="/gt_info">
                <GtInfo/>
              </Route>
              <Route path="/ev_info">
                <EvInfo/>
              </Route>
              <Route path="/co_info">
                <CoInfo/>
              </Route>
              <Route path="/">
                <Welcome user={user} />
              </Route>
            </Switch>
      </div>
    </BrowserRouter>
    <Snackbar open={success !== ""} autoHideDuration={6000} onClose={()=>setSuccess("")}>
      <Alert onClose={()=>setSuccess("")} severity="success">
        {success}
      </Alert>
    </Snackbar>
    <Snackbar open={fail !== ""} autoHideDuration={6000} onClose={()=>setFail("")}>
      <Alert onClose={()=>setFail("")} severity="error">
        {fail}
      </Alert>
    </Snackbar>
    </>
  );
}

export default App;
