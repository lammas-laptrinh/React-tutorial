import React, { useContext, useState } from 'react';
import { Context } from './context';

export default function Demo(){
    const { items, addMember, deleteMember } = useContext(Context);
    const [itemInput, setMemberInput] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMemberInput(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (itemInput.trim()) {
            addMember(itemInput.trim());
            setMemberInput('');
        }
    };
    const handleDelete = (index: number) => {
        deleteMember(index);
    }
    return (
        <div>
            <h2>Members:</h2>
            <ul>
                {items.map((item, idx) => (
                    <li key={idx}>
                        {item}
                        <button onClick={() => handleDelete(idx)}>Delete</button>
                    </li>
                ))}

            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={itemInput}
                    onChange={handleInputChange}
                    placeholder="Enter member name"
                />
                <button type="submit">Add Member</button>

            </form>
        </div>
    );
};


