import { AppBar, Toolbar, Typography, Button, Dialog, DialogTitle, TextField, DialogActions, Snackbar, IconButton, Menu, MenuItem } from "@material-ui/core";
import {Link, Switch, Route, BrowserRouter} from "react-router-dom"
import { Welcome } from './components/pages/welcome';
import { Animals, AnimalInfo } from './components/pages/Animals';

import { Register } from './components/pages/Register';
import { Events } from './components/pages/Event';
import { BrowseGroupTours, GtInfo } from './components/pages/BrowseGT';
import { BrowseEdEvents, EvInfo } from './components/pages/BrowseEV';
import { BrowseConsOrg, CoInfo } from './components/pages/BrowseCO';
import { useState } from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';
import { AccountCircle } from "@material-ui/icons";
import { Pets } from "@material-ui/icons"
import { Shops } from "./components/pages/Shops";
import { Gifts } from "./components/pages/Gifts";
import { Profile } from './components/pages/profiles/Profile';
//user.type

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />; 
}

function App() {
  const [user,setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState("");
  const [fail, setFail] = useState("");
  const [username, setUsername] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [password, setPassword] = useState("");

  const isMenuOpen = Boolean(anchorEl);
  const login=()=>{
    axios.post("http://localhost:3003/auth/login",{username:username, password:password})
      .then(resp => { 
        if(resp.data.exists) {
          setSuccess("Successfully logged in");
          setOpen(false);
          const usr = resp.data.user
          usr["type"] = resp.data.type
          setUser(usr);
        }
        else{
          setFail("User does not exist");
        }
      })
  }
  const accounCirc = <>
  
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={"menuId"}
            aria-haspopup="true"
            onClick={(event)=>setAnchorEl(event.currentTarget)}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={"menuId"}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={()=>setAnchorEl(null)}
      >
        <MenuItem onClick={()=>{
          setAnchorEl(null);
          setUser(null)
        }}>Logout</MenuItem>
        <MenuItem component={Link} to="/profile">
          Profile
        </MenuItem>
      </Menu>
      
      </>

  const loginBtn =  user === null ? <>
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
                  <Button component={Link} to="/register" color="primary">
                    Register
                  </Button>
                  <Button color="primary" onClick={()=>login()}>Submit</Button>
            </DialogActions>
      </Dialog>
  </> : accounCirc


  return (<>
    <BrowserRouter>
    <AppBar position="static" style={{marginBottom:"20px"}}>
      <Toolbar>
        <IconButton component={Link} to="/">
          <Pets/>
        </IconButton>
        <Typography variant="h6" style={{flexGrow:1}}>
          Welcome to the Zoo
        </Typography>
        {loginBtn}
      </Toolbar>
    </AppBar>
      <div className="App">
            <Switch>
              <Route path="/register">
                <Register setUser={setUser} success={setSuccess} fail={setFail}/> 
              </Route>
              <Route path="/animals">
                <Animals/>
              </Route>
              <Route path="/animal_info">
                <AnimalInfo/> 
              </Route>
              <Route path="/profile">
                <Profile success={setSuccess} fail={setFail} user={user}/>
              </Route>
              <Route path="/events">
                <Events/>
              </Route>
              <Route path="/gt/:name">
                <GtInfo/>
              </Route>
              <Route path="/ev/:name">
                <EvInfo/>
              </Route>
              <Route path="/co/:name">
                <CoInfo/>
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
              <Route exact path="/shops/:name">
                <Gifts success={setSuccess} fail={setFail} user={user}/>
              </Route>
              <Route exact path="/shops">
                <Shops success={setSuccess} fail={setFail}/>
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
