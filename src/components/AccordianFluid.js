import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
// import  HistoryOfPastQueries  from '../components/HistoryOfPastQueries.jsx'
import Query2 from "./Query2.jsx"
import ObserverContainer from "../containers/ObserverContainer.jsx"
export default class AccordianFluid extends Component {
  state = { activeIndex: 0 }


      //       refactor to map later, then filter, callback is the accordion instance added to the entire React component div */}
    // {queriesList.map(()=>
  //title props are going to be "Query i"
  //props history array as props
  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
    console.log("in accordian fluid trace")
  }

  render(props) {
    console.log("in the render for Accordion Fluid and props is")
    console.log(props)
    const { activeIndex } = this.state
    // // if(props===undefined || props.queriesList===undefined || props.queriesList.length===0){ 
    // //   return null  }
    // const queriesList=props.queriesList;
    
    // console.log("queries history from props is "+ queriesList)

    // // let result=[...this.state.result];
     let result=[]
     
    
    for(let i=0;i<this.queries.length;i++){
        result.push(
        <Accordion.Title
        active={activeIndex === i}
        index={i}
        onClick={this.handleClick}
      >
        <Icon name='dropdown' />
        Query {i+1}
      </Accordion.Title>,

      <Accordion.Content active={activeIndex === i}>
            {queriesList[props.historyBtn]}
      </Accordion.Content>
        )

        // this.setState(()=>{
        //     this.state.result = result;
        // })

   }
    return (
      <Accordion fluid styled>

        <h4> Query History</h4>
              {result}
              {<Query2 queries={this.props.queries} historyBtn={this.props.historyBtn} />}

          
      </Accordion>
    )
    }
  }

