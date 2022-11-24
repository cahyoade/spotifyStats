import React, { useEffect, useState } from "react";
import TopArtist from "../components/TopArtist";
import Modal from "../components/ArtistModal";


export default function Music(props){
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({});

    return (
        <div className=" h-screen flex flex-col items-center">
            {showModal ? <Modal {...modalData} setShowModal={setShowModal}/> : <></>}
            <TopArtist setModalData={setModalData} setShowModal={setShowModal} accessToken={props.accessToken}/>
        </div>
    )
}