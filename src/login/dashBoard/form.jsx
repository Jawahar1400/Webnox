import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate('');
  const [employeeData, setEmployeeData] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    phoneNumber: '',
    address: '',
    bloodGroup: '',
    linkedinProfile: '',
    university: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard', { state: { employeeData } });
    console.log(employeeData);
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Grid item xs={12} sm={8} md={6}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h5" gutterBottom>
            Employee Details
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Full Name"
              name="fullName"
              value={employeeData.fullName}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              type="date"
              label="Date of Birth"
              name="dateOfBirth"
              value={employeeData.dateOfBirth}
              onChange={handleChange}
              margin="normal"
              InputLabelProps={{ shrink: true }}
              required
            />
            <RadioGroup
              aria-label="gender"
              name="gender"
              value={employeeData.gender}
              onChange={handleChange}
              style={{ flexDirection: 'row' }}
              required
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
            </RadioGroup>
            <TextField
              fullWidth
              type="email"
              label="Email"
              name="email"
              value={employeeData.email}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Phone Number"
              name="phoneNumber"
              value={employeeData.phoneNumber}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={employeeData.address}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Blood Group"
              name="bloodGroup"
              value={employeeData.bloodGroup}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="LinkedIn Profile"
              name="linkedinProfile"
              value={employeeData.linkedinProfile}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="University"
              name="university"
              value={employeeData.university}
              onChange={handleChange}
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
              Submit
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Form;
