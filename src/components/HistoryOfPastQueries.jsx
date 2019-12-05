import React from "react";
import Clock from "react-live-clock";
// import Moment from './Moment.jsx';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
// import AddIcon from '@material-ui/icons/Add';
// import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';



const moment = require("moment");
moment().format();

const HistoryOfPastQueries = props => {
  let pastQueries = [];
  for (let i = 0; i < props.queries.length; i++) {
    pastQueries.push(
      <ListItem><div id="queryBox" onClick={() => props.isToggle(i)}>
       <ListItemText> <div>Query {i + 1}</div></ListItemText>
        <div>
        <Button className="time-button"><Clock format={"HH:mm:ss"} /></Button>
        </div>
      </div>
      </ListItem>
    );
  }

  // let x = new moment().format("h:mm:ss");
  // for (let i = 0; i < pastQueries.length; i++) {
  // timeTracker.push(<span><Clock format={'HH:mm:ss'}/></span>);
  // if (time.length === 0){
  //     time.push(x);
  // }else{
  //     time.push(moment.duration(new moment(time[0]).diff(new moment(time[time.length - 1]))))
  // }
  // }
  return (

    <List style={{ color: 'red' }}>
              <div id="history-past-queries">
      {pastQueries}
      {/* <Moment pastQueries={pastQueries}/> */}
    </div>
    </List>
   
  );
};

export default HistoryOfPastQueries;