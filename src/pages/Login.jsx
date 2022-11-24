import React from "react";

const AUTH_URL = 'https://accounts.spotify.com/authorize?response_type=token&client_id=647bf34d7074498aa76c40c655fad809&scope=user-top-read%20user-read-email%20user-read-private%20user-library-read&redirect_uri=http://127.0.0.1:5173/&show_dialog=true';

export default function Login(){
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center  text-white">
            <h1 className="mb-12 text-4xl font-bold">Your Spotify Stats</h1>
            <button className="h-16 rounded p-4 bg-green-500"><a href={AUTH_URL} className="text-lg font-bold "> Log in with Spotify </a></button>
        </div>
    )
}