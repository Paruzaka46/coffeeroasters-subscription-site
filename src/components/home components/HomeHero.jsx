import { Link } from "react-router-dom"

const HomeHero = () => {
    return (
        <div className="desk:mx-[80px] tab:mx-[40px] mobile:mx-[24px] desk:bg-home-hero-desk tab:bg-home-hero-tab mobile:bg-home-hero-mob bg-cover tab:text-start mobile:text-center desk:py-[115px] tab:py-[104px] mobile:py-[100px] desk:pl-[86px] tab:pl-[58px] mobile:px-[24px] tab:mb-[136px] mobile:mb-[120px] rounded-lg">
            <h1 className="desk:text-[72px] tab:text-[48px] mobile:text-[40px] font-fraunces font-black desk:mb-[32px] mobile:mb-[24px] desk:max-w-[493px] tab:max-w-[329px] desk:leading-[72px] tab:leading-[48px] mobile:leading-[40px] text-light-cream">Great coffee made simple.</h1>  
            <p className="font-barlow desk:max-w-[444px] tab:max-w-[398px] desk:mb-[56px] mobile:mb-[40px] desk:text-[16px] mobile:text-[15px] text-light-cream leading-[26px]">Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
            <button className="font-fraunces text-[18px] px-[31px] py-[15px] bg-dark-cyan text-light-cream rounded-[6px]"><Link to="/plan">Create your plan</Link></button>
        </div>
    )
}

export default HomeHero