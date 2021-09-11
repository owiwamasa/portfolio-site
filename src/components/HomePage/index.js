import './HomePage.css'
import SkillsPage from '../SkillsPage'
import HeaderSection from '../HeaderSection'
import Projects from '../Projects'


function HomePage(){
    return(
        <div>
            <HeaderSection />
            <div className='link-container'>
                <div className='link-box'>
                    <div className='link'>
                        <a href='owiwamasa@gmail.com'>
                            <i className="far fa-envelope" />
                        </a>
                    </div>
                    <div className='link-label'>Email</div>
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
            <SkillsPage />
            <Projects />
        </div>
    )
}

export default HomePage
