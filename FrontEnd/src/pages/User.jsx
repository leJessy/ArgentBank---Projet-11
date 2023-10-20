import React, { useEffect } from 'react';
import Account from '../components/Account';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

const User = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const firstname = useSelector((state) => state.user.firstname);
  const lastname = useSelector((state) => state.user.lastname);

  useEffect(() => {
    if (isAuthenticated) {
       const fetchData = async () => {
          try {
          const response = await fetch('http://localhost:3001/api/v1/user/profile', {
             method: 'POST',
             headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
             },
          });
          if (response.ok) {
             const data = await response.json();
             console.log(data);
             dispatch({
                type: 'SET_PROFILE',
                payload: {
                   username: data.body.userName,
                   firstname: data.body.firstName,
                   lastname: data.body.lastName,
                },
             }); 
          } else {
             console.log("Erreur lors de la récupération du profil");
          }
          } catch (err) {
             console.log("Erreur lors de la récupération du profil");
          }
       };
       
       fetchData();

    }
    }, [dispatch, isAuthenticated]);

  return (
    <main className='main bg-dark'>
    <div className='header'>
      <h1>
        Welcome back
        <br />
        {firstname} {lastname}!
      </h1>
      <button className='edit-button'>Edit Name</button>
    </div>
    <h2 className='sr-only'>Accounts</h2>
    <Account 
      title="Argent Bank Checking (x8349)"
      amount="$2,082.79"
      description="Available Balance"/>
    <Account 
      title="Argent Bank Savings (x6712)"
      amount="$10,928.42"
      description="Available Balance"/>
    <Account 
      title="Argent Bank Credit Card (x8349)"
      amount="$184.30"
      description="Current Balance"/>
  </main>
  );
};

export default User;



    
