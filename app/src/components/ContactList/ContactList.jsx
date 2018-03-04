import React from 'react'
import { List } from 'semantic-ui-react'
import { PropTypes } from 'prop-types'

const ContactList = ({name}) => (
    <List>
        <List.Item>
            <List.Icon name='users' />
            <List.Content>{ name }</List.Content>
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
)

ContactList.propTypes = {
    name: PropTypes.string.isRequired
}

export default ContactList
