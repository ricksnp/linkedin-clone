import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { auth } from '../../firebase'
import { login } from '../../_reducers/userSlice'
import './Login.css'

function Login() {

    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profilePic, setProfilePic] = useState("");

    const register = () => {
        if (!name) {
            return alert('Please enter a full name!');
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoUrl: profilePic
                        }))
                    })
            }).catch(error => alert(error))
    }

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL
                }))
            }).catch(error => alert(error))

    }
    return (
        <div className="login">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/291px-LinkedIn_Logo.svg.png" alt="" />
            <form>
                <input type="text" placeholder="Full name (required if registering)" required value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" value={profilePic} onChange={(e) => setProfilePic(e.target.value)} placeholder="Profile pic URL (optional)" />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member?{" "}
                <span className='login__register' onClick={register}>
                    Register now
                </span>
            </p>
        </div>
    )
}

export default Login
