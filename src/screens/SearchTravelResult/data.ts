import { FollowItemProps } from "components/FlowItem";
import { ArticleProps } from "components/Article";

export interface Trip {
    thumbnail: any,
    title: string,
    comments?: string,
    views?: string,
    location?: string,
}

export interface Hotel {
    thumbnail: any,
    title: string,
    rate: string,
    comments: string,
    view: string,
    price: string,
    logo: string
}

export const DATA: Trip[] = [
    {
        thumbnail: require('../../images/thumbnail_16.png'),
        title: 'Landmarks of New York: My one week itinerary',
        comments: '243',
        views: '15.2K'
    },
    {
        thumbnail: require('../../images/thumbnail_16.png'),
        title: 'Reflections on America - New York City',
        comments: '243',
        views: '15.6K'
    }
]
export const DATA_2: Trip[] = [
    {
        thumbnail: require('../../images/thumbnail_17.png'),
        title: 'Havana Central Times Square',
        location: '151 W 46th St, New York, NY 10036'
    },
    {
        thumbnail: require('../../images/img_cover.png'),
        title: 'Empire State Building',
        location: '350 5th Ave, New York, NY 10118'
    },
    {
        thumbnail: require('../../images/img_cover.png'),
        title: 'Empire State Building',
        location: '350 5th Ave, New York, NY 10118'
    }
]

export const DATA_3: Hotel[] = [
    {
        thumbnail: require('../../images/thumbnail_17.png'),
        title: 'Days Hotel Broadway at 94th Street',
        rate: '8.8/10',
        comments: '86',
        view: '3.4 mil',
        price: 'From $20/Night',
        logo: 'airbnb'
    },
    {
        thumbnail: require('../../images/thumbnail_18.png'),
        title: 'Opens in new window',
        rate: '8.4/10',
        comments: '86',
        view: '3.4 mil',
        price: 'From $40/Night',
        logo: 'airbnb'
    },
]

export const DATA_4 = [
    {
        date: 'WE',
        temperature: '84°',
        icon: 'ic_cloudly_fog'
    },
    {
        date: 'TH',
        temperature: '65°',
        icon: 'ic_weather'
    },
    {
        date: 'FR',
        temperature: '74°',
        icon: 'ic_storm'
    },
    {
        date: 'SA',
        temperature: '82°',
        icon: 'ic_strong_wind'
    },
    {
        date: 'SU',
        temperature: '78°',
        icon: 'ic_cloudy'
    },
    {
        date: 'MO',
        temperature: '69°',
        icon: 'ic_morning'
    },
    {
        date: 'TU',
        temperature: '72°',
        icon: 'ic_fog'
    },
]

export const DATA_5: FollowItemProps[] = [
    {
        avatar: require('../../images/img_avatar_10.png'),
        user: 'Viola Thornton',
        followers: 779,
        trips: 37
    },
    {
        avatar: require('../../images/img_avatar_10.png'),
        user: 'VEtta Berry',
        followers: 324,
        trips: 91
    },
    {
        avatar: require('../../images/img_avatar_10.png'),
        user: 'Connor Gilbert',
        followers: 917,
        trips: 91
    },
    {
        avatar: require('../../images/img_avatar_10.png'),
        user: 'Blanche Matthews',
        followers: 172,
        trips: 17
    },
    {
        avatar: require('../../images/img_avatar_10.png'),
        user: 'Charles Butler',
        followers: 359,
        trips: 20
    },
    {
        avatar: require('../../images/img_avatar_10.png'),
        user: 'Isabelle Beck',
        followers: 353,
        trips: 30
    },
    {
        avatar: require('../../images/img_avatar_10.png'),
        user: 'Steven Moreno',
        followers: 479,
        trips: 56
    },
    {
        avatar: require('../../images/img_avatar_10.png'),
        user: 'Viola Thornton',
        followers: 779,
        trips: 37
    },
    {
        avatar: require('../../images/img_avatar_10.png'),
        user: 'Viola Thornton',
        followers: 779,
        trips: 37
    },
    {
        avatar: require('../../images/img_avatar_10.png'),
        user: 'Viola Thornton',
        followers: 779,
        trips: 37
    },
];

export const DATA_6: ArticleProps[] = [
    {
        name: 'Agnes Ingram',
        avatar: require('../../images/img_avatar.png'),
        thumbnail: require('../../images/thumbnail_16.png'),
        title: 'Top Things To See During A Holiday In Hong Kong',
        comments: '243',
        views: '15.2K',
        likes: '3',
        isTrending: true,
        dateTime: 'APR 23, 2018'
    },
    {
        name: 'Harold Kelley',
        avatar: require('../../images/img_avatar.png'),
        thumbnail: require('../../images/thumbnail_15.png'),
        title: 'Will The Democrats Be Able To Reverse The Online Gambling Ban',
        comments: '1K',
        views: '15.2K',
        likes: '2',
        isTrending: true,
        dateTime: 'APR 23, 2018'
    },
    {
        name: 'James Ross',
        avatar: require('../../images/img_avatar.png'),
        thumbnail: require('../../images/thumbnail_16.png'),
        title: 'Will The Democrats Be Able To Reverse The Online Gambling Ban',
        comments: '1K',
        views: '15.2K',
        likes: '20',
        isTrending: false,
        dateTime: 'APR 23, 2018'
    },
]