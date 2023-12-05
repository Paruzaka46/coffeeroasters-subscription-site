import { useMediaQuery } from "react-responsive"

const HomeHow = () => {
    const isNotMobile = useMediaQuery({query: '(min-width: 426px)'})

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
        <div className="desk:mx-[165px] tab:mx-[40px] mobile:mx-[24px] tab:text-start mobile:text-center">
            <h4 className="text-grey text-[24px] desk:mb-[174px] tab:mb-[119px] mobile:mb-[80px] font-fraunces">How it works</h4>
            {/* <div className="flex">
                {hows.map((how,index) => {
                    return (
                        <div>
                            <svg className="" xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                <circle cx="15.5" cy="15.5" r="14.5" fill="#FEFCF7" stroke="#0E8784" stroke-width="2"/>
                            </svg>
                        </div>
                    )
                })}
            </div> */}
            <div className="flex tab:flex-row mobile:flex-col tab:gap-0 mobile:gap-[56px]">
                {hows.map((how, index) => {
                    return (
                        <div className="w-[auto]">
                            {isNotMobile && <div className="relative flex items-center desk:-top-[78px] tab:-top-[48px]">
                                <svg className="" xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                    <circle cx="15.5" cy="15.5" r="14.5" fill="#FEFCF7" stroke="#0E8784" stroke-width="2"/>
                                </svg>
                            <div className={`w-full h-1 ${index < 2?'bg-pale-orange':'bg-white'} `}></div>
                            </div>}
                            {/* <div className="relative flex items-center desk:-top-[78px] tab:-top-[48px]">
                                <svg className="" xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                    <circle cx="15.5" cy="15.5" r="14.5" fill="#FEFCF7" stroke="#0E8784" stroke-width="2"/>
                                </svg>
                            <div className={`w-full h-1 ${index < 2?'bg-pale-orange':'bg-white'} `}></div>
                            </div> */}
                            <h2 className="text-[72px] font-fraunces tab:mb-[38px] mobile:mb-[24px] text-pale-orange">
                                {how.number}
                            </h2>
                            <h4 className="font-fraunces desk:text-[32px] mobile:text-[28px] text-dark-grey-blue tab:mb-[42px] mobile:mb-[24px] tab:max-w-[255px] tab:mx-0 mobile:mx-auto desk:pr-0 tab:pr-[15px]">
                                {how.step}
                            </h4>
                            <p className="text-grey font-barlow desk:pr-[95px] tab:pr-[10px] desk:text-[16px] tab:text-[15px]">
                                {how.desc}
                            </p>
                        </div>
                    )
                })}
            </div>
            <button className="font-fraunces text-[18px] px-[31px] py-[15px] bg-dark-cyan text-light-cream rounded-[6px] desk:mt-[64px] tab:mt-[44px] mobile:mt-[79px] desk:mb-[216px] tab:mb-[144px] mobile:mb-[120px]">Create your plan</button>
        </div>
    )
}

export default HomeHow