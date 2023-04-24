import React, { useState } from 'react';

export default function App() {
    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

    const handleClick = () => {
        const newItem = `Item ${items.length + 1}`;
        setItems([...items, newItem]);
    };

    return (
        <div>
            <h1>Items:</h1>
            <ul>
                {items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
            <button onClick={handleClick}>Add Item</button>
        </div>
    );
}