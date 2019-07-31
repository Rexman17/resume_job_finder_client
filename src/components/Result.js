import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const Result = (props) => {

  return (
    <div>
      <h1>Ur Results</h1>
        <Card.Content>
        <Image floated='right' size='mini' src='' />
        <Card.Header>Steve Sanders</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
        Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
        </Card.Content>
    </div>
  )
}

export default Result
