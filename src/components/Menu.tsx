import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import BusinessIcon from '@mui/icons-material/Business';
import ConstructionIcon from '@mui/icons-material/Construction';
interface Iprops{
    setValue: React.Dispatch<number>
    value: number
}
export default function SimpleBottomNavigation(props: Iprops) {

    
  return (
    <Box sx={{ width: "100%", margin: "10px" }}>
      <BottomNavigation
        showLabels
        
        value={props.value}
        onChange={(event, newValue) => {
          props.setValue(newValue);
        }}
        style={{backgroundColor: "#436850"}}
      >
        <BottomNavigationAction  label="Negocios" icon={<BusinessIcon />} />
        <BottomNavigationAction label="Registrar negocio" icon={<AddBusinessIcon />} />
        <BottomNavigationAction label="Utilerias" icon={<ConstructionIcon />} />
      </BottomNavigation>
    </Box>
  );
}