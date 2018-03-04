import React from 'react'
import { List, Segment } from 'semantic-ui-react'

const Home = () => (
    <Segment>
      <List>
        <List.Item>
          <List.Icon name='users' />
          <List.Content>Dan UI</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='marker' />
          <List.Content>Southampton, UK</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='mail' />
          <List.Content>
            <a href='mailto:mail@example.com'>dan@example.com</a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='linkify' />
          <List.Content>
            <a href='www.example.com'>semantic-ui.com</a>
          </List.Content>
        </List.Item>
      </List>
    </Segment>
)

export default Home
