import { useMediaQuery } from "react-responsive"

const AboutQuality = () => {
    const islaptop = useMediaQuery({query: '(min-width: 769px)'})
    const isTab = useMediaQuery({query: '(min-width: 426px)'})

    return (
        <div className="relative mx-[24px] tab:mx-[40px] desk:mx-[80px] px-[24px] desk:px-[85px] pt-[143px] tab:pt-[225px] desk:py-0 desk:pb-0 pb-[60px] bg-quality-mobile tab:bg-quality-tab desk:bg-quality-desktop bg-cover flex flex-col desk:flex-row-reverse desk:justify-between rounded-[10px] mb-[120px] tab:mb-[144px] desk:mb-[165px]">
            <div className="absolute desk:relative tab:bottom-[200px] -top-[78px] tab:-top-[160px] desk:-top-[80px] w-full desk:w-auto left-0 overflow-hidden object-center">
                <img className="rounded-[10px] mx-auto desk:mx-0 max-w-[280px] tab:max-w-none" src={islaptop?'/assets/about/desktop/image-quality.jpg':
                isTab?'/assets/about/tablet/image-quality.jpg':'/assets/about/mobile/image-quality.jpg'}/>
            </div>
            <div className="flex flex-col gap-[24px] desk:pt-[85px] text-light-cream text-center desk:max-w-[540px]">
                <h2 className="font-fraunces text-[28px] tab:text-[32px] desk:text-[40px] leading-[28px] tab:leading-[48px]">Uncompromising quality</h2>
                <p className="font-barlow text-[15px] desk:text-[16px] leading-[25px] desk:leading-[26px] text-light-cream/80">Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
            </div>
        </div>
    )
}

export default AboutQuality