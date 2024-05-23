import React, { useState } from 'react'

// Material UI Imports
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import Alert from '@mui/material/Alert';
import Checkbox from '@mui/material/Checkbox';

const isEmail = (email) =>
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(email);


export default function Login() {

  //Password Field
  const [showPassword, setShowPassword] = React.useState(false);

  //Inputs
  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const [rememberMe, setRememberMe] = useState();

  //Mga Input Errors
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  
  // Form Validity (para sa success log in, and error.)
  const [formValid, setFormValid] = useState();
  const [success, setSuccess] = useState();

    
  //Validation for OnBlur Email :)
  const handleEmail = () => {  

    if(!isEmail(emailInput)){
      setEmailError(true);
      return;
    }
    
    setEmailError(false);
  }

  //Validation fot OnBlur Password :)
  const handlePassword = () => {
    if(!passwordInput || passwordInput.length < 5 || passwordInput.length > 20)
      {
        setPasswordError(true);
        return;
      }
      setPasswordError(false);

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(null);

      if(emailError || !emailInput){
        setFormValid("Invalid Email. Pleasse enter valid requirements.");
        
        return;
      }
    
        
      if(passwordError || !passwordInput){
        setFormValid("Password is set to 5-20 Characters. Pleasse enter valid requirements.");
        
        return;
      }
      setFormValid(null);
      setSuccess("Form Submitted Successfully!");
  


    console.log("Email : " + emailInput);
    console.log("Password : " + passwordInput);
    console.log("RememberUser : " + rememberMe);
  };

 

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {

    event.preventDefault();
  };

  return (
    <div>

        <p>
        <TextField id="standard-basic" 
        error = {emailError}
        label="Email" 
        value={emailInput}
        onChange={(event) => setEmailInput(event.target.value)}
        onBlur={handleEmail}
        variant="standard" 
        fullWidth 
        size='small' />
        </p>

        <p>
        <FormControl sx={{ width: '100%' }} variant="standard">
        <InputLabel error = {passwordError} htmlFor="standard-adornment-password">Password</InputLabel>
        <Input

          error = {passwordError}
          id="standard-adornment-password"
          type={showPassword ? 'text' : 'password'}
          value={passwordInput}
          onBlur={handlePassword}
          onChange={(event) => setPasswordInput(event.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}>

                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          />
        </FormControl>
        </p>
        

        <div align = "left">
        <Checkbox
        onChange={(event) => setRememberMe(event.target.checked)}
        inputProps={{ 'aria-label': 'controlled' }}
        />{""} Remember Me

        </div>

        <p>
        <Button onClick={handleSubmit} variant="contained" startIcon={<LoginIcon />} fullWidth>
        Log-in
        </Button>
        </p>

        <p>
          {formValid && (
          <Alert severity="error">{formValid}</Alert>)}
        </p>

        <p>
          {success && (
          <Alert severity="success">{success}</Alert>)}
        </p>


    </div>
  )
}
