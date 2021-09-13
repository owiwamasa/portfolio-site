import './HomePage.css'
import SkillsPage from '../SkillsPage'
import HeaderSection from '../HeaderSection'
import Projects from '../Projects'
import headshot from '../../skill-icons/headshot.png'
import Scroll from 'react-scroll'
import resume from '../../skill-icons/Iwamasa_Owen_Resume.pdf'
import logo from '../../skill-icons/logo.png'
import DropDown from '../DropDown'

function HomePage(){
    const Element  = Scroll.Element;
    const scroller = Scroll.scroller;

    const scrollSkills = () => scroller.scrollTo('scrollToSkills', {
        duration: 1000,
        delay: 100,
        smooth: true,
        offset: -20
      })

    const scrollProjects = () => scroller.scrollTo('scrollToProjects', {
        duration: 1000,
        delay: 100,
        smooth: true,
        offset: 30
      })


    return(
        <div className='home-page'>
            <img className='logo' src={logo} alt='logo'/>
            <DropDown scrollProjects={scrollProjects} scrollSkills={scrollSkills}/>
            <div className='nav'>
                <div onClick={scrollProjects} className='nav-link'>Projects</div>
                <div onClick={scrollSkills} className='nav-link'>Skills</div>
                <a href='mailto:owiwamasa@gmail.com' className='email-contact'>owiwamasa@gmail.com</a>
            </div>
            <HeaderSection />
            <div className='link-container'>
                <div className='contact'>
                    <div className='headshot'>
                        <img src={headshot} alt='head shot'/>
                    </div>
                </div>
                <div className='link-buttons'>
                    <div className='link-box'>
                        <div className='link'>
                            <a href={resume}>
                                <i class="far fa-file"></i>
                            </a>
                        </div>
                        <div className='link-label'>Resume</div>
                    </div>
                    <div className='link-box'>
                        <div className='link'>
                            <a href='https://www.linkedin.com/in/owen-iwamasa-6ab3a9166/'>
                                <i className="fab fa-linkedin" />
                            </a>
                        </div>
                        <div className='link-label'>LinkedIn</div>
                    </div>
                    <div className='link-box'>
                        <div className='link'>
                            <a href='https://github.com/owiwamasa'>
                                <i className="fab fa-github" />
                            </a>
                        </div>
                        <div className='link-label'>GitHub</div>
                    </div>
                    <div className='link-box'>
                        <div className='link'>
                            <a href='https://angel.co/u/owen-iwamasa'>
                                <i class="fab fa-angellist"></i>
                            </a>
                        </div>
                        <div className='link-label'>AngelList</div>
                    </div>
                </div>
            </div>
            <Element name="scrollToSkills">
                <SkillsPage />
            </Element>
            <Element name="scrollToProjects">
                <Projects />
            </Element>
        </div>
    )
}

export default HomePage
