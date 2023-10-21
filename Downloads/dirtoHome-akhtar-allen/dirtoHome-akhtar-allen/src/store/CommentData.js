import { MdStar, MdStarHalf } from "react-icons/md"
import { RiReplyLine } from 'react-icons/ri';
import team1 from "../assets/images/team2.jpg";

export const CommentData = [
    {
        img: team1,
        name: 'Adam Smith',
        date: 'Reviewed 2 Days ago',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Curabitur non nulla sit amet nisl tempus',
        stars: [
            <MdStar />,
            <MdStar />,
            <MdStar />,
            <MdStar />,
            <MdStarHalf />,
        ],
        replyBtn: 'Reply',
        replyBtnIcon: <RiReplyLine />,
        replyComments: [
            {
                img: team1,
                name: 'Julian Smith',
                date: 'Reviewed 3 Days ago',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Curabitur non nulla sit amet nisl tempus',
                stars: [
                    <MdStar />,
                    <MdStar />,
                    <MdStar />,
                    <MdStar />,
                    <MdStarHalf />,
                ],
                replyBtn: 'Reply',
                replyBtnIcon: <RiReplyLine />,
            }
        ]
    },
    {
        img: team1,
        name: 'Matt Derry',
        date: 'Reviewed 4 Days ago',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Curabitur non nulla sit amet nisl tempus',
        stars: [
            <MdStar />,
            <MdStar />,
            <MdStar />,
            <MdStar />,
            <MdStar />,
        ],
        replyBtn: 'Reply',
        replyBtnIcon: <RiReplyLine />,
        replyComments: []
    }
]