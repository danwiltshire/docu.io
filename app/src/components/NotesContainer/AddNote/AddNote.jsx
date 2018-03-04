import React from 'react'
import { TextArea, Button } from 'semantic-ui-react'

const AddNote = props => (
    <div>
        <TextArea
            onChange={props.handleChange}
            value={props.newNote}
        />
        < br />
        < Button
            primary
            onClick = {props.handleNewNote}
        >
            Add Note
        </Button>
    </div>
)

export default AddNote
