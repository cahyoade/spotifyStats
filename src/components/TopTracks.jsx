import React, { useEffect, useState } from "react";
import MusicItem from '../components/MusicItem';
import constants from '../constants';

export default function TopTracks(props){
    const [topTracks, setTopTracks] = useState([]);
    const [timeRange, setTimeRange] = useState('short_term');

    useEffect(() => {
        fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange}&limit=10`,
        {headers : {
            'Authorization': `Bearer ${props.accessToken}`,
            'Content-Type': 'application/json'
        }}).then(res => res.json())
        .then(data => {
            try{
                if(data.error.status == 401){
                    window.location = constants.url;
                }
            }catch{
                setTopTracks(data.items);
            }
        })
    }, [timeRange]);


    return (
        <div className="topTracks flex flex-col px-8 pt-12 w-full max-w-7xl bg-black pb-20">
            <div className="flex items-start flex-col md:flex-row md:items-center md:justify-between md:mb-12">
                <h2 className="text-white font-bold text-3xl mb-4 md:mb-0 md:text-4xl">Top Tracks</h2>
                <div className=" font-bold text-md mb-8 md:text-lg md:mb-0 flex">
                    <p onClick={() => setTimeRange('short_term')} className={`mr-4 cursor-pointer ${timeRange == 'short_term' ? 'text-white border-b-2 border-sky-400' : 'text-slate-500'}`}>4 weeks</p>
                    
                    <p onClick={() => setTimeRange('medium_term')} className={`mr-4 cursor-pointer ${timeRange == 'medium_term' ? 'text-white border-b-2 border-sky-400' : 'text-slate-500'}`}>6 months</p>
                    
                    <p onClick={() => setTimeRange('long_term')} className={`mr-4 cursor-pointer ${timeRange == 'long_term' ? 'text-white border-b-2 border-sky-400' : 'text-slate-500'}`}>All Time</p>
                </div>
            </div>
            {topTracks.map((item, index) => <MusicItem setShowModal={props.setShowModal} setModalData={props.setModalData} {...item} number={index + 1} key={index} />)}
        </div>
    )
}