import React, { useEffect, useState } from "react";
import TopArtist from "../components/TopArtist";
import ArtistModal from "../components/ArtistModal";


export default function Music(props){
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({});

    return (
        <div className=" h-min-screen flex flex-col items-center pb-24">
            {showModal ? <ArtistModal accessToken={props.accessToken} {...modalData} setShowModal={setShowModal}/> : <></>}
            <TopArtist setModalData={setModalData} setShowModal={setShowModal} accessToken={props.accessToken}/>
        </div>
    )
}