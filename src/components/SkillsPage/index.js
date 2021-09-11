import { useState } from 'react'
import './SkillsPage.css'
import js from '../../skill-icons/javascript.svg'
import python from '../../skill-icons/python.svg'
import react from '../../skill-icons/react.svg'
import redux from '../../skill-icons/redux.svg'
import html from '../../skill-icons/html.svg'
import css from '../../skill-icons/css.svg'
import postgresql from '../../skill-icons/postgresql.svg'
import express from '../../skill-icons/express.svg'
import git from '../../skill-icons/git.svg'
import docker from '../../skill-icons/docker.svg'
import heroku from '../../skill-icons/heroku.svg'
import sequelize from '../../skill-icons/sequelize.svg'
import flask from '../../skill-icons/flask.png'
import sqlalchemy from '../../skill-icons/sqlalchemy.png'

function SkillsPage(){
    const [show1, setShow1] = useState(true)
    const [show2, setShow2] = useState(true)
    const [show3, setShow3] = useState(true)
    const [show4, setShow4] = useState(true)
    const [show5, setShow5] = useState(true)
    const [show6, setShow6] = useState(true)
    const [show7, setShow7] = useState(true)
    const [show8, setShow8] = useState(true)
    const [show9, setShow9] = useState(true)
    const [show10, setShow10] = useState(true)
    const [show11, setShow11] = useState(true)
    const [show12, setShow12] = useState(true)
    const [show13, setShow13] = useState(true)
    const [show14, setShow14] = useState(true)
    // const setShowArr = [setShow1, setShow2, setShow3, setShow4, setShow5, setShow6, setShow7, setShow8, setShow9, setShow10, setShow11, setShow12, setShow13, setShow14]

    // useEffect(async() => {
    //     const interval = setInterval(() => {
    //         let setShow = setShowArr.shift()
    //         setShow(true)
    //         if (!setShowArr.length) {
    //             clearInterval(interval)
    //         }
    //       }, 70);
    // }, [])

    return(
        <div>
            <div className='skills-header'>Skills</div>
            <div className='skills-container'>
                {show1 ?
                <div className='skills-img'>
                    <img src={js} alt='skill logo'/>
                    <div className='skill-name'>JavaScript</div>
                </div>:
                <div className='skills-img'>
                    {/* <img src={js} alt='skill logo'/> */}
                <div className='skill-name'>JavaScript</div>
                </div>
                }
                {show2 ?
                <div className='skills-img'>
                    <img src={python} alt='skill logo'/>
                    <div className='skill-name'>Python</div>
                </div>:
                <div className='skills-img'>
                {/* <img src={python} alt='skill logo'/> */}
                <div className='skill-name'></div>
                </div>
                }
                {show3 ?
                <div className='skills-img'>
                    <img src={react} alt='skill logo'/>
                    <div className='skill-name'>React.js</div>
                </div>:
                <div className='skills-img'>
                {/* <img src={python} alt='skill logo'/> */}
                <div className='skill-name'></div>
                </div>
                }
                {show4 ?
                <div className='skills-img'>
                    <img src={redux} alt='skill logo'/>
                    <div className='skill-name'>Redux.js</div>
                </div>:
                <div className='skills-img'>
                {/* <img src={python} alt='skill logo'/> */}
                <div className='skill-name'></div>
                </div>
                }
                {show5 ?
                <div className='skills-img'>
                    <img src={flask} alt='skill logo'/>
                    <div className='skill-name flask-name'>Flask</div>
                </div>:
                <div className='skills-img'>
                {/* <img src={python} alt='skill logo'/> */}
                <div className='skill-name'></div>
                </div>
                }
                {show6 ?
                <div className='skills-img sqlalchemy'>
                    <img src={sqlalchemy} alt='skill logo'/>
                    <div className='skill-name sqlalchemy-name'>SQLAlchemy</div>
                </div>:
                <div className='skills-img'>
                {/* <img src={python} alt='skill logo'/> */}
                <div className='skill-name'></div>
                </div>
                }
                {show7 ?
                <div className='skills-img'>
                    <img src={express} alt='skill logo'/>
                    <div className='skill-name'>Express</div>
                </div>:
                <div className='skills-img'>
                {/* <img src={python} alt='skill logo'/> */}
                <div className='skill-name'></div>
                </div>
                }
                {show8 ?
                <div className='skills-img'>
                    <img src={sequelize} alt='skill logo'/>
                    <div className='skill-name'>Sequelize</div>
                </div>:
                <div className='skills-img'>
                {/* <img src={python} alt='skill logo'/> */}
                <div className='skill-name'></div>
                </div>
                }
                {show9 ?
                <div className='skills-img'>
                    <img src={postgresql} alt='skill logo'/>
                    <div className='skill-name'>PostgreSQL</div>
                </div>:
                <div className='skills-img'>
                {/* <img src={python} alt='skill logo'/> */}
                <div className='skill-name'></div>
                </div>
                }
                {show10 ?
                <div className='skills-img'>
                    <img src={html} alt='skill logo'/>
                    <div className='skill-name'>HTML5</div>
                </div>:
                <div className='skills-img'>
                {/* <img src={python} alt='skill logo'/> */}
                <div className='skill-name'></div>
                </div>
                }
                {show11 ?
                <div className='skills-img'>
                    <img src={css} alt='skill logo'/>
                    <div className='skill-name'>CSS3</div>
                </div>:
                <div className='skills-img'>
                {/* <img src={python} alt='skill logo'/> */}
                <div className='skill-name'></div>
                </div>
                }
                {show12 ?
                <div className='skills-img'>
                    <img src={git} alt='skill logo'/>
                    <div className='skill-name'>Git</div>
                </div>:
                <div className='skills-img'>
                {/* <img src={python} alt='skill logo'/> */}
                <div className='skill-name'></div>
                </div>
                }
                {show13 ?
                <div className='skills-img'>
                    <img src={docker} alt='skill logo'/>
                    <div className='skill-name'>Docker</div>
                </div>:
                <div className='skills-img'>
                {/* <img src={python} alt='skill logo'/> */}
                <div className='skill-name'></div>
                </div>
                }
                {show14 ?
                <div className='skills-img'>
                    <img src={heroku} alt='skill logo'/>
                    <div className='skill-name'>Heroku</div>
                </div>:
                <div className='skills-img'>
                {/* <img src={python} alt='skill logo'/> */}
                <div className='skill-name'></div>
                </div>
                }
            </div>
        </div>
    )
}


export default SkillsPage
