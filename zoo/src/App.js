import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import {Switch, Route, BrowserRouter} from "react-router-dom"
import { Welcome } from './components/pages/welcome';

function App() {
  return (<>
    <AppBar position="static" style={{marginBottom:"20px"}}>
      <Toolbar>
        <Typography variant="h6" style={{flexGrow:1}}>
          Welcome to the Zoo
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
    <BrowserRouter>
      <div className="App">
            <Switch>
              <Route path="/hello">
                Hello
              </Route>
              <Route path="/animals">
                animals
              </Route>
              <Route path="/welcome">
                <Welcome/>
              </Route>
            </Switch>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
