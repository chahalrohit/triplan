import {ArticleProps} from 'components/Article';

const DATA_TRIP_DETAIL_DAY_1 = [
  {
    type: 'description',
    content:
      'I assume that the dubious pleasure of living right at the airport the biggest drawbacks is closed on holiday flight ungodly hours a day.',
  },
  {
    type: 'location',
    content: {
      name: 'Empire State Building',
      address: '350 5th Ave, New York, NY 10118',
    },
  },
  {
    type: 'description',
    content: `I'd never been here before which I thought was weird since I've been to NYC so many times. The view really is great, even on a cold/cloudy/windy day.\n\nThe Empire State Building is fully ADA compliant. We have handicapped restrooms on the 86th Floor Observatory and also have lowered viewing walls and binoculars. Service dogs are allowed throughout the building. Motorized and non-motorized wheelchairs are permitted. The 86th Floor has ramps to make getting around easier and lowered viewing walls so that visitors in chairs can still take in the view.`,
  },
  {
    type: 'image',
    content: {
      image: 'thumbnail_22',
      title: 'Old tower New York…',
    },
    props: {
      needPadding: false,
      onPressImage: false,
    },
  },
  {
    type: 'image',
    content: {
      image: 'thumbnail_20',
      title:
        'Empire State Building and skyscrapers with lights at night in New York City',
    },
    props: {
      needPadding: true,
      onPressImage: true,
    },
  },
  {
    type: 'image',
    content: {
      image: 'thumbnail_22',
      title: '',
    },
    props: {
      needPadding: false,
      onPressImage: false,
    },
  },
  {
    type: 'location',
    content: {
      name: 'Havana Central Times Square',
      address: '151 W 46th St, New York, NY 10036',
    },
  },
  {
    type: 'description',
    content: `This is a Single-Family Home located at 10 Hammond Plaza, Beacon, NY. 10 Hammond Plz has 3 beds, 1 ½ bath, and approximately 1,282 square feet. The property has a lot size of 3,485 sqft and was built in 1974.
        \nThe average list price for similar homes for sale is $186,620. 10 Hammond Plz is in the 12508 ZIP code in Beacon, NY. The average list price for ZIP code 12508 is $302,521.`,
  },
  {
    type: 'list',
    content: [
      'thumbnail_16',
      'thumbnail_17',
      'thumbnail_18',
      'thumbnail_19',
      'thumbnail_20',
      'thumbnail_16',
      'thumbnail_17',
      'thumbnail_18',
      'thumbnail_19',
    ],
  },
];

const DATA_TRIP_DETAIL_DAY_2 = [
  {
    type: 'description',
    content: `New York City is larger than life: in population, in square feet (think of the five boroughs), in culture and food, in arts and entertainment. Visitors to New York have the world at their fingertips, from Uptown to Downtown and beyond. There’s so much to do and see, no two visits will ever be quite the same.
        \nWhether it’s your first visit to Gotham or your fifteenth, these top things to do in New York capture the energy, spirit and style of the city.`,
  },
  {
    type: 'location',
    content: {
      name: 'Central Park',
      address: '5th Avenue, New York City, NY 10022',
    },
  },
  {
    type: 'description',
    content: `This is probably the ONLY place I make a point to visit every time I come to New York. It really is one of the most gorgeous parks. Great views from the random rocks.`,
  },
  {
    type: 'image',
    content: {
      image: 'thumbnail_23',
      title: 'Central Park viewport.',
    },
    props: {
      needPadding: false,
      onPressImage: false,
    },
  },
  {
    type: 'image',
    content: {
      image: 'thumbnail_24',
      title: 'The Green Lake in Central Park.',
    },
    props: {
      needPadding: false,
      onPressImage: false,
    },
  },
  {
    type: 'location',
    content: {
      name: 'The Empire Hotel',
      address: '44 W 63rd St, New York, NY 10023',
    },
  },
  {
    type: 'image',
    content: {
      image: 'thumbnail_25',
      title: '',
    },
    props: {
      needPadding: false,
      onPressImage: false,
    },
  },
  {
    type: 'description',
    content: `Not sure why but I really love this hotel. It's got a really good location on the Upper West Side and isn't too far from anything. Two blocks to Central Park. Cool atmosphere.`,
  },
];

