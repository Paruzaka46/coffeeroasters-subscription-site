const HomeProducts = () => {
    const coffees = [
        {
            name: 'Gran Espresso',
            desc: 'Light and flavorful blend with cocoa and black pepper for an intense experience.',
            img: 'assets/home/desktop/image-gran-espresso.png'
        },
        {
            name: 'Planalto',
            desc: 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.',
            img: 'assets/home/desktop/image-planalto.png'
        },
        {
            name: 'Piccollo',
            desc: 'Mild and smooth blend featuring notes of toasted almond and dried cherry.',
            img: 'assets/home/desktop/image-piccollo.png'
        },
        {
            name: 'Danche',
            desc: 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes.',
            img: 'assets/home/desktop/image-danche.png'
        }
    ]

    return (
        <div className="relative desk:mx-[165px] tab:mx-[40px]">
            <div className="absolute font-fraunces bg-gradient-to-b from-black/50 to-light-cream text-transparent desk:text-[155px] tab:text-[96px] desk:w-[95%] desk:mx-[2.5%] bg-clip-text -z-10">our collection</div>
            <div className="flex desk:flex-row tab:flex-col desk:justify-between tab:items-center mb-[190px] desk:px-0 tab:px-[58px] desk:pt-0 tab:pt-[85px] desk:gap-0 tab:gap-[32px]">
                {coffees.map((coffee, index) => {
                    return (
                        <div className="desk:text-center flex desk:flex-col tab:flex-row items-center desk:max-w-[255px] desk:gap-0 tab:gap-9" key={index}>
                            <img className="desk:mb-[70px] desk:mt-[126px] desk:w-auto tab:w-[255px] desk:mr-0" src={coffee.img}/>
                            <div >
                                <h4 className="mb-[24px] text-[24px] text-dark-grey-blue font-fraunces">
                                    {coffee.name}
                                </h4>
                                <p className="font-barlow">
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