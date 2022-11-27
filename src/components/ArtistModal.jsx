import React, {useState, useEffect} from "react";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { BsSpotify } from 'react-icons/bs'
import constants from '../constants';
import { ContactlessOutlined } from "@mui/icons-material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import MusicItem from "./MusicItem";
import AlbumItem from "./AlbumItem";

export default function ArtistModal(props){
    const [popularTracksData, setPopularTracksData] = useState([]);
    const [albumData, setAlbumData] = useState([]);

    useEffect(() => {
        const header = {headers : {
            'Authorization': `Bearer ${props.accessToken}`,
            'Content-Type': 'application/json'
        }};
        Promise.all([fetch(`https://api.spotify.com/v1/artists/${props.id}/top-tracks?market=id`,
        header), fetch(`https://api.spotify.com/v1/artists/${props.id}/albums?limit=5&market=id`, header)])
        .then(res => res.map(i => i.json()))
        .then(([tracksData, albumData]) => {
            tracksData.then(data => {
                try{
                    if(data.error.status == 401){
                        window.location = constants.url;
                    }
                }catch{
                    setPopularTracksData(data.tracks);
                }
            });
            albumData.then(data => {
                    try{
                        if(data.error.status == 401){
                            window.location = constants.url;
                        }
                    }catch{
                        setAlbumData(data.items);
                    }
            })
        })
    }, [props])

    return(
        <div className="modal flex flex-col items-center fixed top-0 rounded-lg bg-black w-full h-screen overflow-auto text-white">
            <div className="flex mb-6 fixed z-50 p-2 top-6 left-4 rounded-full bg-black/60">
                <ArrowBackIosNewIcon fontSize="medium" className="cursor-pointer" onClick={() => {props.setShowModal(false)}}/>
            </div>
            <div className="max-w-7xl w-screen md:w-7/12 md:py-6">
                <div className={`w-full h-72 md:h-80 object-cover mb-3 relative`}>
                    <img className="w-full h-full md:w-56 md:h-56 md:rounded-full md:absolute md:bottom-12 md:left-6 object-cover mb-8 brightness-[0.70]" src={props.images[0].url} alt=""/>
                    <p className="text-5xl absolute bottom-0 font-bold px-6 mb-6">{props.name}</p>
                </div>
                <div className="flex px-4 flex-wrap items-center mb-6">
                    {props.genres.map((genre, index) => <div key={index} className="bg-gray-300/20 px-3 py-[6px] rounded-full mr-2 m-1 text font-medium text-sm">{genre}</div> )}
                </div>
                <div className="mb-8 px-8">
                    <h2 className="font-bold text-2xl mb-5">Popular</h2>
                    { popularTracksData ? popularTracksData.slice(0,5).map((item, index) => <MusicItem {...item} key={index} number={index + 1}/>) : <></>}
                </div>
                <div className="mb-12 px-8">
                    <h2 className="font-bold text-2xl mb-5">Recent Releases</h2>
                    {albumData ? albumData.map((item, index) => <AlbumItem {...item} key={index}/>) : <></>}
                </div>
                <div className="flex ml-6 items-center font-bold cursor-pointer pb-28"> 
                    <BsSpotify className="mr-3 text-2xl" fontSize="large"/>
                    <a href={props.external_urls.spotify} target="blank">Open on Spotify</a>
                </div>
            </div>
        </div>
    )
}