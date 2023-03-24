import React from "react";
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import actionImg from '../assets/images/action.png';
import adventureImg from '../assets/images/adventure.jpg';
import HomePage from "./AD";

function Home() {
    const navigate = useNavigate();
    return (
        <div className="container mt-3">
            <HomePage />
            <div className='d-flex flex-wrap my-5 align-items-center justify-content-evenly gap-3'>
                <Card className='game-cards'
                    style={{ backgroundImage: `url(${actionImg})`, height: '250px', width: '250px' }}>
                    <Card.Body className='d-flex align-items-end'>
                        <Button className='w-100' variant="light" onClick={() => navigate('/action')}>Action</Button>
                    </Card.Body>
                </Card>
                <Card className='game-cards'
                    style={{ backgroundImage: `url(${adventureImg})`, height: '250px', width: '250px' }}>
                    <Card.Body className='d-flex align-items-end'>
                        <Button className='w-100' variant="light" onClick={() => navigate('/adventure')}>Adventure</Button>
                    </Card.Body>
                </Card>
            </div>
            <HomePage />
            <div className="d-flex flex-column gap-4">
                <h2>
                    Online Games on iq-games — Let's play
                </h2>
                <h4>
                    iq-games has the best free online games selection and offers the most fun experience to play alone or with friends. We offer instant play to all our games without downloads, login, popups or other distractions. Our games are playable on desktop, tablet and mobile so you can enjoy them at home or on the road. Every month over 50 million gamers from all over the world play their favorite games on iq-games.
                </h4>
                <h2>
                    Our game selection
                </h2>
                <h4>
                    Game developers release fun New Games on our platform on a daily basis. Our most Popular Games include hits like Subway Surfers, Temple Run 2, Stickman Hook and Rodeo Stampede. These games are only playable on iq-games. We also have online classics like Moto X3M, Venge.io, Dino Game, Smash Karts, 2048, Penalty Shooters 2 and Bad Ice-Cream to play for free. In total we offer more than 1000 game titles.
                </h4>
                <h2>
                    Start playing
                </h2>
                <h4>
                    Unsure what game to play? Start your game discovery on our homepage or pick a game from any of these popular categories:
                </h4>

                <h4>
                    <ul>
                        <li>
                            Thinking Games
                        </li>
                        <h5>
                            .io Games
                        </h5>
                        <li>
                            2 Player Games
                        </li>
                        <h5>
                            Car Games<br />
                            Shooting Games<br />
                            Puzzle Games
                        </h5>
                        <li>
                            What is iq-games?
                        </li>
                        <h5>
                            iq-games is based in India and has a team of 10 people working on our gaming platform. Our goal is to create the ultimate online playground. Free and open to all. Read more about the platform we are building on our company page. If you are a game developer looking to achieve success for your game on web, discover what we offer and get in touch via iq-games for Developers.
                        </h5>
                    </ul>
                </h4>
            </div>
        </div>
    );
}

export default Home;
