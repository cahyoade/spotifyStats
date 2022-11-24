import react from 'react'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';

export default function Navbar(props){
    return (
        <div className='Navbar w-screen h-20 bg-zinc-800/75 fixed bottom-0 flex items-center justify-center'>
            <div className='flex justify-around w-full max-w-xl text-sm md:text-md'>
                <div onClick={() => {props.setPage('music')}} className={`navbarItem flex-grow flex flex-col items-center cursor-pointer ${props.page == 'music' ? 'text-sky-400' : 'text-slate-300'}`}><LibraryMusicIcon /><p> Top Tracks</p></div>
                <div onClick={() => {props.setPage('artist')}} className={`navbarItem flex-grow flex flex-col items-center cursor-pointer ${props.page == 'artist' ? 'text-sky-400' : 'text-slate-300'}`}><GroupIcon /><p>Top Artist</p></div>
                <div onClick={() => {props.setPage('profile')}} className={`navbarItem flex-grow flex flex-col items-center cursor-pointer ${props.page == 'profile' ? 'text-sky-400' : 'text-slate-300'}`}><PersonIcon /><p>Profile</p></div>
            </div>
        </div>
    )
}