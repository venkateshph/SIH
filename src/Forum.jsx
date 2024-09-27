// Forum.js
import React, { useState } from 'react';
import './Forum.css';

const Forum = () => {
  const [posts, setPosts] = useState([
    { id: 1, user: 'Alice', content: 'What are the best practices for cotton farming?' },
    { id: 2, user: 'Bob', content: 'I’ve had great success with organic fertilizers!' },
  ]);

  const [newPost, setNewPost] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim()) {
      setPosts([...posts, { id: posts.length + 1, user: 'You', content: newPost }]);
      setNewPost('');
    }
  };

  return (
    <div className="forum">
      <h2>Community Forum</h2>
      <div className="post-list">
        {posts.map(post => (
          <div key={post.id} className="post">
            <strong>{post.user}:</strong> {post.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="post-form">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Share your thoughts..."
          required
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default Forum;
