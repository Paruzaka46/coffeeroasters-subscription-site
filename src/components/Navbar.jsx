

const Navbar = () => {
    return (
        <div className="flex justify-between desk:mx-[80px] tab:mx-[40px] my-[43.5px]">
            <img src="assets/shared/desktop/logo.svg"/>
            <ul className="flex text-[12px] text-grey gap-[33px] font-barlow font-bold uppercase">
                <li className="hover:text-dark-grey-blue transition-all"><a href="#">Home</a></li>
                <li className="hover:text-dark-grey-blue transition-all"><a href="#">About Us</a></li>
                <li className="hover:text-dark-grey-blue transition-all"><a href="#">Create your Plan</a></li>
            </ul>
        </div>
    )
}

export default Navbar