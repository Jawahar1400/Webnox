import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Grid, Typography } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';



import MenuIcon from '@mui/icons-material/Menu';
import { Toolbar } from '@mui/material';
import { AppBar } from "@mui/material";
import { faBell, faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { styled, alpha } from '@mui/material/styles';
import { useLocation } from "react-router-dom";
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Dashboard = () => {
  const datas = useLocation();
  
  const [allData, setAllData] = useState([]);
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

  useEffect(() => {
    setAllData([datas?.state]);
  }, [datas]);

  const onEdit = (employeeData) => {
    console.log("Edit", employeeData);
  };

  const onDelete = (employeeData) => {
    console.log("Delete", employeeData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllData([...allData, employeeData]);
    setEmployeeData({
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
  };

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <AppBar className='appbar' position="fixed">
        <Toolbar className='toolbar'>
          <IconButton className='iconbutton'
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon className='menuicon' style={{ color: "white", fontWeight: 600 }} />
          </IconButton>
          <span className='dash' style={{ width: "16%", fontSize: 20 }}> Employee Details</span>

          <div className="back" style={{ display: "flex", justifyContent: "end", width: "100%", gap: 55, alignItems: 'center' }}>
            <Search className='searchbody'>
              <SearchIconWrapper className='searchiconwrap'>
                <SearchIcon className='searchbodyicon' />
              </SearchIconWrapper>
              <StyledInputBase
                className='searchplaceholder'
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <FontAwesomeIcon icon={faBell} className='icon-bell' />
            <FontAwesomeIcon icon={faGear} className='icon-setting' />
            <img className="imageOne" />
            <div className='IconUser' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7 }}>
              <span className="text">{datas?.state?.user?.fullName}</span>
              <span className="text1">{datas?.state?.user?.licenseNumber}</span>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      
      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>FullName</TableCell>
              <TableCell>DateOfBirth</TableCell>
              <TableCell>LicenseNumber</TableCell>
              <TableCell>ExpirationDate</TableCell>
              <TableCell>LicenseClass</TableCell>
              <TableCell>Restrictions</TableCell>
              <TableCell>Edit / Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allData.map((employee, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{employee.fullName}</TableCell>
                
                <TableCell>
                  <IconButton onClick={() => onEdit(employee)} aria-label="edit">
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => onDelete(employee)} aria-label="delete">
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Dashboard;
