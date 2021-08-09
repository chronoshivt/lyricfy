import React from 'react';
import { Container } from 'react-bootstrap'
import './Dashboard.css'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=360163f3fb1946b2bdc3d63460ed2205&response_type=code&redirect_uri=https://lyricfy1.herokuapp.com/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-read-private"

export default function Login() {
    return (
        <div className= 'spotify'>
    <Container className='d-flex justify-content-center align-items-center'
    style={{ minHeight: "70vh" }}>
        <a className='btn btn-success btn-lg' href ={AUTH_URL}>
            Login with Spotify
        </a>
    </Container>
        <div className='d-flex justify-content-center align-items-center box'
        style={{ minHeight: "30vh"}}>
            <p>
            Login with Spotify, and press 
            lyricfy to open the Genius page
            of the song you're listening to.
            </p>
        </div>
        <div className="box"
        style={{ minHeight: "0vh"}}>

        </div>
    </div>
    )
}