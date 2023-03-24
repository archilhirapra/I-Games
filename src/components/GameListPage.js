import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import FullScreenAd from "./FullScreenView";
import { action1, action2, action3, action4, action5, action6, action7, action8, action9 } from '../assets/images'
import HomePage from "./AD";

const gamesList = [{
    id: 1,
    mainBanner: action1,
    logoBanner: action1,
    appName: '',
    companyName: ''
}, {
    id: 2,
    mainBanner: action2,
    logoBanner: action2,
    appName: '',
    companyName: ''
}, {
    id: 3,
    mainBanner: action3,
    logoBanner: action3,
    appName: '',
    companyName: ''
}, {
    id: 4,
    mainBanner: action4,
    logoBanner: action4,
    appName: '',
    companyName: ''
}, {
    id: 5,
    mainBanner: action5,
    logoBanner: action5,
    appName: '',
    companyName: ''
}, {
    id: 6,
    mainBanner: action6,
    logoBanner: action6,
    appName: '',
    companyName: ''
}, {
    id: 7,
    mainBanner: action7,
    logoBanner: action7,
    appName: '',
    companyName: ''
}, {
    id: 8,
    mainBanner: action8,
    logoBanner: action8,
    appName: '',
    companyName: ''
}, {
    id: 9,
    mainBanner: action9,
    logoBanner: action9,
    appName: '',
    companyName: ''
},];

const GameListPage = (props) => {
    // const {isFrom} = props;
    const [showAd, setShowAd] = useState(false);
    let divide = 6;

    useEffect(() => {
        if (showAd) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [showAd]);
    return (
        <div className="container mt-3">
            <HomePage />
            {showAd && <FullScreenAd setShowAd={setShowAd}>
                <iframe src="https://play561.atmequiz.com/" title="Quiz" width="100%" height="100%" />
            </FullScreenAd>}
            <Row>
                {[...gamesList].map((item, i) => {
                    if (divide / i === 0 || divide / i === 1) {
                        divide = divide + 7;
                        return (<><Col md={12} lg={12} xxl={12} sm={12}>
                            <HomePage />
                        </Col>
                            <Col md={4} lg={4} xxl={4} sm={4}
                                className="d-flex flex-column game-list-card p-3"
                                onClick={() => setShowAd(!showAd)}>
                                <img
                                    className='rounded shadow h-100 w-100'
                                    style={{ maxHeight: '220px', maxWidth: '350px' }}
                                    src={item?.mainBanner}
                                    alt='' />
                                <div className='mt-3 d-flex gap-3'>
                                    <img
                                        className='rounded shadow'
                                        src={item?.logoBanner}
                                        style={{ height: '90px', width: '90px', objectFit: 'cover' }}
                                        alt='' />
                                    <div>
                                        <p className='m-0'><strong>{item?.appName}</strong></p>
                                        <p className='m-0'><small>{item?.companyName}</small></p>
                                    </div>
                                </div>
                            </Col>
                        </>
                        )
                    } else {
                        return (<Col md={4} lg={4} xxl={4} sm={4}
                            className="d-flex flex-column game-list-card p-3"
                            onClick={() => setShowAd(!showAd)}>
                            <img
                                className='rounded shadow h-100 w-100'
                                style={{ maxHeight: '220px', maxWidth: '350px' }}
                                src={item?.mainBanner}
                                alt='' />
                            <div className='mt-3 d-flex gap-3'>
                                <img
                                    className='rounded shadow'
                                    src={item?.logoBanner}
                                    style={{ height: '90px', width: '90px', objectFit: 'cover' }}
                                    alt='' />
                                <div>
                                    <p className='m-0'><strong>{item?.appName}</strong></p>
                                    <p className='m-0'><small>{item?.companyName}</small></p>
                                </div>
                            </div>
                        </Col>)
                    }
                })}
            </Row>
            <HomePage />
            <h4>
                Action Games
            </h4><br/>
            <h6>
                For the fighter, a thirst for battle!
                Satisfying guns, explosive gameplay and a randomized weapon system - that's Action Games! No matter if you're playing Mini Royale, Repuls.io or any other Action Game - the epic journey awaits you in this unique genre.
            </h6>
            <h6>
                Action Games brings mobile games where hand-to-hand combat is king. Featuring games that will get your blood pumping with an exciting mix of hack-and-slash, war and action themes, you'll never be at a loss for the next saga.
            </h6>
            <h6>
                These top-rated action games are designed to be challenging. Whether you're looking for an adrenaline rush or a casual arcade game, you'll find something that fits your style.
            </h6>
            <h6>
                Hundreds of action games are out there, and we've covered all of the best ones for mobile. Some action games are multiplayer, while others have huge maps you have to explore. Some are puzzle based, and others include epic graphics and cool props. Action games may be 3D based or 2D, but they will always give you an adrenaline rush.
            </h6>
            <h6>
                Action Games are great for anyone that likes to act cool by engaging in fast paced battles, using melee and ranged attacks to defeat their opponents. Collect items on the battlefield, upgrade your weapons and go for headshots and critical hits to take down your foes.
            </h6><br/>
            <h4>
                What is iq-games?
            </h4><br/>
            <h6>
                You'll always find the best free online games at iq-games. From exciting action games, to puzzle games, to strategy games, brain teasers and dress up games, you can have hours of fun playing our selection of online games totally for free no downloads required! All our games are playable on desktop, tablet and mobile so you can enjoy them with friends, at home or on the road. Every month over 30 million gamers play their favourite games on iq-games.
            </h6><br/>
            <h4>
                Thinking Games
            </h4><br/>
            <h6>
                Test your intellect with our monstrous collection of thinking games! We have every type of mind-bending, brainteasing challenge imaginable. You can enjoy classic and new puzzlers, from variations of Windows' Minesweeper to specially-themed Memory! All kinds of players can travel through winding mazes of varying difficulty. Use your mind to reign victorious, and don't let the computer fool you. Play mods of timeless favorites, and enter the 21st century with an endless supply of thinking adventures!
            </h6>
            <h6>
                Regardless of skill level, our thinking games are easy to learn. However, know that you will be challenged to the fullest extent! Customize the difficulty level in math-based thinking games, and test the limits of your mind. Improve your skills, and set new records in blocks and balls challenges. Play everything from Tetris to Sudoku, and compete with your friends. Participate in drawing or seek & find challenges, and solve puzzles featuring word mysteries!
            </h6><br/>
            <h4>
                Popular Games
            </h4><br/>
            <h6>
                On this page we have listed the most popular games on iq-games for 2021 which are all available to play for free online. This list contains the most popular games on iq-games based on total number of game plays this month. Each month over 30,000,000 people play games on iq-games.
            </h6>
        </div>
    )
};
export default GameListPage;
