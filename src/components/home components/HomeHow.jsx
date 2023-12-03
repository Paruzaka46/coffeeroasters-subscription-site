const HomeHow = () => {
    const hows = [
        {   
            number: '01',
            step: 'Pick your coffee',
            desc: 'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.'
        },
        {
            number: '02',
            step: 'Choose your frequency',
            desc: 'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.'
        },
        {
            number: '03',
            step: 'Recieve and enjoy!',
            desc: 'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.'
        },
    ]

    return (
        <div className="mx-[165px]">
            <h4 className="text-grey text-[24px] mb-[95px] font-fraunces">How it works</h4>
            {/* <svg className="mb-[82px]" xmlns="http://www.w3.org/2000/svg" width="761" height="3" viewBox="0 0 761 3" fill="none">
                <path d="M0.5 1.5H760.5" stroke="#FDD6BA" stroke-width="2"/>
            </svg> */}
            <div className="flex gap-[95px]">
                {hows.map((how, index) => {
                    return (
                        <div className="relative">
                            <svg className="absolute -top-[100px]" xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                <circle cx="15.5" cy="15.5" r="14.5" fill="#FEFCF7" stroke="#0E8784" stroke-width="2"/>
                            </svg>                      
                            <h2 className="text-[72px] font-fraunces mb-[38px] text-pale-orange">
                                {how.number}
                            </h2>
                            <h4 className="font-fraunces text-[32px] text-dark-grey-blue mb-[42px] max-w-[255px]">
                                {how.step}
                            </h4>
                            <p className="text-grey font-barlow">
                                {how.desc}
                            </p>
                        </div>
                    )
                })}
            </div>
            <button>Create your plan</button>
        </div>
    )
}

export default HomeHow