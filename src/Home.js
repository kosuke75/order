import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './firebase'; 
import { useAuthState } from "react-firebase-hooks/auth";
import UserInfo from "./UserInfo";
import { useNavigate } from 'react-router-dom';

function Home() {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <p>ログイン状態を確認中...</p>;
  }

  return (
    <div>
      {user ? (
        <>
          <UserInfo user={user} />
          <SignOutButton />
        </>
      ) : (
        <SignInButton />
      )}
    </div>
  );
}

export default Home;

function SignInButton() {
  const navigate = useNavigate(); 

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        console.log('Signed in as:', result.user.displayName);
        navigate('/order'); // ログイン後に /order ページへリダイレクト
      })
      .catch(error => {
        console.error('Error signing in:', error);
      });
  };

  return (
    <button onClick={signInWithGoogle}>
      ログイン
    </button>
  );
}

function SignOutButton() {
  const signOut = () => {
    auth.signOut()
      .then(() => {
        console.log('User signed out');
      })
      .catch(error => {
        console.error('Error signing out:', error);
      });
  };

  return (
    <button onClick={signOut}>
      ログアウト
    </button>
  );
}
