export interface Inbox {
    user: string,
    comment: string,
    time: string,
    avatar: any,
    isNotRead: boolean,
    countInbox?: number,
};

const DATA: Inbox[] = [
    {
        avatar: require('../../images/img_avatar_3.png'),
        user: 'Sandra Minalo',
        comment: '“So Cute, I love it!!!“',
        time: '15 minutes ago',
        isNotRead: true,
        countInbox: 5
    },
    {
        avatar: require('../../images/img_avatar_4.png'),
        user: 'Linnie Lyns',
        countInbox: 2,
        time: '2 hours ago',
        isNotRead: true,
        comment: "I'm a dentist.",
    },
    {
        avatar: require('../../images/img_avatar_5.png'),
        user: 'Callie Holland, Emily',
        comment: "What do you do for a living?",
        time: 'Mar 1, 2018',
        isNotRead: false,
    },
    {
        avatar: require('../../images/img_avatar_6.png'),
        user: 'Anni Tran',
        comment: "It's going well! How about you?",
        time: '3 hours ago',
        isNotRead: false,
    },
    {
        avatar: require('../../images/img_avatar_7.png'),
        user: 'Linhling.ling',
        comment: "It's going well! How about you?",
        time: 'Feb 18, 2018',
        isNotRead: false,
    },
    {
        avatar: require('../../images/img_avatar_8.png'),
        user: 'Chris Austin',
        comment: "Pardon me?",
        time: '15 hours ago',
        isNotRead: true,
        countInbox: 2
    },
    {
        avatar: require('../../images/img_avatar_9.png'),
        user: 'Mildred Nelson',
        comment: "Hi! Nice to meet you.",
        time: 'Mar 1, 2018',
        isNotRead: false,
    },
    {
        avatar: require('../../images/img_avatar.png'),
        user: 'Chester Wheeler',
        comment: "It's going well! How about you?",
        time: 'Feb 18, 2018',
        isNotRead: false,
    },
    {
        avatar: require('../../images/img_avatar.png'),
        user: 'Lelia Sparks',
        comment: "It's going well!",
        time: 'Feb 19, 2018',
        isNotRead: false,
    },
]

export default DATA;