import React, {useState, useEffect} from "react";
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { BsSpotify } from 'react-icons/bs';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function Modal(props){
    const [trackAudioFeatures, setTracksAudioFeatures] = useState({});
    
    useEffect( () => {
        fetch(`https://api.spotify.com/v1/audio-features/${props.id}`,
        {headers : {
            'Authorization': `Bearer ${props.accessToken}`,
            'Content-Type': 'application/json'
        }}).then(res => res.json())
        .then(data => {
            try{
                if(data.error.status == 401){
                    window.location = constants;
                }
            }catch{
                setTracksAudioFeatures(data);
            }
        })
    }, [props])

    const key = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

    let artists = [];
    props.album.artists.map( (i, idx) => {artists.push(i.name)});

    const minutes = Math.floor(props.duration_ms/1000/60);
    const seconds = String(Math.ceil(props.duration_ms/1000%60)).padStart(2, '0');


    return(
        <div className="modal flex flex-col items-center fixed top-0 bg-black w-screen h-screen overflow-auto text-white pt-24">
            <div className="flex mb-6 fixed z-50 p-2 top-6 left-4 rounded-full bg-black/60">
                <ArrowBackIosNewIcon fontSize="medium" className="cursor-pointer" onClick={() => {props.setShowModal(false)}}/>
            </div>
            <div className="flex flex-col items-center w-full max-w-xl">
            <img className="rounded w-60 h-60 mb-8" src={props.album.images[1].url} alt=""/>
            <p className="text-md text-center px-6 font-bold mb-3">{artists.join(', ')}</p>
            <p className="text-3xl font-bold px-6 mb-8 text-center">{props.name}</p>
            
            <div className="flex justify-between w-full px-8 mb-8 text-xl font-bold">
                <p>{props.album.release_date.split('-')[0]} <span className="text-zinc-500 ml-1">Released</span></p>
                <div className="flex items-center">
                    <AccessTimeOutlinedIcon className="text-zinc-500 mr-2"/>
                    {`${minutes}:${seconds}`}
                </div>
            </div>

            {trackAudioFeatures ? 
            <div className="flex flex-col items-center w-full">
                <div className="flex justify-between w-full px-8 mb-8">
                    <p className="flex flex-col items-center">
                        <span className="font-bold text-lg">{key[trackAudioFeatures.key]}</span>
                        <span className="text-zinc-500 font-bold">Key</span>
                    </p>
                    <p className="flex flex-col items-center">
                        <span className="font-bold text-lg">{trackAudioFeatures.mode == 1 ? 'Major' : 'Minor'}</span>
                        <span className="text-zinc-500 font-bold">Mode</span>
                    </p>
                    <p className="flex flex-col items-center">
                        <span className="font-bold text-lg">{trackAudioFeatures.time_signature}/4</span>
                        <span className="text-zinc-500 font-bold">Time Signature</span>
                    </p>
                    <p className="flex flex-col items-center">
                        <span className="font-bold text-lg">{Math.round(trackAudioFeatures.tempo)}</span>
                        <span className="text-zinc-500 font-bold">BPM</span>
                    </p>
                </div>
                <div className="flex flex-col mb-8 w-full items-center">
                    <div className="w-full px-8 flex flex-col items-start mb-4">
                        <p className="font-bold">Energy</p>
                        <p className="mb-2 text-zinc-500 font-bold">Music that feels fast, loud, and noisy.</p>
                        <div className="h-2 w-full rounded-full bg-slate-600 mx-auto"></div>
                        <div style={{width:`${Math.round(trackAudioFeatures.energy * 100)}%`}} className={`h-2 rounded-full bg-sky-500 -mt-2`}></div>
                    </div>
                    <div className="w-full px-8 flex flex-col items-start mb-4">
                        <p className="font-bold">Danceability</p>
                        <p className="mb-2 text-zinc-500 font-bold">Music that makes you want to move it.</p>
                        <div className="h-2 w-full rounded-full bg-slate-600 mx-auto"></div>
                        <div style={{width:`${Math.round(trackAudioFeatures.danceability * 100)}%`}} className={`h-2 rounded-full bg-sky-500 -mt-2`}></div>
                    </div>
                    <div className="w-full px-8 flex flex-col items-start mb-4">
                        <p className="font-bold">Acousticness</p>
                        <p className="mb-2 text-zinc-500 font-bold">Music with no electric instruments.</p>
                        <div className="h-2 w-full rounded-full bg-slate-600 mx-auto"></div>
                        <div style={{width:`${Math.round(trackAudioFeatures.acousticness * 100)}%`}} className={`h-2 rounded-full bg-sky-500 -mt-2`}></div>
                    </div>
                    <div className="w-full px-8 flex flex-col items-start mb-4">
                        <p className="font-bold">Live</p>
                        <p className="mb-2 text-zinc-500 font-bold">Music that is performed live.</p>
                        <div className="h-2 w-full rounded-full bg-slate-600 mx-auto"></div>
                        <div style={{width:`${Math.round(trackAudioFeatures.liveness * 100)}%`}} className={`h-2 rounded-full bg-sky-500 -mt-2`}></div>
                    </div>
                    <div className="w-full px-8 flex flex-col items-start mb-4">
                        <p className="font-bold">Instrumental</p>
                        <p className="mb-2 text-zinc-500 font-bold">Music that contains no vocals.</p>
                        <div className="h-2 w-full rounded-full bg-slate-600 mx-auto"></div>
                        <div style={{width:`${Math.round(trackAudioFeatures.liveness * 100)}%`}} className={`h-2 rounded-full bg-sky-500 -mt-2`}></div>
                    </div>
                </div>
            </div> 
            : <></>}

            <div className="flex items-center font-bold cursor-pointer pb-32"> 
                <BsSpotify className="mr-2" fontSize="large"/>
                <a href={props.external_urls.spotify} target="blank">Play on Spotify</a>
            </div>
            </div>
        </div>
    )
}