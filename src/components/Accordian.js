import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import { HistoryOfPastQueries  } from '../components/HistoryOfPastQueries.jsx'

export default class Accordian extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            activeIndex: 0 ,
            result:[]
        };
    }
// console.log(props)
  //title props are going to be "Query i"
  //props history array as props
  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    // const queriesList=this.props.queries;
    
    // console.log("queries history from props is "+queriesList)

    // let result1=[...this.state.result];
    // if(queriesList===undefined || queriesList.length===0){ return null  }
    // for(let i=0;i<queriesList.length;i++){
    //     result1.push(
    //     <Accordion.Title
    //     active={activeIndex === i}
    //     index={i}
    //     onClick={this.handleClick}
    //   >
    //     <Icon name='dropdown' />
    //     Query i
    //   </Accordion.Title>,

    //   <Accordion.Content active={activeIndex === i}>
    //  {queriesList[this.props.historyBtn]}
    //   </Accordion.Content>
    //     )

        // type ComponentProps = {
        //     status: result;
        //     // Whatever else is needed
        //   }
        // function StatusDescription(props: ComponentProps): JSX.Element {

        //     return props.status;
        //     }

        // this.setState(()=>{
        //     this.state.result = result1;
        // })
   }

    return (
      <Accordion fluid styled>
            <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.handleClick}
          >
              Query 1
            <Icon name='dropdown' />
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            
          </Accordion.Content>
  
          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={this.handleClick}
          > 
          Query 2
            <Icon name='dropdown' />
              text        
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
      
          </Accordion.Content> 
        

      </Accordion>
    )
  };




    


    //{this.state.result}
    //       refactor to map later, then filter, callback is the accordion instance added to the entire React component div */}
    // {queriesList.map(()=>{
        //            <Accordion.Title
        //            active={activeIndex === 0}
        //            index={0}
        //            onClick={this.handleClick}
        //          >
        //            <Icon name='dropdown' />
        //            Query History
        //          </Accordion.Title>,
         
        //          <Accordion.Content active={activeIndex === 0}>
        //         queriesList[this.props.historyBtn]
        //          </Accordion.Content>
        //      })
        //   }