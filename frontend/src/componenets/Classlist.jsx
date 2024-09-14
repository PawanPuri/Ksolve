import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ClassList() {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        axios.get('/api/classes/')
            .then(response => setClasses(response.data))
            .catch(error => console.error('Error fetching classes', error));
    }, []);

    return (
        <div>
            <h1>Classes</h1>
            <ul>
                {classes.map(cl => (
                    <li key={cl.id}>
                        <Link to={`/class/${cl.id}`}>{cl.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ClassList;