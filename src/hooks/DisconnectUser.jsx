import firebase from 'firebase/compat/app';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { userContext } from '../context/userContext';

export default function DisconnectUser() {
     firebase.auth().signOut();
     const {setUser} = useContext(userContext);
     setUser(null);
     localStorage.removeItem('user');
     localStorage.removeItem('auth_notif');
     return <Navigate to={'/SignIn'} replace={true}  />
}
