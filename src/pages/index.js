import { db } from '../../firebase.js';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useRef } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';

export default function Home() {
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);

  const [realtimePost] = useCollection(
    db.collection('posts').orderBy('timestamp', 'desc')
  );

  const sendPost = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    db.collection('posts').add({
      message: inputRef.current.value,
      name: inputRef2.current.value,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    inputRef.current.value = '';
    inputRef2.current.value = '';
  };

  return (
    <div>
      <h2>Firebase Database</h2>
      <form onSubmit={sendPost}>
        <input type='text' placeholder='write a comment' ref={inputRef} />
        <input type='text' placeholder='second input' ref={inputRef2} />
        <button type='submit'>Send</button>
      </form>
      <div >
        {realtimePost?.docs?.map((post) => (
          <div key={post.id}>{post.data().message} {post.data().name}</div>
        ))}
      </div>
    </div>
  );
}