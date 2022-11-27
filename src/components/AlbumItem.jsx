import React from "react";

export default function Albumitem(props){
    const year = props.release_date.split('-')[0]
    return(
        <div className="flex mb-4 items-center ml-4">
            <img className="rounded mr-3" src={props.images[2].url} alt="album cover"></img>
            <p className="flex flex-col">
                <span className="font-semibold">{props.name}</span>
                <span className="text-sm text-slate-400">{`${year} ⋅ ${props.album_type}`}</span>
            </p>
        </div>
    )
}