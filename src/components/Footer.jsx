const Footer = () => {
    return (
        <div className="mx-[80px] mb-[88px] bg-dark-grey-blue px-[85px] py-[47px] flex justify-between">
            <div className="flex items-center justify-between lg:w-[600px] ">
                <img src="assets/shared/desktop/logo-footer.svg"/>
                <ul className="flex text-[12px] text-grey gap-[33px] font-barlow font-bold uppercase">
                    <li className="hover:text-light-cream transition-all"><a href="#">Home</a></li>
                    <li className="hover:text-light-cream  transition-all"><a href="#">About Us</a></li>
                    <li className="hover:text-light-cream  transition-all"><a href="#">Create your Plan</a></li>
                </ul>
            </div>
            <div className="flex items-center gap-3">
                <img src="/assets/shared/desktop/icon-facebook.svg"/>
                <img src="/assets/shared/desktop/icon-twitter.svg"/>
                <img src="/assets/shared/desktop/icon-instagram.svg"/>
            </div>
        </div>
    )
}

export default Footer