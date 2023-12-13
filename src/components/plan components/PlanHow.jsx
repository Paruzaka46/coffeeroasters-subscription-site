import { useMediaQuery } from "react-responsive"

const PlanHow = () => {
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
        <div className="desk:mx-[80px] px-[24px] desk:px-[85px] py-[80px] bg-plan-step-mob tab:bg-plan-step-tab desk:bg-plan-step-desk bg-cover tab:text-start mobile:text-center mb-[120px] desk:mb-[165px] desk:rounded-[10px]">
            <div className="flex tab:flex-row mobile:flex-col tab:gap-0 mobile:gap-[56px] desk:mt-[80px]">
                {hows.map((how, index) => {
                    return (
                        <div key={index} className="w-[auto]">
                            {isNotMobile && <div className="relative flex items-center desk:-top-[78px] tab:-top-[48px]">
                                <svg className="" xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                    <circle cx="15.5" cy="15.5" r="14.5" fill="#FEFCF7" stroke="#0E8784" strokeWidth="2"/>
                                </svg>
                            <div className={`w-full h-1 ${index < 2?'bg-pale-orange':' bg-transparent'} `}></div>
                            </div>}

                            <h2 className="text-[72px] font-fraunces tab:mb-[38px] leading-[72px] mobile:mb-[24px] text-pale-orange">
                                {how.number}
                            </h2>
                            <h4 className="font-fraunces desk:text-[32px] mobile:text-[28px] text-white tab:mb-[42px] mobile:mb-[24px] tab:max-w-[255px] tab:mx-0 mobile:mx-auto desk:pr-0 tab:pr-[25px]">
                                {how.step}
                            </h4>
                            <p className="text-grey font-barlow desk:pr-[95px] tab:pr-[10px] desk:text-[16px] tab:text-[15px]">
                                {how.desc}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default PlanHow