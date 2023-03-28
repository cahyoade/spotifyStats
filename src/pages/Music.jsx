import React, { useEffect, useState } from "react";
import TopTracks from "../components/TopTracks";
import TrackModal from "../components/TrackModal";


export default function Music(props){
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({});

    return (
        <div className=" h-min-screen flex flex-col items-center pb-24">
            {showModal ? <TrackModal accessToken={props.accessToken} {...modalData} setShowModal={setShowModal}/> : <></>}
            <TopTracks setModalData={setModalData} setShowModal={setShowModal} accessToken={props.accessToken}/>
        </div>
    )
}