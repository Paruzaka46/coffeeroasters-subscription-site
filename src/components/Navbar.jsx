import { useMediaQuery } from "react-responsive"
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

const Navbar = () => {
    const isNotMobile = useMediaQuery({query: '(min-width: 426px)'})
    const [openBurger, setOpenBurger] = useState(false)

    useEffect(() => {
        if (openBurger) {
        window.scrollTo(0, 0);
        document.body.style.overflowY = "hidden";
        } else {
        document.body.style.overflowY = "auto";
        }
    }, [openBurger]);


    const notMobile = (
        <div className="flex justify-between desk:mx-[80px] tab:mx-[40px] my-[43.5px]">
            <img src="/assets/shared/desktop/logo.svg"/>
            <ul className="flex text-[12px] text-grey gap-[33px] font-barlow font-bold uppercase">
                <li className="hover:text-dark-grey-blue transition-all"><a href="#"><Link to="/">Home</Link></a></li>
                <li className="hover:text-dark-grey-blue transition-all"><a href="#"><Link to="/about">About Us</Link></a></li>
                <li className="hover:text-dark-grey-blue transition-all"><a href="#"><Link to="/plan">Create your Plan</Link></a></li>
            </ul>
        </div>
    )

    const itsMobile = (
        <div className="relative flex justify-between items-center px-[24px] py-[32px]">
            <img className="w-[163px]" src="/assets/shared/desktop/logo.svg"/>
            <input onClick={() => {setOpenBurger(!openBurger)}} type="image" src={!openBurger?"/assets/shared/mobile/icon-hamburger.svg":"/assets/shared/mobile/icon-close.svg"}/>
            <ul className={`absolute bg-gradient-to-b from-white to-white/70 z-20 left-0 text-[24px] text-dark-grey-blue font-fraunces w-full top-[90px] flex flex-col items-center gap-[32px] ${openBurger?"h-[100vh] py-[40px]":"h-0 py-0 overflow-hidden"} transition-all`}>
                <li onClick={() => {setOpenBurger(false)}} className="hover:text-dark-grey-blue transition-all"><a href="#"><Link to="/">Home</Link></a></li>
                <li onClick={() => {setOpenBurger(false)}} className="hover:text-dark-grey-blue transition-all"><a href="#"><Link to="/about">About Us</Link></a></li>
                <li onClick={() => {setOpenBurger(false)}} className="hover:text-dark-grey-blue transition-all"><a href="#"><Link to="/plan">Create your Plan</Link></a></li>
            </ul>
        </div>
    )

    return (
        <>
        {isNotMobile ? notMobile : itsMobile}
        {openBurger && <div className="absolute bg-gradient-to-b from-white to-white/10 z-10 w-full h-[100vh]"></div>}
        </>
    )
}

export default Navbar