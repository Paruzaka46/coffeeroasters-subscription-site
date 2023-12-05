const HomeProducts = () => {
    const coffees = [
        {
            name: 'Gran Espresso',
            desc: 'Light and flavorful blend with cocoa and black pepper for an intense experience.',
            img: '/assets/home/desktop/image-gran-espresso.png'
        },
        {
            name: 'Planalto',
            desc: 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.',
            img: '/assets/home/desktop/image-planalto.png'
        },
        {
            name: 'Piccollo',
            desc: 'Mild and smooth blend featuring notes of toasted almond and dried cherry.',
            img: '/assets/home/desktop/image-piccollo.png'
        },
        {
            name: 'Danche',
            desc: 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes.',
            img: '/assets/home/desktop/image-danche.png'
        }
    ]

    return (
        <div className="relative desk:mx-[165px] tab:mx-[40px]">
            <div className="absolute font-fraunces bg-gradient-to-b from-black/50 to-light-cream text-transparent desk:text-[145px] tab:text-[86px] mobile:text-[40px] desk:w-[95%] desk:mx-[2.5%] mobile:w-full tab:px-0 text-center mobile:px-[10%] tab:mx-0 bg-clip-text -z-10">our collection</div>
            <div className="flex desk:flex-row mobile:flex-col desk:justify-between tab:items-center tab:mb-[190px] mobile:mb-[120px] desk:px-0 tab:px-[58px] desk:pt-0 mobile:pt-[85px]  desk:gap-0 tab:gap-[32px] mobile:gap-[48px]">
                {coffees.map((coffee, index) => {
                    return (
                        <div className="desk:text-center tab:text-start mobile:text-center flex desk:flex-col tab:flex-row mobile:flex-col items-center desk:max-w-[255px] desk:gap-0 tab:gap-9" key={index}>
                            <img className="desk:mb-[70px] tab:mb-0 mobile:mb-[24px] desk:mt-[126px] desk:w-auto tab:w-[255px] mobile:w-[200px] desk:mr-0" src={coffee.img}/>
                            <div className="text-dark-grey-blue">
                                <h4 className="tab:mb-[24px] mobile:mb-[16px] text-[24px]  font-fraunces">
                                    {coffee.name}
                                </h4>
                                <p className="font-barlow tab:w-auto mobile:w-[282px]">
                                    {coffee.desc}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HomeProducts