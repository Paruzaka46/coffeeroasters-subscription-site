import { useState, useEffect } from "react"
import { useMediaQuery } from "react-responsive"
import { Link } from 'react-router-dom'
import modals from "./modals"

const PlanPick = () => {
    const isNotMobile = useMediaQuery({query: '(min-width: 426px)'})
    const islaptop = useMediaQuery({query: '(min-width: 769px)'})

    const [pick, setPick] = useState({
        preferences: {
            val: '',
            title:'',
            open: false
        },
        beanType: {
            val: '',
            title:'',
            open: false
        },
        quantity: {
            val: '',
            title:'',
            open: false
        },
        grindOption: {
            val: '',
            title:'',
            open: false
        },
        deliveries: {
            val: '',
            title:'',
            open: false
        },
    })

    const [showSummary, setShowSummary] = useState(false)
    const [price, setPrice] = useState(0)

    useEffect(() => {
        if (pick.preferences.title === "Capsule") {
            setPick(prev => (
                {
                    ...prev,
                    grindOption: {
                        val: '',
                        title: '',
                        open: false
                    }
                } 
            ))
        }
    }, [pick.grindOption])

    useEffect(() => {
        if (pick.quantity.title === "250g") {  
            setPrice(() => {
                if (pick.deliveries.title === "Every week") {
                    return (28.8)
                } if (pick.deliveries.title === "Every 2 weeks") {
                    return (19.2)
                } if (pick.deliveries.title === "Every month") {
                    return (12)
                }
            }) 
        } if (pick.quantity.title === "500g") {
            setPrice(() => {
                if (pick.deliveries.title === "Every week") {
                    return (52)
                } if (pick.deliveries.title === "Every 2 weeks") {
                    return (35)
                } if (pick.deliveries.title === "Every month") {
                    return (22)
                }
            })
        } if (pick.quantity.title === "1000g") {
            setPrice(() => {
                if (pick.deliveries.title === "Every week") {
                    return (88)
                } if (pick.deliveries.title === "Every 2 weeks") {
                    return (64)
                } if (pick.deliveries.title === "Every month") {
                    return (42)
                }
            })
        }

    }, [pick.deliveries, pick.quantity])

    useEffect(() => {
        if (showSummary) {
        window.scrollTo(0, 0);
        document.body.style.overflowY = "hidden";
        } else {
        document.body.style.overflowY = "auto";
        }
    }, [showSummary]);

    const itsCapsule = (
        <div>
            <h4>Order Summary</h4>
            <p>I drink my coffee using <span>Capsules</span>, with a <span>{pick.beanType.title?pick.beanType.title:'_____'}</span> type of bean. <span>{pick.quantity.title?`${pick.quantity.title},`:'_____ ,'}</span> sent to me <span>Every Week</span></p>
        </div>
    )

    const summary1 = (
        <div className="mx-[24px] px-[24px] py-[32px] bg-dark-grey-blue mb-[55px]">
            <h4 className="font-barlow text-[16px] text-white/50 leading-[26px] mb-[8px]">Order Summary</h4>
            <p className="font-fraunces text-[24px] leading-[40px] text-white">
                "
                I drink my coffee {!pick.preferences.title?<>using <span className="text-dark-cyan">_____</span></>:
                pick.preferences.title === "Capsule"?<>using <span className="text-dark-cyan capitalize">Capsules</span></>:
                <>as <span className="text-dark-cyan capitalize">{pick.preferences.title}</span></>} with a <span className="text-dark-cyan capitalize">{pick.beanType.title?pick.beanType.title:'_____'}</span> type of bean. <span className="text-dark-cyan capitalize">{pick.quantity.title?`${pick.quantity.title}`:'_____'}</span>
                {pick.preferences.title === "Capsule" && pick.grindOption.title? <> ground ala <span className="text-dark-cyan capitalize">{pick.grindOption.title}</span></>:pick.preferences.title === "Capsule" && !pick.grindOption.title?'ground ala _____':null}, 

                sent to me <span className="text-dark-cyan capitalize">{pick.deliveries.title?pick.deliveries.title:"_____"}</span>.
                "
            </p>
        </div>
    )

    const summary = (
            <>
                "
                I drink my coffee {!pick.preferences.title?<>using <span className="text-dark-cyan">_____</span></>:
                pick.preferences.title === "Capsule"?<>using <span className="text-dark-cyan capitalize">Capsules</span></>:
                <>as <span className="text-dark-cyan capitalize">{pick.preferences.title}</span></>} with a <span className="text-dark-cyan capitalize">{pick.beanType.title?pick.beanType.title:'_____'}</span> type of bean. <span className="text-dark-cyan capitalize">{pick.quantity.title?`${pick.quantity.title}`:'_____'}</span>
                {pick.preferences.title !== "Capsule" && !pick.grindOption.title? 
                <> ground ala <span className="text-dark-cyan capitalize">_____</span></> 

                :pick.preferences.title !== "Capsule" && pick.grindOption.title? 
                <> ground ala <span className="text-dark-cyan capitalize">{pick.grindOption.title}</span></>:null}, 

                sent to me <span className="text-dark-cyan capitalize">{pick.deliveries.title?pick.deliveries.title:"_____"}</span>.
                "
            </>
        )

    const handleChange = (event, text) => {
        const {value, name} = event.target
        setPick((prev) => {
            if (name === 'preferences') {
                return {
                    ...prev,
                    preferences: {
                        ...prev.preferences,
                        val: value,
                        title: text
                    }
                } 
            } if (name === 'beanType') {
                return {
                    ...prev,
                    beanType: {
                        ...prev.beanType,
                        val: value,
                        title: text
                    }
                }
            } if (name === 'quantity') {
                return {
                    ...prev,
                    quantity: {
                        ...prev.quantity,
                        val: value,
                        title: text
                    }
                }
            } if (name === 'grindOption') {
                return {
                    ...prev,
                    grindOption: {
                        ...prev.grindOption,
                        val: value,
                        title: text
                    }
                }
            } if (name === 'deliveries') {
                return {
                    ...prev,
                    deliveries: {
                        ...prev.deliveries,
                        val: value,
                        title: text
                    }
                }
            }
        })
    }

    const openModal = (event, index) => {
        const {value, name} = event.target
        setPick((prev) => {
            if (index === 0) {
                return {
                    ...prev,
                    preferences: {
                        ...prev.preferences,
                        open: !prev.preferences.open
                    }
                } 
            } if (index === 1) {
                return {
                    ...prev,
                    beanType: {
                        ...prev.beanType,
                        open: !prev.beanType.open
                    }
                }
            } if (index === 2) {
                return {
                    ...prev,
                    quantity: {
                        ...prev.quantity,
                        open: !prev.quantity.open
                    }
                }
            } if (index === 3) {
                return {
                    ...prev,
                    grindOption: {
                        ...prev.grindOption,
                        open: !prev.grindOption.open
                    }
                }
            } if (index === 4) {
                return {
                    ...prev,
                    deliveries: {
                        ...prev.deliveries,
                        open: !prev.deliveries.open
                    }
                }
            }
        })
    }

    return (
        <>
        <div className="flex justify-between desk:mx-[165px] gap-[125px]">
            {islaptop && 
            <ul className="">
                {modals.map((modal, idx) => {
                    return (
                        <li onClick={(event) => {openModal(event, idx)}} className={`flex gap-[28.5px] mb-[49px] w-[255px] ${pick.preferences.title === "Capsule" && idx === 3 ? 'opacity-30':'opacity-70 hover:opacity-90 '} cursor-pointer`} key={idx}>
                            <p className={`font-fraunces text-[24px] leading-[32px] ${modal.number === '01'?'text-dark-cyan':'text-grey'}`}>
                            {modal.number}
                            </p>
                            <p className={`text-dark-grey-blue font-fraunces text-[24px] leading-[32px]`}>
                            {modal.listName}
                            </p>
                        </li>
                    )
                })}
            </ul>}

            <div>
                <div className="mx-[24px] tab:mx-[40px] desk:mx-0 flex flex-col gap-[96px] mb-[120px] tab:mb-[140px]">
                    {modals.map((modal,index) => {
                        return (
                            <div key={index} className={`flex flex-col ${pick.preferences.title === "Capsule" && index === 3?' opacity-50':''}`}>
                                <div onClick={pick.preferences.title === "Capsule" && index === 3?() => {}:(event) => {openModal(event, index)}} className={`flex justify-between items-center ${pick[modal.name].open?'mb-[32px] tab:mb-[40px]':'mb-0'} cursor-pointer transition-all`}>
                                    <h2 className="font-fraunces text-grey text-[24px] tab:text-[32px] leading-[28px] tab:leading-[48px]">{modal.question}</h2>
                                    <img className={`${pick[modal.name].open && 'rotate-180'}`} src="/assets/plan/desktop/icon-arrow.svg"/>
                                </div>
                                
                                <form className={`${pick[modal.name].open?'h-[430px] tab:h-[250px] gap-5':'h-0 overflow-hidden'} transition-all flex flex-col tab:flex-row`}>
                                    {modal.choices.map((choice, i) => {
                                        return (
                                            <div key={i} className={`${pick[modal.name].val === choice.value?'bg-dark-cyan text-white':'bg-[#F4F1EB] text-dark-grey-blue'} hover:bg-pale-orange rounded-[8px] flex basis-full transition-all`}>
                                                <input onChange={(event) => {handleChange(event, choice.title)}} className="hidden w-0 h-0" type="radio" name={modal.name} id={choice.value} value={choice.value}/>
                                                <label className="px-[25px] py-[24px] w-full cursor-pointer" htmlFor={choice.value}>
                                                    <h3 className="font-fraunces text-[24px] leading-[32px] tab:mb-[24px]">
                                                        {choice.title}
                                                    </h3>
                                                    <p className="font-barlow text-[16px] leading-[26px]">{index===4&&pick.quantity.title==="500g"?choice.desc1:index===4&&pick.quantity.title==="1000g"?choice.desc2:choice.desc}</p>
                                                </label>
                                            </div>
                                        )
                                    })}
                                </form>
                            </div>
                        )
                    })}
                </div>

                <div className="mx-[24px] tab:mx-[40px] desk:mx-0 px-[24px] tab:px-[44px] py-[32px] bg-dark-grey-blue mb-[55px] rounded-[8px]">
                    <h4 className="font-barlow text-[16px] text-white/50 leading-[26px] mb-[8px] uppercase">Order Summary</h4>
                    <p className="font-fraunces text-[24px] leading-[40px] text-white">
                        {summary}
                    </p>
                </div>

                <div className="w-full text-center">
                    <button onClick={() => {setShowSummary(true)}} className="px-[35.5px] py-[15px] bg-dark-cyan text-light-cream text-[18px] font-fraunces hover:opacity-60 leading-[25px] mb-[120px] rounded-[6px]">
                        Create my plan!
                    </button>
                </div>
            </div>    
        </div>

        <div className={`absolute ${showSummary?'z-20':'-z-10 hidden'} my-[24px] tab:my-[5%] top-0 mx-[24px] tab:mx-[114px] desk:mx-[30%] bg-white rounded-[8px] overflow-hidden`}>
            <h2 className="py-[28px] tab:py-[48px] px-[24px] tab:px-[56px] bg-dark-grey-blue font-fraunces text-[28px] tab:text-[40px] leading-[32px] tab:leading-[48px] text-white">Order Summary</h2>
            <p className="font-fraunces mt-[38px] tab:mt-[56px] text-[24px] leading-[40px] text-grey px-[24px] tab:px-[56px] mb-[7px]">
               {summary}
            </p>
            <p className="font-barlow text-[15px] leading-[25px] text-dark-grey-blue/80 px-[24px] tab:px-[56px] mb-[24px] tab:mb-[47px]">Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout.</p>
            <div className="text-center mb-[24px] tab:mx-[56px] tab:mb-[56px] tab:flex tab:justify-between tab:items-center">
                {isNotMobile && <h2 className="font-fraunces text-dark-grey-blue text-[32px] leading-[36px]">${price?.toFixed(2)}/mo</h2>}
                <button onClick={() => setShowSummary(false)} className="px-[35.5px] tab:px-[64px] py-[15px] bg-dark-cyan text-light-cream text-[18px] hover:opacity-60 font-fraunces leading-[25px] rounded-[6px]"><Link to="/plan">{isNotMobile?'Checkout':`Checkout-$${price?.toFixed(2)} / mo`}</Link></button>
            </div>
        </div>
        {showSummary && <div className="absolute top-0 bg-black/50 z-10 w-full h-[100vh]"></div>}
        </>
    )
}

export default PlanPick