import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ClassDetail() {
    const { id } = useParams();
    const [classDetail, setClassDetail] = useState(null);

    useEffect(() => {
        axios.get(`/api/classes/${id}/`)
            .then(response => setClassDetail(response.data))
            .catch(error => console.error('Error fetching class details', error));
    }, [id]);

    if (!classDetail) return <div>Loading...</div>;

    return (
        <div>
            <h1>{classDetail.name}</h1>
            <p>{classDetail.description}</p>
            <h2>Units</h2>
            <ul>
                {classDetail.units.map(unit => (
                    <li key={unit.id}>
                        <h3>{unit.title}</h3>
                        <ul>
                            {unit.sessions.map(session => (
                                <li key={session.id}>
                                    <h4>{session.title}</h4>
                                    <ul>
                                        {session.lectures.map(lecture => (
                                            <li key={lecture.id}>
                                                <h5>{lecture.title}</h5>
                                                <p>{lecture.content}</p>
                                                <Link to={`/class/${id}/lecture/${lecture.id}/comments`}>View Comments</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ClassDetail;