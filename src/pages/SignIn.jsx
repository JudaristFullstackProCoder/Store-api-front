// Import FirebaseAuth and firebase.
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/auth';
import header from '../svg/header.svg';
import { Divider } from '@mantine/core';
import { Navigate } from 'react-router-dom';
import { useContext, useEffect} from 'react';
import { userContext } from '../context/userContext';

// Configure Firebase.
const config = {
  apiKey: 'AIzaSyBpLJT_vkVij3Kd2yXKkaPZdalZP0bTvqk',
  authDomain: 'marketplace-332416.firebaseapp.com',
  // ...
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Not Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

export default function SignInPage () {
  const {setUser} = useContext(userContext);

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onIdTokenChanged(user => {
      setUser(user?user._delegate : null);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, [setUser]);

  const {user} = useContext(userContext);
  if (user){
      const currentUser = firebase.auth().currentUser?._delegate;
      localStorage.setItem('user', JSON.stringify(currentUser));
      setUser(currentUser);
      return <Navigate replace={true} to={'/'} />
  } else {
    return (
      <div className='flex w-screen h-screen'>
        <div className='w-full h-full pt-14 pb-14'>
          <div className='pb-14 flex mx-auto my-auto'>
            <span className='mx-auto'> <div className='mb-5 ml-6'><img src={header} alt={header} /></div> <span className='text-4xl font-semibold'> Sign Up</span></span>
          </div>
          <Divider size={'xs'} />
          <div className='pt-5'>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
          </div>
        </div>
      </div>
    );
  }
}
