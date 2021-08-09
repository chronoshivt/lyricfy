import { useEffect, useState } from 'react';
import useAuth from "./useAuth"
import { Container } from 'react-bootstrap'
import SpotifyWebApi from 'spotify-web-api-node'
import axios from 'axios'
import './Dashboard.css'


const spotifyApi = new SpotifyWebApi({
    clientId: '360163f3fb1946b2bdc3d63460ed2205',
})



export default function Dashboard({ code }) {



    const accessToken = useAuth(code)
    useEffect(() => {
        if (!accessToken) return 
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])
    
    const [trackName, setTrackName] = useState()
    const [trackArtist, setTrackArtist] = useState()
    function Lyricz() {

        spotifyApi.getMyCurrentPlaybackState()
        .then(function(data) {
          // Output items
          if (data.body && data.body.is_playing) {
            console.log("User is currently playing something!");
            spotifyApi.getMyCurrentPlayingTrack()
      .then((data) => {
          setTrackName(data.body.item.name )
          setTrackArtist(data.body.item.artists[0].name)
          console.log(trackName)
          console.log(trackArtist)
          axios.get('http://localhost:3001/lyrics', { 
              params: { 
                  track: data.body.item.name,
                  artist: data.body.item.artists[0].name,
              }
           } )
          .then((res) => {
            window.open(res.data.url)
              console.log(res.data.url)
          })
          return {
            song: data.body.item.name,
            artist: data.body.item.artists[0].name
          }
      }, function(err) {
        console.log('Something went wrong!', err);
      })
          } else {
              alert("Nothing is playing:(")
            console.log("User is not playing anything, or doing so in private.");
          }
        }, function(err) {
          console.log('Something went wrong!', err);
        });
      

        

        

}


    
        return <div className= 'yo'>
<Container className='d-flex justify-content-center align-items-center'
    style={{ minHeight: "100vh" }}>
        <button className='fart btn btn-dark btn-lg' 
        onClick={Lyricz}
        >
            Lyricfy
        </button>
    </Container>
</div>

}


