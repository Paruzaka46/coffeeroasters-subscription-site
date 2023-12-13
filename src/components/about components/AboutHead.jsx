const AboutHead = () => {
    const headquarters = [
        {
            country: 'United Kingdom',
            address: '68 Asfordby Rd',
            city: 'Alcaston',
            extraInfo: 'SY6 1YA',
            phone: '+44 1241 918425',
            img: '/assets/about/desktop/illustration-uk.svg'
        },
        {
            country: 'Canada',
            address: '1528 Eglinton Avenue',
            city: 'Toronto',
            extraInfo: 'Ontario M4P 1A6',
            phone: '+1 416 485 2997',
            img: '/assets/about/desktop/illustration-canada.svg'
        },
        {
            country: 'Australia',
            address: '36 Swanston Street',
            city: 'Kewell',
            extraInfo: 'Victoria',
            phone: '+61 4 9928 3629',
            img: '/assets/about/desktop/illustration-canada.svg'
        }
    ]

    return (
        <div className="mx-[24px] tab:mx-[40px] desk:mx-[165px] text-center tab:text-start mb-[120px] tab:mb-[144px] desk:mb-[168px]">
            <h3 className="text-grey font-fraunces text-[24px] mb-[72px] leading-[32px]">Our headquarters</h3>
            <div className="flex flex-col tab:flex-row gap-[80px] tab:gap-0 tab:justify-between ">
                {headquarters.map((head, index) => {
                    return (
                        <div key={index} className="flex flex-col items-center tab:items-start grow">
                            <img className="mb-[47px]" src={head.img}/>
                            <h2 className="font-fraunces text-dark-grey-blue text-[28px] tab:text-[24px] desk:text-[32px] desk:leading-[36px] mb-[22px]">
                                {head.country}
                            </h2>
                            <div className="text-[16px] leading-[26px] font-barlow text-grey">
                                <p>{head.address}</p>
                                <p>{head.city}</p>
                                <p>{head.extraInfo}</p>
                                <p>{head.phone}</p>
                            </div>
                            
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AboutHead