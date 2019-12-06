import React from "react";
import Clock from "react-live-clock";


const moment = require("moment");
moment().format();

const HistoryOfPastQueries = props => {
  let pastQueries = [];
  for (let i = 0; i < props.queries.length; i++) {
    pastQueries.push(
     <div id="queryBox" onClick={() => props.isToggle(i)}>
        <div id={("Query".concat(i + 1))}>Query {i + 1}</div>
        <div>
        <button className="time-button"><Clock format={"HH:mm:ss"} /></button>
        </div>
      </div>
   
    );
  }
  console.log("in history trace")
  // let x = new moment().format("h:mm:ss");
  // for (let i = 0; i < pastQueries.length; i++) {
  // timeTracker.push(<span><Clock format={'HH:mm:ss'}/></span>);
  // if (time.length === 0){
  //     time.push(x);
  // }else{
  //     time.push(moment.duration(new moment(time[0]).diff(new moment(time[time.length - 1]))))
  // }   {/* <Moment pastQueries={pastQueries}/> */}
  // }
  return (

  
    <div id="history-past-queries">
      {pastQueries}
    </div>
  
   
  );
};

export default HistoryOfPastQueries;