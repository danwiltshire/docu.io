import React from 'react'
import { List } from 'semantic-ui-react'

const NotesList = props => {
    return (
        <List>
            {props.notes.map(note => {
                return (
                    <List.Item key={note._id}>
                        <List.Content>{note.note}</List.Content>
                    </List.Item>
                )
            })}
        </List>
    )
}

export default NotesList
