import React from 'react'
import { Segment } from 'semantic-ui-react'
import ContactList from '../ContactList/ContactList'

const Home = () => (
    <Segment>
        <ContactList
            name={'Dan the Man'}
        />
    </Segment>
)

export default Home
