import React from 'react'
import { TextArea, Button } from 'semantic-ui-react'
import { PropTypes } from 'prop-types'

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

AddNote.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleNewNote: PropTypes.func.isRequired,
    newNote: PropTypes.string
}

export default AddNote
