import React from "react";

export default function MusicItem(props){
    let artists = [];
    props.album.artists.map( (i, idx) => {artists.push(i.name)});

    return (
        <div className="text-slate-400 cursor-pointer flex items-center mb-4" onClick={() => {props.setModalData(props); props.setShowModal(true)}}>
            <div className="mr-6 w-6 text-right font-bold text-md md:text-xl text-slate-500">{props.number}</div>
            <img className="h-12 mr-4 rounded" src={props.album.images[2].url} alt="album cover"/>
            <p className="flex-grow flex flex-col md:block">
                <span className="text-white font-bold text-md md:text-xl mr-4">{props.name}</span>
                <span className="text-sm md:text-lg w-full">{artists.join(', ')}</span>
            </p>
        </div>
    )
}