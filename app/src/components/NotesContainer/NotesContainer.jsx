import React, { Component } from 'react'
import NotesList from "./NotesList/NotesList";
import AddNote from './AddNote/AddNote'

class NotesContainer extends Component{
    constructor() {
        super()
        this.state = {
            notes: [],
            newNote: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleNewNote = this.handleNewNote.bind(this)
        this.fetchNotes = this.fetchNotes.bind(this)
    }

    componentDidMount() {
        this.fetchNotes()
    }

    fetchNotes () {
        // eslint-disable-next-line no-undef
        fetch('http://127.0.0.1:3001/notes')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    notes: json
                })
            })
    }

    handleChange (ev) {
        this.setState({
            newNote: ev.target.value
        })
    }

    handleNewNote () {
        // eslint-disable-next-line no-undef
        fetch('http://127.0.0.1:3001/notes',
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({note: this.state.newNote})
            })
            .then(res => res.json())
            .then(newNoteObj => {
                const newNotesList = this.state.notes.slice()
                newNotesList.push(newNoteObj)
                this.setState({
                    newNote: '',
                    notes: newNotesList
                })
        })
    }

    render() {
        return (
            <div>
                <NotesList notes={this.state.notes} />
                <AddNote
                    handleChange={this.handleChange}
                    handleNewNote={this.handleNewNote}
                    newNote={this.state.newNote}
                />
            </div>
        )
    }
}

export default NotesContainer
