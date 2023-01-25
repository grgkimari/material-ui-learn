import React from 'react';
import './App.css';
import BreadCrumbComponent from './Components/BreadCrumbComponent';
import MuiAccordion from './Components/MuiAccordion';
import MuiBottomNavigation from './Components/MuiBottomNavigation';
import MuiButton from './Components/MuiButton';
import MuiCard from './Components/MuiCard';
import MuiCheckbox from './Components/MuiCheckbox';
import MuiDrawer from './Components/MuiDrawer';
import MuiLayout from './Components/MuiLayout';
import MuiNavbar from './Components/MuiNavbar';
import MuiRadioButton from './Components/MuiRadioButton';
import MuiRating from './Components/MuiRating';
import MuiSelect from './Components/MuiSelect';
import MuiSpeedDial from './Components/MuiSpeedDial';
import MuiSwitch from './Components/MuiSwitch';
import MuiTextField from './Components/MuiTextField';
import MuiTypography from './Components/MuiTypography';

function App() {
  return (
    <div className="App">
{/* <BreadCrumbComponent /> */}
<MuiDrawer />
<MuiSpeedDial />
<MuiBottomNavigation />
    </div>
  );
}

export default App;
