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
        <div className="mx-[80px] bg-dark-grey-blue text-center pt-[110px] px-[85px] text-light-cream">
            <div className="max-w-[540px] mx-auto mb-[86px]">
                <h2 className="font-fraunces text-[40px] mb-[32px]">Why choose us?</h2>
                <p>A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.</p>
            </div>
            <div className="relative h-60 mb-[350px]">
                <div className=" absolute flex gap-[30px]">
                    {whys.map((why, index) => {
                        return (
                            <div key={index} className=" bg-dark-cyan px-[47px] pb-[48px] rounded-[8px]">
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