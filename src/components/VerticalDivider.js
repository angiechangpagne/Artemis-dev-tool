import React from 'react'
import { Divider, Grid, Image, Segment } from 'semantic-ui-react'
import Query2 from "./Query2.jsx";
import GraphQLResponse from "./GraphQLResponse.jsx";

const VerticalDivider = (props) => (
  <Segment>
    <Grid columns={2} >
      <Grid.Column>
     
      <Query2 queries={props.queries} historyBtn={props.historyBtn} /> 

      </Grid.Column>

      <Grid.Column>
      <GraphQLResponse results={props.results} historyBtn={props.historyBtn} />

      </Grid.Column>
    </Grid>

    <Divider vertical></Divider>
  </Segment>
)

export default VerticalDivider