const HomeHero = () => {
    return (
        <div className="desk:mx-[80px] tab:mx-[40px] desk:bg-home-hero-desk tab:bg-home-hero-tab bg-cover desk:py-[115px] tab:py-[104px] desk:pl-[86px] tab:pl-[58px] mb-[136px] rounded-lg">
            <h1 className="desk:text-[72px] tab:text-[48px] font-fraunces font-black desk:mb-[32px] tab:mb-[24px] desk:max-w-[493px] tab:max-w-[329px] desk:leading-[72px] tab:leading-[48px] text-light-cream">Great coffee made simple.</h1>  
            <p className="font-barlow desk:max-w-[444px] tab:max-w-[398px] desk:mb-[56px] tab:mb-[40px] desk:text-[16px] tab:text-[15px] text-light-cream leading-[26px]">Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
            <button className="font-fraunces text-[18px] px-[31px] py-[15px] bg-dark-cyan text-light-cream rounded-[6px]">Create your plan</button>
        </div>
    )
}

export default HomeHero