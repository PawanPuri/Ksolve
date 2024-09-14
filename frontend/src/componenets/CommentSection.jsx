import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CommentSection() {
    const { lectureId } = useParams();
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        axios.get(`/api/lectures/${lectureId}/comments/`)
            .then(response => setComments(response.data))
            .catch(error => console.error('Error fetching comments', error));
    }, [lectureId]);

    const handleCommentSubmit = () => {
        axios.post(`/api/comments/`, { content: newComment, lecture: lectureId })
            .then(response => {
                setComments([...comments, response.data]);
                setNewComment('');
            })
            .catch(error => console.error('Error posting comment', error));
    };

    return (
        <div>
            <h2>Comments</h2>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        {comment.content}
                        <ul>
                            {comment.replies.map(reply => (
                                <li key={reply.id}>{reply.content}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
            <textarea value={newComment} onChange={(e) => setNewComment(e.target.value)} />
            <button onClick={handleCommentSubmit}>Add Comment</button>
        </div>
    );
}

export default CommentSection;