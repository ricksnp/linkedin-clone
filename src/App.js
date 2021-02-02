import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';
import { auth } from './firebase';
import { login, logout, selectUser } from './_reducers/userSlice';
import { useDispatch } from "react-redux"
import Widgets from './components/Widgets/Widgets';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))
      }
      else {
        dispatch(logout());
      }
    })
  }, [])
  return (
    <div className="app">
      {!user ? <Login /> : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>)}
    </div>
  );
}

export default App;
