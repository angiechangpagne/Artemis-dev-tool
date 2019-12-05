import React from 'react';
import Dropdown from '../components/DropdownMenu.jsx';

import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import {Button } from '@material-ui/core'

// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: '#212121',
//     height: '100%',
//     color: '#fff',
//     boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
//   },
//   tabsRoot: {
//     // borderBottom: '1px solid #e8e8e8',
//   },
//   tabsIndicator: {
//     backgroundColor: '#1de9b6',
//   },
//   tabRoot: {
//     textTransform: 'initial',
//     minWidth: 72,
//     fontWeight: theme.typography.fontWeightRegular,
//     marginRight: theme.spacing.unit * 4,

//     fontFamily: [
//       '-apple-system',
//       'BlinkMacSystemFont',
//       '"Segoe UI"',
//       'Roboto',
//       '"Helvetica Neue"',
//       'Arial',
//       'sans-serif',
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(','),
//     '&:hover': {
//       color: '#1de9b6',
//       opacity: 1,
//     },
//     '&$tabSelected': {
//       color: '#33eb91',
//       fontWeight: theme.typography.fontWeightMedium,
//     },
//     '&:focus': {
//       color: '#4aedc4',
//     },
//   },
//   tabSelected: {},
//   typography: {
//     padding: theme.spacing.unit * 3,
//   },
//   padding: {
//     padding: `0 ${theme.spacing.unit * 2}px`,
//   },
// });

const Headers = (props) => {
  return (
    <Tabs>
    <React.Fragment>
      <div className="hOne">
        <h1>ARTEMIS</h1>
        <img></img>
      </div>
      <div className="header-container">
        <Dropdown/>
      <Tab> <button className="header-item item2" onClick={()=> props.schemaToggle()}>
          SCHEMA
        </button>
        </Tab>
       <Tab> <button className="header-item item3" onClick={()=> props.cacheToggle()}>
          CACHE
        </button>
        </Tab>
      </div>
    </React.Fragment>
    </Tabs>

  )
}

export default Headers;