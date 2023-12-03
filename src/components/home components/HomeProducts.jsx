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
        <div className="relative mx-[165px]">
            <div className="absolute font-fraunces bg-gradient-to-b from-black/50 to-light-cream text-transparent text-[155px] w-[95%] mx-[2.5%] bg-clip-text -z-10">our collection</div>
            <div className="flex justify-between mb-[190px]">
                {coffees.map((coffee, index) => {
                    return (
                        <div className="text-center max-w-[255px]" key={index}>
                            <img className="mb-[70px] mt-[126px]" src={coffee.img}/>
                            <h4 className="mb-[24px] text-[24px] text-dark-grey-blue font-fraunces">
                                {coffee.name}
                            </h4>
                            <p className="font-barlow">
                                {coffee.desc}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HomeProducts