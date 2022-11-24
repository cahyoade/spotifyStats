import React from "react";

export default function ArtistItem(props){
    return(
        <div className="text-slate-400 cursor-pointer flex items-center mb-4" onClick={() => {props.setModalData(props); props.setShowModal(true)}} >
        <div className="mr-6 w-6 text-right font-bold text-md md:text-xl text-slate-500">{props.number}</div>
        <img className="h-12 w-12 mr-4 rounded" src={props.images[2].url} alt="album cover"/>
        <p className="text-white font-bold text-md md:text-xl mr-4">
            {props.name}
        </p>
    </div>
    )
}