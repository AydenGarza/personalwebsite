import FooterStyling from './Footer.module.css';
import linkedInIcon from '../pages/icons/linkedinicon.png';
import githubIcon from '../pages/icons/ghicon.png';
import emailIcon from '../pages/icons/emailicon.png';

function Footer ({className}){
    return <div className={className}>
        <ul className = {FooterStyling.IconList}>
            <li><a href="https://linkedin.com/in/ayden-garza" target="_blank" rel="noreferrer"><img src={linkedInIcon} alt="LinkedIn" className= {FooterStyling.SocialIcon}/></a></li>
            <li><a href="https://github.com/AydenGarza" target="_blank" rel="noreferrer"><img src={githubIcon} alt="GitHub" className={FooterStyling.SocialIcon}/></a></li>
            <li><a href="mailto:aydenjgarza@gmail.com" ><img src={emailIcon} alt="Email" className={FooterStyling.SocialIcon}/></a></li>
        </ul>
    </div>
}

export default Footer;