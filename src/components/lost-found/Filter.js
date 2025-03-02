import { useState } from "react";
import { Key, Cat, Search } from 'lucide-react';

const Filter = ({ returnFilter }) => {
    const [filter, setFilter] = useState('all');

    const handleFilter = (value) => {
        setFilter(value)
        returnFilter(value)
    }
    return (
        <div className="flex justify-center space-x-4 mb-6">
            <button
                className={`btn btn-outline ${filter === 'all' ? 'btn-active' : ''}`}
                onClick={() => handleFilter('all')}
            >
                <Search />
                All
            </button>
            <button
                className={`btn btn-outline ${filter === 'object' ? 'btn-active' : ''}`}
                onClick={() => handleFilter('object')}
            >
                <Key />
                Objects
            </button>
            <button
                className={`btn btn-outline ${filter === 'pet' ? 'btn-active' : ''}`}
                onClick={() => handleFilter('pet')}
            >
                <Cat />
                Pets
            </button>
        </div>
    )
}

export default Filter