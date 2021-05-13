
import { Button, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2'
import DateFnsUtils from '@date-io/date-fns';
import 'react-phone-input-2/lib/style.css'
import axios from 'axios';

export function Register(props){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [birthday, setBirthday] = useState(null)
    const [gender, setGender] = useState("")

    const submit = () => {
        if(
            username === "" ||
            password === "" ||
            name     === "" ||
            surname  === "" ||
            phone    === "" ||
            email    === "" ||
            birthday === null||
            gender   === "" 
        ) {
            props.fail("please fill all the necessary fields"); 
        }
        else{
            const visitor = {
                username:username,
                password:password,
                name:name,
                surname:surname,
                phone:phone,
                email:email,
                birthday:birthday.toJSON(),
                gender:gender
            }
            axios.post("http://localhost:8081/auth/register",visitor)
                .then(resp=>{ 
                    if(resp.data) {
                        props.success("successfully registered")
                        visitor["type"] = "visitor"
                        props.setUser(visitor);
                    }
                    else props.fail("Unable to create")
                })
            }
    }

    return (
        <form>
            <TextField
              required
              autoFocus
              margin="dense"
              id="username"
              label="username"
              value={username}
              onChange={val => setUsername(val.target.value)}
              style={{width:"70%", left:"15%"}}
            />
            <TextField
              required
              margin="dense"
              id="password"
              label="password"
              type="password"
              value={password}
              onChange={val => setPassword(val.target.value)}
              style={{width:"70%", left:"15%"}}
            />
            <TextField
              required
              margin="dense"
              id="name"
              label="name"
              value={name}
              onChange={val => setName(val.target.value)}
              style={{width:"70%", left:"15%"}}
            />
            <TextField
              required
              margin="dense"
              id="surname"
              label="surname"
              value={surname}
              onChange={val => setSurname(val.target.value)}
              style={{width:"70%", left:"15%"}}
            />
            <Select
              required
              margin="dense"
              label="gender"
              value={gender}
              onChange={val=>setGender(val.target.value)}
              style={{width:"70%", left:"15%", marginTop:"20px"}}
            >
                <MenuItem value={"m"}>Male</MenuItem>
                <MenuItem value={"f"}>Female</MenuItem>
                <MenuItem value={"n"}>I prefer not to say</MenuItem>
            </Select>
            <PhoneInput 
              value={phone}
              required
              margin="dense"
              onChange={val=>setPhone(val)}
              style={{width:"70%", left:"15%", marginTop:"20px"}}
            />
            
            <TextField
              required
              margin="dense"
              id="email"
              label="email"
              value={email}
              onChange={val => setEmail(val.target.value)}
              type="email"
              style={{width:"70%", left:"15%"}}
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Birthday"
                value={birthday}
                onChange={val=>setBirthday(val)}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                style={{width:"70%", left:"15%"}}
                />
            </MuiPickersUtilsProvider> 
            <Button onClick={submit}
              style={{width:"70%", left:"15%"}}
              color="primary" 
              variant="contained">
                  Register
            </Button>
        </form>
    )
}