import React, { useState, useEffect } from "react";
import { BsSpotify } from 'react-icons/bs'
import PersonIcon from '@mui/icons-material/Person';

export default function Profile(props){
    const [userData, setUserData] = useState('');

    useEffect(() => {
        const options = {headers : {
            'Authorization': `Bearer ${props.accessToken}`,
            'Content-Type': 'application/json'
        }};

        Promise.all([fetch(`https://api.spotify.com/v1/me`, options)
        .then(res => res.json())])
        .then(([userProfileData]) => {
            try{
                if(userProfileData.error.status == 401){
                    window.location = 'http://127.0.0.1:5173/'
                }
            }catch{
                setUserData(userProfileData)
            }
        })

    }, []);

    

    
    return (
        userData ? 
        <div className="profile w-screen min-h-screen px-6 pt-16 pb-24 bg-black flex flex-col items-center justify-center">
            <img src={userData.images[0].url} className=' mb-10 rounded-full w-48 h-48' alt="user profile photo"/>
            <p className="text-white text-4xl font-bold mb-6">{userData.display_name}</p>
            <div className="flex items-center mb-4">
                <BsSpotify className="text-2xl text-white mr-2"/>
                <a target='blank' href={userData.external_urls.spotify} className="text-white font-bold text-sm">Open in Spotify</a>
            </div>
            <div className="text-white mb-12 flex items-center font-bold text-sm">
                <PersonIcon className="mr-2"/>
                <p>{`${userData.followers.total} followers`}</p>
            </div>
        </div> : <div className="w-screen h-screen bg-black"></div>
    )
}