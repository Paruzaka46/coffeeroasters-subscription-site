const HomeWhy = () => {
    const whys = [
        {
            name: 'Best quality',
            desc: 'Discover an endless variety of the world’s best artisan coffee from each of our roasters.',
            img: 'assets/home/desktop/icon-coffee-bean.svg'
        },
        {
            name: 'Exclusive benefits',
            desc: 'Special offers and swag when you subscribe, including 30% off your first shipment.',
            img: 'assets/home/desktop/icon-gift.svg'
        },
        {
            name: 'Free shipping',
            desc: 'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.',
            img: 'assets/home/desktop/icon-truck.svg'
        }
    ]

    return (
        <div className="desk:mx-[80px] tab:mx-[40px] desk:text-[16px] tab:text-[15px] bg-dark-grey-blue text-center desk:pt-[110px] tab:pt-[51px] desk:px-[85px] tab:px-[55px] text-light-cream rounded-lg">
            <div className="max-w-[540px] mx-auto mb-[86px]">
                <h2 className="font-fraunces text-[40px] desk:mb-[32px] tab:mb-[11px]">Why choose us?</h2>
                <p>A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.</p>
            </div>
            <div className="relative desk:h-60 tab:h-[300px] mb-[350px] desk:text-center tab:text-start">
                <div className=" absolute flex desk:flex-row tab:flex-col gap-[30px]">
                    {whys.map((why, index) => {
                        return (
                            <div key={index} className=" bg-dark-cyan desk:px-[47px] tab:px-[70px] desk:pb-[48px] desk:pt-0 tab:py-[41px] rounded-[8px] flex desk:flex-col tab:flex-row items-center">
                                <img className={`mx-auto desk:w-[83px] tab:w-[56px] desk:mx-0 tab:mr-[55px] ${index === 2?'desk:mb-[67px] desk:mt-[83px]':'desk:mb-[56px] desk:mt-[72px]'} `} src={why.img}/>
                                <div>
                                    <h4 className="font-fraunces text-[24px] desk:mb-[24px] tab:mb-[16px]">
                                        {why.name}
                                    </h4>
                                    <p className="font-barlow">
                                        {why.desc}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* <div className="flex gap-[30px]">
                {whys.map((why, index) => {
                    return (
                        <div key={index} className=" bg-dark-cyan px-[47px] pb-[48px]">
                            <img className={`mx-auto w-[83px] ${index === 2?'mb-[67px] mt-[83px]':'mb-[56px] mt-[72px]'} `} src={why.img}/>
                            <h4 className="font-fraunces text-[24px] mb-[24px]">
                                {why.name}
                            </h4>
                            <p className="font-barlow">
                                {why.desc}
                            </p>
                        </div>
                    )
                })}
            </div> */}
        </div>
    )
}

export default HomeWhy