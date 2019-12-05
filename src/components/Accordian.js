import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import { HistoryOfPastQueries  } from 'HistoryOfPastQueries'

export default class AccordionExampleFluid extends Component {
  state = { activeIndex: 0 }

  //title props are going to be "Query i"
  //props history array as props
  handleClick = (props) => {
    const { index } = props
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    const queriesList=props.queries;
    console.log("queries history from props is "+queriesList)
    return (
      <Accordion fluid styled>
       {/* //refactor to map later, then filter, callback is the accordion instance added to the entire React component div
       {queriesList.map(()=>{
                 <Accordion.Title
                 active={activeIndex === 0}
                 index={0}
                 onClick={this.handleClick}
               >
                 <Icon name='dropdown' />
                 Query History
               </Accordion.Title>,
       
               <Accordion.Content active={activeIndex === 0}>
              queriesList[props.historyBtn]
               </Accordion.Content>
           })
        } */}
        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
            Query 1
          <Icon name='dropdown' />
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
          </p>
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
};
