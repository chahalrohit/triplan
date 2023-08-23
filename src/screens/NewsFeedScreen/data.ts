import { ArticleProps } from "components/Article";

const DATA: ArticleProps[] = [
    {
        name: 'Agnes Ingram',
        avatar: require('../../images/img_avatar.png'),
        thumbnail: require('../../images/thumbnail.png'),
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
        thumbnail: require('../../images/thumbnail_1.png'),
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
        thumbnail: require('../../images/thumbnail_2.png'),
        title: 'Will The Democrats Be Able To Reverse The Online Gambling Ban',
        comments: '1K',
        views: '15.2K',
        likes: '20',
        isTrending: false,
        dateTime: 'APR 23, 2018'
    },
]

export default DATA;