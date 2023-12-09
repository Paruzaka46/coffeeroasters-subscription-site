import { useState, useEffect } from "react"
import modals from "./modals"

const PlanPick = () => {
    // const [pick, setPick] = useState({
    //     preferences: '',
    //     beanType: '',
    //     quantity: '',
    //     grindOption: '',
    //     deliveries: ''
    // })

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

    const itsCapsule = (
        <div>
            <h4>Order Summary</h4>
            <p>I drink my coffee using <span>Capsules</span>, with a <span>{pick.beanType.title?pick.beanType.title:'_____'}</span> type of bean. <span>{pick.quantity.title?`${pick.quantity.title},`:'_____ ,'}</span> sent to me <span>Every Week</span></p>
        </div>
    )

    // const handleClick = () => {
    //     const {value, name} = event.target
    //     console.log([value, name])
    //     setPick((prev) => {
    //         if (name === 'preferences') {
    //             return {
    //                 ...prev,
    //                 preferences: value,
    //             }
    //         } if (name === 'beanType') {
    //             return {
    //                 ...prev,
    //                 beanType: value
    //             }
    //         } if (name === 'quantity') {
    //             return {
    //                 ...prev,
    //                 quantity: value
    //             }
    //         } if (name === 'grindOption') {
    //             return {
    //                 ...prev,
    //                 grindOption: value
    //             }
    //         } if (name === 'deliveries') {
    //             return {
    //                 ...prev,
    //                 deliveries: value
    //             }
    //         }
    //     })
    // }

    const handleChange = (event, text) => {
        const {value, name} = event.target
        console.log([value, name, text])
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
        console.log([value, name])
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

    console.log(pick)

    return (
        <div>
            <div className="capitalize">

            </div>

            <div className="mx-[24px] flex flex-col gap-[96px]">
                {modals.map((modal,index) => {
                    return (
                        <div key={index} className="flex flex-col">
                            <div onClick={(event) => {openModal(event, index)}} className={`flex justify-between items-center ${pick[modal.name].open?'mb-[32px]':'mb-0'} transition-all`}>
                                <h2 className="font-fraunces text-grey text-[24px] leading-[28px]">{modal.question}</h2>
                                <img className={`${pick[modal.name].open && 'rotate-180'}`} src="/assets/plan/desktop/icon-arrow.svg"/>
                            </div>
                            
                            <form className={`${pick[modal.name].open?'h-[430px] gap-5':'h-0 overflow-hidden'} transition-all flex flex-col`}>
                                {modal.choices.map((choice, index) => {
                                    return (
                                        <div key={index} className={`${pick[modal.name].val === choice.value?'bg-dark-cyan text-white':'bg-[#F4F1EB] text-dark-grey-blue'} rounded-[8px] flex`}>
                                            <input onChange={(event) => {handleChange(event, choice.title)}} className="hidden w-0 h-0" type="radio" name={modal.name} id={choice.value} value={choice.value}/>
                                            <label className="px-[25px] py-[24px] w-full cursor-pointer" htmlFor={choice.value}>
                                                <h3 className="font-fraunces text-[24px] leading-[32px]">
                                                    {choice.title}
                                                </h3>
                                                <p className="font-barlow text-[16px] leading-[26px]">{choice.desc}</p>
                                            </label>
                                        </div>
                                    )
                                })}
                            </form>
                        </div>
                    )
                })}
            </div>

            <div>
                {itsCapsule}
            </div>
        </div>
    )
}

export default PlanPick