const DATA_TRIP_DETAIL_DAY_3 = [
  {
    type: 'description',
    content: `Always a buzz of activity, this stately building is one of my favorite places in all of New York.
        \nNot only is it fascinating to stop and watch all the comings and goings, but the structure itself is simply spectacular, with its ornate chandeliers and soaring zodiac ceiling.`,
  },
  {
    type: 'location',
    content: {
      name: 'Lower Manhattan',
      address: '5th Avenue, New York City, NY 10022',
    },
  },
  {
    type: 'description',
    content: `One of the most expensive corners of the world, talking a walk along the bustling wall street and Broadway is an experience in itself. 14 Wall Street houses world's tallest bank building (539 foot high sky scraper, orignially housed under the head quarters of Bankers Trust). this bank is among USA s wealthiest financial institutions.`,
  },
  {
    type: 'list',
    content: [
      'thumbnail_16',
      'thumbnail_17',
      'thumbnail_18',
      'thumbnail_19',
      'thumbnail_20',
      'thumbnail_16',
      'thumbnail_17',
      'thumbnail_18',
      'thumbnail_19',
    ],
  },
  {
    type: 'location',
    content: {
      name: `St. Patrick's Cathedral`,
      address: '5th Ave, New York, NY 10022',
    },
  },
  {
    type: 'description',
    content: `An architectural gem, The cathedral, which can accommodate 3,000 people, is built of brick clad in marble, quarried in Massachusetts and New York. It takes up a whole city block, between 50th and 51st streets, Madison Avenue and Fifth Avenue`,
  },
  {
    type: 'image',
    content: {
      image: 'thumbnail_26',
      title: '',
    },
    props: {
      needPadding: false,
      onPressImage: false,
    },
  },
  {
    type: 'image',
    content: {
      image: 'thumbnail_27',
      title: '',
    },
    props: {
      needPadding: false,
      onPressImage: false,
    },
  },
];

const DATA: ArticleProps[] = [
  {
    name: 'Agnes Ingram',
    avatar: require('../../../assets/images/img_avatar.png'),
    thumbnail: require('../../../assets/images/thumbnail.png'),
    title: 'Top Things To See During A Holiday In Hong Kong',
    comments: '243',
    views: '15.2K',
    likes: '3',
    isTrending: true,
    dateTime: 'APR 23, 2018',
  },
  {
    name: 'Harold Kelley',
    avatar: require('../../../assets/images/img_avatar.png'),
    thumbnail: require('../../../assets/images/thumbnail_1.png'),
    title: 'Will The Democrats Be Able To Reverse The Online Gambling Ban',
    comments: '1K',
    views: '15.2K',
    likes: '2',
    isTrending: true,
    dateTime: 'APR 23, 2018',
  },
  {
    name: 'James Ross',
    avatar: require('../../../assets/images/img_avatar.png'),
    thumbnail: require('../../../assets/images/thumbnail_2.png'),
    title: 'Will The Democrats Be Able To Reverse The Online Gambling Ban',
    comments: '1K',
    views: '15.2K',
    likes: '20',
    isTrending: false,
    dateTime: 'APR 23, 2018',
  },
];

const FULL_DATA = [
  {
    data: 'Day 1',
    type: 'day',
  },
  {
    data: DATA_TRIP_DETAIL_DAY_1,
    type: 'content',
  },
  {
    data: 'Day 2',
    type: 'day',
  },
  {
    data: DATA_TRIP_DETAIL_DAY_2,
    type: 'content',
  },
  {
    data: 'Day 3',
    type: 'day',
  },
  {
    data: DATA_TRIP_DETAIL_DAY_3,
    type: 'content',
  },
  {
    data: 'Profile',
    type: 'profile',
  },
  {
    data: 'Recommended',
    type: 'title',
  },
  {
    data: DATA,
    type: 'recommended',
  },
];

const DATA_TRIP_DETAIL_DAY_1_REVIEW = [
  {
    type: 'description',
    content: `I'd never been here before which I thought was weird since I've been to NYC so many times. The view really is great, even on a cold/cloudy/windy day.\n\nThe Empire State Building is fully ADA compliant. We have handicapped restrooms on the 86th Floor Observatory and also have lowered viewing walls and binoculars. Service dogs are allowed throughout the building. Motorized and non-motorized wheelchairs are permitted. The 86th Floor has ramps to make getting around easier and lowered viewing walls so that visitors in chairs can still take in the view.`,
  },
  {
    type: 'location',
    content: {
      name: 'Empire State Building',
      address: '350 5th Ave, New York, NY 10118',
    },
  },
  {
    type: 'description',
    content:
      'I assume that the dubious pleasure of living right at the airport the biggest drawbacks is closed on holiday flight ungodly hours a day.',
  },
  {
    type: 'image',
    content: {
      image: 'thumbnail_24',
      title: 'Old tower New York…',
    },
    props: {
      needPadding: false,
      onPressImage: false,
    },
  },
  {
    type: 'image',
    content: {
      image: 'thumbnail_18',
      title:
        'Empire State Building and skyscrapers with lights at night in New York City',
    },
    props: {
      needPadding: true,
      onPressImage: true,
    },
  },
  {
    type: 'image',
    content: {
      image: 'thumbnail_17',
      title: '',
    },
    props: {
      needPadding: false,
      onPressImage: false,
    },
  },
];

