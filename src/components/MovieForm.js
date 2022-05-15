import React, { useState } from 'react'
import SaveButton from './SaveButton'

export default function MovieForm({ addMovie }) {
    const [title, setTitle] = useState('');
    const [grade, setGrade] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (!title) {
            alert("Du måste ange en filmtitel!");
            return;
        }

        if (grade === 0) {
            alert("Du måste ange ett betyg!");
            return;
        }

        addMovie({ title, grade });

        setTitle('');
        setGrade('');
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <h2>Lägg till en film</h2>

                <label>Titel:</label>
                <input type="text"
                    placeholder="Titel här..."
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Betyg:</label>
                <select type="text" className="form-control"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                >
                    <option value="0">Välj betyg här...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <SaveButton />
            </div>
        </form>
    );
}