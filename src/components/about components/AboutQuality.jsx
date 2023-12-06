import { useMediaQuery } from "react-responsive"

const AboutQuality = () => {
    const islaptop = useMediaQuery({query: '(min-width: 769px)'})
    const isTab = useMediaQuery({query: '(min-width: 426px)'})

    return (
        <div className="relative mx-[24px] tab:mx-[40px] px-[24px] pt-[143px] tab:pt-[225px] pb-[60px] bg-quality-mobile rounded-[10px] mb-[120px] tab:mb-[144px]">
            <div className="absolute tab:bottom-[200px] -top-[78px] tab:-top-[160px] w-full left-0 overflow-hidden object-center">
                <img className="rounded-[10px] mx-auto max-w-[280px] tab:max-w-none" src={islaptop?'/assets/about/desktop/image-quality.jpg':
                isTab?'/assets/about/tablet/image-quality.jpg':'/assets/about/mobile/image-quality.jpg'}/>
            </div>
            {/* <img className="relative bottom-[78px] tab:bottom-[200px] rounded-[10px] mx-auto" src={islaptop?'/assets/about/desktop/image-quality.jpg':
            isTab?'/assets/about/tablet/image-quality.jpg':'/assets/about/mobile/image-quality.jpg'}/> */}
            <div className="flex flex-col gap-[24px] text-light-cream text-center">
                <h2 className="font-fraunces text-[28px] tab:text-[32px] leading-[28px] tab:leading-[48px]">Uncompromising quality</h2>
                <p className="font-barlow text-[15px] leading-[25px] text-light-cream/80">Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
            </div>
        </div>
    )
}

export default AboutQuality