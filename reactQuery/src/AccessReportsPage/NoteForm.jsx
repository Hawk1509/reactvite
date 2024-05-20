import React from 'react';
import Form from 'react-bootstrap/Form';
import './NoteForm.css';

function NoteForm({ note, onNoteChange }) {
    return (
        <div className="form-container">
            <Form className="note-form">
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="form-label">Note</Form.Label>
                    <Form.Control as="textarea" rows={3} className="form-control" value={note} onChange={onNoteChange} />
                </Form.Group>
            </Form>
        </div>
    );
}

export default NoteForm;
