export interface Hotel {
    thumbnail: string,
    title: string,
    rate: string,
    comments: string,
    view: string,
    price: string,
    logo: string
}

export const DATA: Hotel[] = [
    {
        thumbnail: 'thumbnail_17',
        title: 'Hotel Broadway at 94th Street',
        rate: '8.8/10',
        comments: '86',
        view: '3.4 mil',
        price: 'From $20/Night',
        logo: 'airbnb'
    },
    {
        thumbnail: 'thumbnail_18',
        title: 'Opens in new window',
        rate: '8.4/10',
        comments: '86',
        view: '3.4 mil',
        price: 'From $40/Night',
        logo: 'booking'
    },
]

const DATA_2: Hotel[] = [
    {
        thumbnail: 'thumbnail_17',
        title: 'Hotel Broadway at 94th Street',
        rate: '8.8/10',
        comments: '86',
        view: '3.4 mil',
        price: 'From $20/Night',
        logo: 'agoda'
    },
    {
        thumbnail: 'thumbnail_18',
        title: 'Opens in new window',
        rate: '8.4/10',
        comments: '86',
        view: '3.4 mil',
        price: 'From $40/Night',
        logo: 'expedia'
    },
]

export const SECTION = [
    {
        name: 'Empire State Building',
        address: '350 5th Ave, New York, NY 10118',
        data: DATA
    },
    {
        name: 'Havana Central Times Square',
        address: '151 W 46th St, New York, NY 10036',
        data: DATA_2
    },
    {
        name: 'Central Park',
        address: '5th Avenue, New York City, NY 10022',
        data: DATA_2
    },
    {
        name: 'The Empire Hotel',
        address: '44 W 63rd St, New York, NY 10023',
        data: DATA
    },
]