const DATA_TRIP_DETAIL_DAY_2_REVIEW = [
  {
    type: 'description',
    content: `Always a buzz of activity, this stately building is one of my favorite places in all of New York.
        \nNot only is it fascinating to stop and watch all the comings and goings, but the structure itself is simply spectacular, with its ornate chandeliers and soaring zodiac ceiling.`,
  },
  {
    type: 'location',
    content: {
      name: 'Lower Manhattan',
      address: '5th Avenue, New York City, NY 10022',
    },
  },
  {
    type: 'description',
    content: `One of the most expensive corners of the world, talking a walk along the bustling wall street and Broadway is an experience in itself. 14 Wall Street houses world's tallest bank building (539 foot high sky scraper, orignially housed under the head quarters of Bankers Trust). this bank is among USA s wealthiest financial institutions.`,
  },
  {
    type: 'list',
    content: [
      'thumbnail_16',
      'thumbnail_17',
      'thumbnail_18',
      'thumbnail_19',
      'thumbnail_20',
      'thumbnail_16',
      'thumbnail_17',
      'thumbnail_18',
      'thumbnail_19',
    ],
  },
  {
    type: 'location',
    content: {
      name: `St. Patrick's Cathedral`,
      address: '5th Ave, New York, NY 10022',
    },
  },
  {
    type: 'description',
    content: `An architectural gem, The cathedral, which can accommodate 3,000 people, is built of brick clad in marble, quarried in Massachusetts and New York. It takes up a whole city block, between 50th and 51st streets, Madison Avenue and Fifth Avenue`,
  },
  {
    type: 'image',
    content: {
      image: 'thumbnail_26',
      title: '',
    },
    props: {
      needPadding: false,
      onPressImage: false,
    },
  },
  {
    type: 'image',
    content: {
      image: 'thumbnail_27',
      title: '',
    },
    props: {
      needPadding: false,
      onPressImage: false,
    },
  },
  {
    type: 'list',
    content: [
      'thumbnail_16',
      'thumbnail_17',
      'thumbnail_18',
      'thumbnail_19',
      'thumbnail_20',
      'thumbnail_16',
      'thumbnail_17',
      'thumbnail_18',
      'thumbnail_19',
    ],
  },
];

const DATA_TRIP_DETAIL_DAY_3_REVIEW = [
  {
    type: 'description',
    content: `New York City is larger than life: in population, in square feet (think of the five boroughs), in culture and food, in arts and entertainment. Visitors to New York have the world at their fingertips, from Uptown to Downtown and beyond. There’s so much to do and see, no two visits will ever be quite the same.
        \nWhether it’s your first visit to Gotham or your fifteenth, these top things to do in New York capture the energy, spirit and style of the city.`,
  },
  {
    type: 'image',
    content: {
      image: 'thumbnail_24',
      title: 'The Green Lake in Central Park.',
    },
    props: {
      needPadding: false,
      onPressImage: false,
    },
  },
  {
    type: 'location',
    content: {
      name: 'The Empire Hotel',
      address: '44 W 63rd St, New York, NY 10023',
    },
  },
  {
    type: 'description',
    content: `Not sure why but I really love this hotel. It's got a really good location on the Upper West Side and isn't too far from anything. Two blocks to Central Park. Cool atmosphere.`,
  },
];

const FULL_DATA_2 = [
  {
    data: 'Day 1',
    type: 'day',
  },
  {
    data: DATA_TRIP_DETAIL_DAY_1_REVIEW,
    type: 'content',
  },
  {
    data: 'Day 2',
    type: 'day',
  },
  {
    data: DATA_TRIP_DETAIL_DAY_2_REVIEW,
    type: 'content',
  },
  {
    data: 'Day 3',
    type: 'day',
  },
  {
    data: DATA_TRIP_DETAIL_DAY_3_REVIEW,
    type: 'content',
  },
];

export {
  DATA_TRIP_DETAIL_DAY_1,
  DATA_TRIP_DETAIL_DAY_2,
  DATA_TRIP_DETAIL_DAY_3,
  FULL_DATA,
  FULL_DATA_2,
};
