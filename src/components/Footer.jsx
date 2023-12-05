const Footer = () => {
    return (
        <div className="desk:mx-[80px] tab:mx-[40px] mx-[24px] desk:mb-[88px] tab:mb-[72px] bg-dark-grey-blue px-[85px] py-[47px] flex desk:flex-row mobile:flex-col desk:justify-between tab:items-center gap-[65px]">
            <div className="flex desk:flex-row mobile:flex-col desk:gap-0 tab:gap-[32px] mobile:gap-[48px] items-center justify-between lg:w-[600px] ">
                <img src="/assets/shared/desktop/logo-footer.svg"/>
                <ul className="flex tab:flex-row mobile:flex-col text-[12px] tab:text-start mobile:text-center text-grey tab:gap-[33px] mobile:gap-[24px] font-barlow font-bold uppercase">
                    <li className="hover:text-light-cream transition-all"><a href="#">Home</a></li>
                    <li className="hover:text-light-cream  transition-all"><a href="#">About Us</a></li>
                    <li className="hover:text-light-cream  transition-all"><a href="#">Create your Plan</a></li>
                </ul>
            </div>
            <div className="flex items-center justify-center gap-3">
                <img src="/assets/shared/desktop/icon-facebook.svg"/>
                <img src="/assets/shared/desktop/icon-twitter.svg"/>
                <img src="/assets/shared/desktop/icon-instagram.svg"/>
            </div>
        </div>
    )
}

export default Footer