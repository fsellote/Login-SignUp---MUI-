import { useState } from 'react'
import './App.css'
import Login from '/src/FormControl/Login';
import SignUp from '/src/FormControl/SignUp';


// Material UI Imports
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';  
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import Switch from '@mui/material/Switch';


function App() {
  const [checked, setChecked] = useState(false  );

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
      <div className="App">
        <Paper elevation={12} style={{padding:"10px"}}>

        {checked ? (  

        <Chip icon={<AccountCircleIcon />} label="Sign Up" color="primary" variant="outlined" />
        ) : (
        
        <Chip icon={<LoginIcon />} label="Log-in" color="primary" variant="outlined" />
        )}
        
        <br/>

        <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}/>

        <br/>
        
        {checked ?<SignUp/>:<Login/>}

        </Paper>

      </div>
  )
}

export default App;
