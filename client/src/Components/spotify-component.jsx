import axios from 'axios'
import { useEffect,useState } from 'react'

const SpotifyProfile = ()=>{

    const [songData,setSongData] = useState({})

    useEffect(()=>{
         const songData = async()=>{
            const Data = await axios.get('https://spotify_server.ppranavvvvv918.workers.dev')
            setSongData(Data.data)
            console.log(Data.data)
         }
         setInterval(() => {
            songData()
        }, 5000);
    },[])

    console.log(songData.title)

    return(
        <>
        {
        songData.title === undefined ? 
        <div className='w-[80%] h-[70px] flex items-center '>
        <img className='w-[30px] h-[30px]  rounded-full mr-[12px]' src="https://imgs.search.brave.com/jdSgE6rbYbYNaAIotVL4SzlgSXXf9qKVcTTAlq9ylho/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy84/Lzg0L1Nwb3RpZnlf/aWNvbi5zdmc" alt="" />
        <p className=''>not playing</p>
        </div>
        :
        <>
           <div className='w-[80%] h-[70px] flex items-center '>
          <img className='w-[30px] h-[30px] animate-[spin_3s_linear_infinite] rounded-full mr-[12px]' src={songData.albumImageUrl} alt="" />
          <p className=''>{songData.title}</p>
        </div>
        </>
        }
        </>
    )
}

export default SpotifyProfile