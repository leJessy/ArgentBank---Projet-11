import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Edit() {
  const [newUsername, setNewUsername] = useState('');
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const firstname = useSelector((state) => state.user.firstname);
  const lastname = useSelector((state) => state.user.lastname);
  const username = useSelector((state) => state.user.username);

  useEffect(() => {
    if (username !== null && username !== undefined) {
      setNewUsername('');
    }
  }, [username]);
  

  const handleChange = (event) => {
    setNewUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userName: newUsername }),
      });

      if (response.ok) {
        dispatch({
          type: 'SET_PROFILE',
          payload: {
            username: newUsername,
            firstname: firstname,
            lastname: lastname,
          },
        });
        setNewUsername('');

      } else {
        console.error('Erreur');
      }
    } catch (error) {
      console.error('Erreur');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-edit">
          <label htmlFor="username">New Username</label>
          <input type="text" id="username" value={newUsername} onChange={handleChange} />
        </div>
        <button className="edit-button" type="submit">
        Edit Name
        </button>
      </form>
      
    </>
  );
}

export default Edit;