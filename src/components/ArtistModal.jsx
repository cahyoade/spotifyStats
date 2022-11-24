import React from "react";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { BsSpotify } from 'react-icons/bs'

export default function ArtistModal(props){
    return(
        <div style={{backdropFilter: 'blur(4px)'}} className="modal flex flex-col items-center fixed top-1/2 -translate-y-1/2 rounded-lg bg-zinc-800/75 w-10/12 py-6 text-white max-w-xl">
            <div className="flex justify-end w-full px-6 mb-6">
                <CloseOutlinedIcon fontSize="medium" className="cursor-pointer" onClick={() => {props.setShowModal(false)}}/>
            </div>
            <img className="rounded w-60 h-60 mb-8" src={props.images[1].url} alt=""/>
            <p className="text-3xl font-bold px-6 mb-8 text-center">{props.name}</p>
            <div className="flex items-center font-bold cursor-pointer mb-8"> 
                <BsSpotify className="mr-2" fontSize="large"/>
                <a href={props.external_urls.spotify} target="blank">Open on Spotify</a>
            </div>
            <div className="flex px-4 flex-wrap items-center justify-center">
                {props.genres.map((genre, index) => <div key={index} className="bg-black px-4 py-2 rounded-full m-1 font-bold text-sm">{genre}</div> )}
            </div>
        </div>
    )
}