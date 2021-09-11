import './HeaderSection.css'
import bridge from '../../skill-icons/bridge.png'

function HeaderSection(){
    return(
        <div className='header'>
            <div className='header-container'>
                <div className='header-intro'>
                <div className='header-intro-1'>Hi, my name is</div>
                <div className='header-intro-2'>Owen Iwamasa.</div>
                <div className='header-intro-3'>Software Engineer from</div>
                <div className='header-intro-4'>San Francisco.</div>
                </div>
                <div className='header-image'>
                    <img src={bridge} alt='golden gate bridge'/>
                </div>
            </div>
            <div className='about-me'>It is amazing to me what can be accomplished with a computer and some creativity. I love the process of developing a project from an idea and into a full fledged application. I also, have experience working as a carpenter / set builder and enjoy having many outlets to express my creativity and utilize my problem-solving skills. For fun, my hobbies are playing musical instruments, sports, and drawing.</div>
        </div>
    )
}

export default HeaderSection
