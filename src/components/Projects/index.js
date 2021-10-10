import './Projects.css'
import js from '../../skill-icons/javascript.svg'
import python from '../../skill-icons/python.svg'
import react from '../../skill-icons/react.svg'
import redux from '../../skill-icons/redux.svg'
import css from '../../skill-icons/css.svg'
import express from '../../skill-icons/express.svg'
import flask from '../../skill-icons/flask.png'
import postgresql from '../../skill-icons/postgresql.svg'
import pug from '../../skill-icons/pug.png'
import nodejs from '../../skill-icons/nodejs-icon.png'

function Projects(){
    return(
        <div className='projects'>
            <div className='projects-header'>Projects</div>
            <div className='projects-container'>

                {/* //CANVAS CARD */}
                <div className='project-card'>
                    {/* <div className='project-title'>Canvas</div> */}
                    <div className='project-image'>
                        <img src='https://i.imgur.com/0Szj0Wh.png' alt='project'/>
                    </div>
                    <div className='project-page'>
                        <img src='https://i.imgur.com/r1m0eqX.jpeg' alt='project page'/>
                    </div>
                    <div className='project-description'>Discover and hire freelance artists. Or, create an 'Artist Page' to receive work inquiries.</div>
                    <div className='project-links'>
                        <a href='https://canvas-proj.herokuapp.com/artist-pages/3'>Live App
                            <i class="fas fa-globe"></i>
                        </a>
                        <a href='https://github.com/owiwamasa/canvas'>GitHub
                            <i className="fab fa-github" />
                        </a>
                    </div>
                    <div className='project-features-list'>
                        <div className='project-features-title'>Features List</div>
                        <div>- Create an Artist Page<br></br>
                        <br></br>- Message Artists<br></br>
                        <br></br>- Post your Artwork<br></br>
                        <br></br>- Send / Receive Work Requests<br></br>
                        <br></br>- AWS Image Upload<br></br>
                        <br></br>- Sign up / in with email<br></br>
                        </div>
                    </div>
                    <div className='project-techs'>
                        <div className='project-techs-top'>
                            <div className='project-tech js-tech'>
                                <img src={js} alt='tech logo'/>
                                <div>JavaScript</div>
                            </div>
                            <div className='project-tech'>
                                <img src={python} alt='tech logo'/>
                                <div>Python</div>
                            </div>
                            <div className='project-tech'>
                                <img src={react} alt='tech logo'/>
                                <div>React.js</div>
                            </div>
                        </div>
                        <div className='project-techs-bottom'>
                            <div className='project-tech'>
                                <img src={redux} alt='tech logo'/>
                                <div>Redux.js</div>
                            </div>
                            <div className='project-tech'>
                                <img src={css} alt='tech logo'/>
                                <div>CSS3</div>
                            </div>
                            <div className='project-tech flask-tech'>
                                <img src={flask} alt='tech logo'/>
                                <div>Flask</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* //HULLABALOO CARD */}
                <div className='project-card hullabaloo-card'>
                    <div className='project-image hullabaloo-image'>
                        <img src='https://i.imgur.com/N8RoYl1.png' alt='project'/>
                        <div className='project-title'>Hullabaloo</div>
                    </div>
                    <div className='project-page hullabaloo-page'>
                        <img src='https://i.imgur.com/scnsnMX.png' alt='project page'/>
                    </div>
                    <div className='project-description hullabaloo-description'>Discover comedy podcasts and create your own.</div>
                    <div className='project-links hullabaloo-links'>
                        <a href='https://hullabaloo-podcasts.herokuapp.com/'>Live App
                            <i class="fas fa-globe"></i>
                        </a>
                        <a href='https://github.com/owiwamasa/hullabaloo-react-redux-proj'>GitHub
                            <i className="fab fa-github" />
                        </a>
                    </div>
                    <div className='project-features-list hullabaloo-features'>
                        <div className='project-features-title hullabaloo-features-title'>Features List</div>
                        <div>- Create Podcasts + Episodes<br></br>
                        <br></br>- Follow / Unfollow Podcasts<br></br>
                        <br></br>- Comment on Episodes<br></br>
                        <br></br>- Dynamic search bar<br></br>
                        <br></br>- MP3 Player Tracks # of Plays<br></br>
                        <br></br>- Sign up / in with email<br></br>
                        </div>
                    </div>
                    <div className='project-techs hullabaloo-techs'>
                        <div className='project-techs-top'>
                            <div className='project-tech hullabaloo-tech js-tech'>
                                <img src={js} alt='tech logo'/>
                                <div>JavaScript</div>
                            </div>
                            <div className='project-tech hullabaloo-tech'>
                                <img src={react} alt='tech logo'/>
                                <div>React.js</div>
                            </div>
                            <div className='project-tech hullabaloo-tech'>
                                <img src={redux} alt='tech logo'/>
                                <div>Redux.js</div>
                            </div>
                        </div>
                        <div className='project-techs-bottom'>
                            <div className='project-tech hullabaloo-tech express-tech'>
                                <img src={express} alt='tech logo'/>
                                <div>Express.js</div>
                            </div>
                            <div className='project-tech hullabaloo-tech'>
                                <img src={css} alt='tech logo'/>
                                <div>CSS3</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PROJECT CONTAINER #2 */}
            <div className='projects-container'>
                {/* //SIDEWALK SURFERS CARD */}
                <div className='project-card sidewalk-card'>
                    <div className='project-image sidewalk-image'>
                        <img src='https://i.imgur.com/2y2FmRJ.png' alt='project'/>
                        <div className='project-title sidewalk-title'>Sidewalk Surfers</div>
                    </div>
                    <div className='project-page sidewalk-page'>
                        <img src='https://i.imgur.com/ShaOIz7.png' alt='project page'/>
                    </div>
                    <div className='project-description'>Find skateboarding spots in the Los Angeles area and share content from these locations.</div>
                    <div className='project-links'>
                        <a href='https://sidewalk-surfers.herokuapp.com/'>Live App
                            <i class="fas fa-globe"></i>
                        </a>
                        <a href='https://github.com/owiwamasa/sidewalk-surfer-proj'>GitHub
                            <i className="fab fa-github" />
                        </a>
                    </div>
                    <div className='project-features-list sidewalk-features'>
                        <div className='project-features-title'>Features List</div>
                        <div>- Google Map w/ Skate Spots<br></br>
                        <br></br>- Create a Skate Spot<br></br>
                        <br></br>- Post Media to a spot<br></br>
                        <br></br>- Comment on Media Posts<br></br>
                        <br></br>- Dynamic search bar<br></br>
                        <br></br>- Sign up / in with email<br></br>
                        </div>
                    </div>
                    <div className='project-techs'>
                        <div className='project-techs-top'>
                            <div className='project-tech js-tech'>
                                <img src={js} alt='tech logo'/>
                                <div>JavaScript</div>
                            </div>
                            <div className='project-tech'>
                                <img src={python} alt='tech logo'/>
                                <div>Python</div>
                            </div>
                            <div className='project-tech'>
                                <img src={react} alt='tech logo'/>
                                <div>React.js</div>
                            </div>
                        </div>
                        <div className='project-techs-bottom'>
                            <div className='project-tech'>
                                <img src={redux} alt='tech logo'/>
                                <div>Redux.js</div>
                            </div>
                            <div className='project-tech'>
                                <img src={css} alt='tech logo'/>
                                <div>CSS3</div>
                            </div>
                            <div className='project-tech flask-tech'>
                                <img src={flask} alt='tech logo'/>
                                <div>Flask</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* //GOOD TUNES */}
                <div className='project-card goodTunes-card'>
                    <div className='project-image goodTunes-image'>
                        <img src='https://i.imgur.com/sf38Uhb.png' alt='project'/>
                    </div>
                    <div className='project-page canvas-page'>
                        <img src='https://i.imgur.com/J3mTMmi.png' alt='project page'/>
                    </div>
                    <div className='project-description sidewalk-description'>Discover and create collections of music albums.</div>
                    <div className='project-links sidewalk-links'>
                        <a href='https://good-tunes.herokuapp.com/'>Live App
                            <i class="fas fa-globe"></i>
                        </a>
                        <a href='https://github.com/chrisbh4/GoodTunes'>GitHub
                            <i className="fab fa-github" />
                        </a>
                    </div>
                    <div className='project-features-list canvas-features'>
                        <div className='project-features-title sidewalk-features-title'>Features List</div>
                        <div>- Connected to Discogs API<br></br>
                        <br></br>- Create Shelves to add albums<br></br>
                        <br></br>- Search by artist or album<br></br>
                        <br></br>- Leave reviews for albums<br></br>
                        <br></br>- Discover music videos<br></br>
                        <br></br>- Sign up / in with email<br></br>
                        </div>
                    </div>
                    <div className='project-techs canvas-techs'>
                        <div className='project-techs-top'>
                            <div className='project-tech canvas-tech js-tech'>
                                <img src={js} alt='tech logo'/>
                                <div>JavaScript</div>
                            </div>
                            <div className='project-tech canvas-tech'>
                                <img src={nodejs} alt='tech logo'/>
                                <div>Node.js</div>
                            </div>
                            <div className='project-tech canvas-tech'>
                                <img src={pug} alt='tech logo'/>
                                <div>Pug</div>
                            </div>
                        </div>
                        <div className='project-techs-bottom'>
                            <div className='project-tech canvas-tech express-tech'>
                                <img src={express} alt='tech logo'/>
                                <div>Express.js</div>
                            </div>
                            <div className='project-tech canvas-tech'>
                                <img src={css} alt='tech logo'/>
                                <div>CSS3</div>
                            </div>
                            <div className='project-tech canvas-tech'>
                                <img src={postgresql} alt='tech logo'/>
                                <div>PostgreSQL</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects
