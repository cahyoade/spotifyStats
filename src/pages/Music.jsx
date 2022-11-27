import React, { useEffect, useState } from "react";
import TopTracks from "../components/TopTracks";
import TrackModal from "../components/TrackModal";


export default function Music(props){
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({});

    return (
        <div className=" h-screen flex flex-col items-center">
            {showModal ? <TrackModal accessToken={props.accessToken} {...modalData} setShowModal={setShowModal}/> : <></>}
            <TopTracks setModalData={setModalData} setShowModal={setShowModal} accessToken={props.accessToken}/>
        </div>
    )
}