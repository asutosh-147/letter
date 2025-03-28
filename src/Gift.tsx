import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import MyConfetti from './Confetti'

const Gift = () => {
    const navigate = useNavigate()
    const [showConfetti, setShowConfetti] = useState(true)
    // const yaySound = new Audio("/audio/yay.mp3")
    useEffect(() => {
        if(localStorage.getItem("username")!=="mitsuha" || localStorage.getItem("password") !== "mitsuha21012023"){
          navigate("/")
        }
    }, [navigate])

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowConfetti(false)
        }, 6000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className='flex flex-col items-center justify-center gap-10 h-screen bg-gray-600'>
            {showConfetti && <MyConfetti />}
            <div className='text-white font-medium text-3xl tracking-widest'>Remember?</div>
            <img src="loid_forger.jpg" alt="gift" height={1920/1.5} width={1080/1.5} className='rounded-xl shadow-2xl hover:scale-110 duration-300' />
            <a href="loid_forger.jpg" download={"gift.jpg"} className='text-white font-semibold capitalize bg-gray-900 py-3 px-5 rounded-lg active:scale-90 duration-200'>download</a>
        </div>
    )
}

export default Gift
