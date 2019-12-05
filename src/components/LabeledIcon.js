import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
 //for time travel dashboard
const LabeledIcon = () => (
  <div>
    <Button icon labelPosition='left'>
      <Icon name='pause' />
      Pause
    </Button>
    <Button icon labelPosition='right'>
      Next
      <Icon name='right arrow' />
    </Button>
  </div>
)

export default ButtonLabeledIcon