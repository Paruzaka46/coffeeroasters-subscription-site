import {useMediaQuery} from "react-responsive"

const AboutCommitment = () => {
    const islaptop = useMediaQuery({query: '(min-width: 769px)'})
    const isTab = useMediaQuery({query: '(min-width: 426px)'})

    return (
        <div className="mx-[24px] tab:mx-[40px] desk:mx-[165px] flex flex-col tab:flex-row tab:items-center gap-[46px] desk:gap-[125px] mb-[200px] tab:mb-[300px] desk:mb-[260px]">
            <img className="rounded-[10px]" src={islaptop?'/assets/about/desktop/image-commitment.jpg':
            isTab?'/assets/about/tablet/image-commitment.jpg':'/assets/about/mobile/image-commitment.jpg'}/>
            <div className="flex flex-col gap-[30px] desk:gap-[36px] text-center tab:text-start">
                <h2 className="flex flex-col text-[32px] desk:text-[40px] text-dark-grey-blue font-fraunces leading-[48px] ">Our commitment</h2>
                <p className="text-[15px] desk:text-[16px] leading-[25px] desk:leading-[26px] font-barlow text-dark-grey-blue/80">We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places.We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.</p>
            </div>
        </div>
    )
}

export default AboutCommitment