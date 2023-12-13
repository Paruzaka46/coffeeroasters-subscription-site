const HomeWhy = () => {
    const whys = [
        {
            name: 'Best quality',
            desc: 'Discover an endless variety of the world’s best artisan coffee from each of our roasters.',
            img: '/assets/home/desktop/icon-coffee-bean.svg'
        },
        {
            name: 'Exclusive benefits',
            desc: 'Special offers and swag when you subscribe, including 30% off your first shipment.',
            img: '/assets/home/desktop/icon-gift.svg'
        },
        {
            name: 'Free shipping',
            desc: 'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.',
            img: '/assets/home/desktop/icon-truck.svg'
        }
    ]

    return (
        <div className="desk:mx-[80px] tab:mx-[40px] mobile:mx-[24px] desk:text-[16px] mobile:text-[15px] bg-dark-grey-blue text-center desk:pt-[110px] tab:pt-[51px] mobile:pt-[64px] desk:px-[85px] tab:px-[55px] mobile:px-[24px] text-light-cream rounded-lg">
            <div className="max-w-[540px] mx-auto tab:mb-[86px] mobile:mb-[64px]">
                <h2 className="font-fraunces tab:text-[40px] mobile:text-[28px] desk:mb-[32px] tab:mb-[11px] mobile:mb-[24px]">Why choose us?</h2>
                <p>A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.</p>
            </div>
            <div className="relative desk:h-60 tab:h-[300px] mobile:h-[600px] desk:mb-[350px] tab:mb-[500px] mobile:mb-[720px] desk:text-center tab:text-start">
                <div className=" absolute flex desk:flex-row mobile:flex-col gap-[30px]">
                    {whys.map((why, index) => {
                        return (
                            <div key={index} className=" bg-dark-cyan desk:px-[47px] tab:px-[70px] mobile:px-[12px] desk:pb-[48px] desk:pt-0 tab:py-[41px] rounded-[8px] flex desk:flex-col tab:flex-row mobile:flex-col items-center">
                                <img className={`mx-auto desk:w-[83px] tab:w-[56px] desk:mx-0 tab:mr-[55px] tab:mb-0 tab:mt-0 ${index === 2?'desk:mb-[67px] desk:mt-[83px] mobile:mb-[67px] mobile:mt-[83px]':'desk:mb-[56px] desk:mt-[72px] mobile:mb-[56px] mobile:mt-[72px]'} `} src={why.img}/>
                                <div>
                                    <h4 className="font-fraunces text-[24px] desk:mb-[24px] tab:mb-[16px] mobile:mb-[24px]">
                                        {why.name}
                                    </h4>
                                    <p className="font-barlow tab:mb-0 mobile:mb-[51px]">
                                        {why.desc}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default HomeWhy