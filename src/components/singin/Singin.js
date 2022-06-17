import React, { useState } from "react";
// import { CircularProgress } from "@material-ui/core";
// import NoEncryption from "@material-ui/icons/NoEncryption";
import { Rings } from  'react-loader-spinner'

import axios from "axios";
import "./Singin.css";
import loginSvg from "../../assets/login.svg";
import {
  CircularProgress,
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  Input
} from "@material-ui/core";

import {Visibility,VisibilityOff} from '@material-ui/icons';

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link, useNavigate } from "react-router-dom";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import Checkbox from "@material-ui/core/Checkbox";
// import Particles from "../particles";







const Singin = () => {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [emailA,setEmailA] = useState("")
  const [PasswordA,setPasswordA] = useState("")

  const paperStyle = {
    padding: 20,
    height: "70%",
    width: "90%",
    margin: " auto",
    // marginTop: "150px",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = {
    margin: "8px 0",
    height: 50,
    width: "50%",
    marginTop: " 20px ",
    // marginLeft:"100px",
    marginRigth: "100px",
  };
  const h1Style = {
    // margin:'200px auto',
    fontFamily: "Rubik Wet Paint, cursive",
  };
  const cardStyle = {
    margin: "200px auto",
  };



  const login = async () => {
    setLoading(true);
    console.log("helo from sing in ", user);
    // const host = "192.168.43.146" ;
    const host = "localhost";
    axios
      .post(`http://${host}:9999/login`, {
        email,
        Password,
      })
      .then((res) => {
        setLoading(false);

        console.log(res.data);

        setUser(res.data);

        sessionStorage.setItem("userId", res.data.id);
        sessionStorage.setItem("user", JSON.stringify(res.data));

        console.log("helo from resulet bachend", res.data);
        console.log("helo from session", sessionStorage.getItem("user"));
        navigate("/");
        setError("");
      })
      .catch((e) => {
        setUser({});
        setError(e.response.data);
        console.log("eror is", e.response);
        console.log("status is ",e.response.status);

        e.response.status === 404 ? setEmailError(true):setEmailError(false)
        e.response.status === 300 ? setPasswordError(true):setPasswordError(false)
        console.log("messgae is ",e.response.data);
        setLoading(false);
      });
  };

  const handleClickShowPassword = () =>{
    setShowPassword(!showPassword)
  }

  const ConnectAdmin=(e) => {

    e.preventDefault(); 
    if(emailA === 'nazik@gmail.com' && PasswordA === 'nana')
    {
      navigate("/siladmin");
    } else{
      setError("les informqtions de admin incorrect ")
    }
   
  };




  return (
    <div className="singin">
      <div className="logoLogin" style={{ height: 500, width: 500 }}>
        <img src={loginSvg} alt="qq" className="logoSvg" />
      </div>
      {/* <Particles /> */}
      <Grid >
        <Paper elevation={10} style={paperStyle} className="backgroundLigner" >
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon color="red" />
            </Avatar>
            <h2 style={h1Style}>Sign In</h2>
          </Grid>

          {error ? (
            <Typography
              style={{
                color: "black",
                textAlign: "center",
                width: "70%",
                height: "30px",
                border: "0.4px solid ",
                borderRadius: "4px",
                borderColor: "rgba(248, 81, 73,0.4)",
                backgroundImage:
                  "linear-gradient(rgba(248,81,73,0.15) ,rgba(248,81,73,0.15) ) ",
              }}
              variant="h6"
            >
              {" "}
              {/* <NoEncryption style={{ color: "red" }} /> */}
              {error}{" "}
            </Typography>
          ) : null}




          <TextField
            error={emailError}
            // helperText={error}
            label="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            // fullWidth
          />

        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
          error={passwordError}
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

          <br />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <br />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
            onClick={login}
          >
            {!isLoading ? (
              "sing in "
            ) : 
(              <CircularProgress size={30} style={{ color: "#96d0d98c" }} />
)
            }
          </Button>



          <Typography>
            {" "}
            Do you have an account ?<Link to="/singup">Sign Up</Link>
          </Typography>








        </Paper>
      </Grid>
    </div>
  );
};

export default Singin;
