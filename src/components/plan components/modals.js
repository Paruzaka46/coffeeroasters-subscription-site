const modals = [
    {
        question: 'How do you drink your coffee?',
        name: 'preferences',
        choices: [
            {
                value: 'capsule_1',
                title: 'Capsule',
                desc: 'Compatible with Nespresso systems and similar brewers.'
            },
            {
                value: 'filter_1',
                title: 'Filter',
                desc: 'For pour over or drip methods like Aeropress, Chemex, and V60.'
            },
            {
                value: 'espresso_1',
                title: 'Espresso',
                desc: 'Dense and finely ground beans for an intense, flavorful experience.'
            }
        ]
    },
    {
        question: 'What type of coffee?',
        name: 'beanType',
        choices: [
            {
                value: 'ingleOrigin_2',
                title: 'Single origin',
                desc: 'Distinct, high quality coffee from a specific family-owned farm.'
            },
            {
                value: 'decaf_2',
                title: 'Decaf',
                desc: 'Just like regular coffee, except the caffeine has been removed.'
            },
            {
                value: 'blended_2',
                title: 'Blended',
                desc: 'Combination of two or three dark roasted beans of organic coffees.'
            }
        ]
    },
    {
        question: 'How much would you like?',
        name: 'quantity',
        choices: [
            {
                value: '250g_3',
                title: '250g',
                desc: 'Perfect for the solo drinker. Yields about 12 delicious cups.'
            },
            {
                value: '500g_3',
                title: '500g',
                desc: 'Perfect option for a couple. Yields about 40 delectable cups.'
            },
            {
                value: '1000g_3',
                title: '1000g',
                desc: 'Perfect for offices and events. Yields about 90 delightful cups.'
            }
        ]
    },
    {
        question: 'Want us to grind them?',
        name: 'grindOption',
        choices: [
            {
                value: 'wholebean_4',
                title: 'Wholebean',
                desc: 'Best choice if you cherish the full sensory experience.'
            },
            {
                value: 'filter_4',
                title: 'Filter',
                desc: 'For drip or pour-over coffee methods such as V60 or Aeropress.'
            },
            {
                value: 'cafetiere_4',
                title: 'Cafetiére',
                desc: 'Course ground beans specially suited for french press coffee.'
            }
        ]
    },
    {
        question: 'How often should we deliver?',
        name: 'deliveries',
        choices: [
            {
                value: 'everyWeek_5',
                title: 'Every week',
                desc: '$14.00 per shipment. Includes free first-class shipping.'
            },
            {
                value: 'every2Weeks_5',
                title: 'Every 2 weeks',
                desc: '$17.25 per shipment. Includes free priority shipping.'
            },
            {
                value: 'everyMonth_5',
                title: 'Every month',
                desc: '$22.50 per shipment. Includes free priority shipping.'
            }
        ]
    },
]

export default modals