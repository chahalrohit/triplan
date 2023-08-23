export const DATA_RECENT = ['Hotel', 'Restaurant'];
export const DATA_RECENT_2 = ['New York', 'San Joe'];

export interface Search {
    name: string,
    type1: string,
    type2: string
};

export const DATA: Search[] = [
    {
        name: 'Algiers Coffe House',
        type1: 'Drink',
        type2: 'Café'
    },
    {
        name: 'Pavement Coffehouse',
        type1: 'Shopping',
        type2: 'Food'
    },
    {
        name: "Polaris's Coffee",
        type1: 'Drink',
        type2: 'Café'
    },
    {
        name: 'Voltage Coffee & Art',
        type1: 'Drink',
        type2: 'Café'
    },
    {
        name: "Zume's Coffee House",
        type1: 'Drink',
        type2: 'Café'
    },
    {
        name: 'Area Four',
        type1: 'Drink',
        type2: 'Café'
    },
    {
        name: 'Boxer Hotel',
        type1: 'Drink',
        type2: 'Café'
    },
    {
        name: 'Seaport Boston Hotel',
        type1: 'Drink',
        type2: 'Café'
    },
];

export const SECTION_DATA = [
    {
        title: '',
        data: [
            {
                icon: 'ic_bag',
                searchVal: 'Trips for New York'
            },
            {
                icon: 'ic_sleep',
                searchVal: 'Place to Visit for New York'
            },
            {
                icon: 'ic_article_place',
                searchVal: 'Trips for New York'
            },
            {
                icon: 'tab_guide_inactive',
                searchVal: 'City Guide for New York'
            },
        ]
    },
    {
        title: 'Place',
        data: [
            {
                icon: 'ic_article_place',
                searchVal: 'New York Public Library, New York City'
            },
            {
                icon: 'ic_article_place',
                searchVal: 'New York Fries, Vancouver'
            },
            {
                icon: 'ic_article_place',
                searchVal: 'New York Slice, New Delhi'
            },
        ]
    },
    {
        title: 'Trip',
        data: [
            {
                icon: 'ic_bag',
                searchVal: 'New York! New York!'
            },
            {
                icon: 'ic_bag',
                searchVal: 'A Solo Trip To New York City'
            },
            {
                icon: 'ic_bag',
                searchVal: 'The 15 Non-Touristy Things We Did in…'
            },
        ]
    },
    {
        title: 'Collection',
        data: [
            {
                icon: 'tab_collection_inactive',
                searchVal: 'New York! New York!'
            },
            {
                icon: 'tab_collection_inactive',
                searchVal: 'A Solo Trip To New York City'
            },
        ]
    },
]