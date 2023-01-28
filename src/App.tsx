import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Box, Typography } from '@mui/material';
import React from 'react';
import './App.css';
import BreadCrumbComponent from './Components/BreadCrumbComponent';
import MuiAccordion from './Components/MuiAccordion';
import MuiAlert from './Components/MuiAlert';
import MuiAvatar from './Components/MuiAvatar';
import MuiBadge from './Components/MuiBadge';
import MuiBottomNavigation from './Components/MuiBottomNavigation';
import MuiButton from './Components/MuiButton';
import MuiCard from './Components/MuiCard';
import MuiCheckbox from './Components/MuiCheckbox';
import MuiChip from './Components/MuiChip';
import MuiDatePicker from './Components/MuiDatePicker';
import MuiDialogComponent from './Components/MuiDialogComponent';
import MuiDrawer from './Components/MuiDrawer';
import MuiLayout from './Components/MuiLayout';
import MuiList from './Components/MuiList';
import MuiLoadingButton from './Components/MuiLoadingButton';
import MuiNavbar from './Components/MuiNavbar';
import MuiProgress from './Components/MuiProgress';
import MuiRadioButton from './Components/MuiRadioButton';
import MuiRating from './Components/MuiRating';
import MuiSelect from './Components/MuiSelect';
import MuiSkeleton from './Components/MuiSkeleton';
import MuiSnackBar from './Components/MuiSnackBar';
import MuiSpeedDial from './Components/MuiSpeedDial';
import MuiSwitch from './Components/MuiSwitch';
import MuiTable from './Components/MuiTable';
import MuiTextField from './Components/MuiTextField';
import MuiTypography from './Components/MuiTypography';
import MuiToolTip from './MuiToolTip';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
<div className="App">
    <MuiDatePicker />
    </div>
    </LocalizationProvider>
     
 
  );
}

export default App;
