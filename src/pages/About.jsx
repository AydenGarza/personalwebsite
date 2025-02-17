import Header from '../components/Header.jsx';
import AboutPageStyle from './About.module.css';
import Footer from '../components/Footer.jsx';

function About(){
    return <>
    <div className={AboutPageStyle.pageContainer}>
        <Header className="header"></Header>
        <div className={AboutPageStyle.contentContainer}>
            
            <div className={AboutPageStyle.questionAnswerBlock}>
                <span className={AboutPageStyle.headerQuestion}>Who I Am</span>
                <span className={AboutPageStyle.answer}> 
                    
                    <p>I am a computer science student and aspiring software engineer.</p>
                    
                    <p>The big part computers have played in my life and my love for math lead me to study computer science at Colorado
                    State University. I am currently a sophomore with a minor in machine learning. I recently had the opportunity to apply my knowledge and skills by interning at OHEL Technolgies as a software engineer.</p>
                    
                    
                    <p>When I'm not studying or programming, I love spending time with my family and 4 dogs,
                    going to the movies with friends, and participating in educational volunteer work.</p>
                </span>
            </div>

            <div className={AboutPageStyle.questionAnswerBlock}>
                <span className={AboutPageStyle.headerQuestion}>What I Do</span>

                
                <span className={AboutPageStyle.answer}>
                    <p>
                        In my three semesters studying computer science, I've gained a solid foundations in core areas like object oriented programming, data structures, algorithms, and data analysis by taking courses in digital logic, data structures, data science, and applied mathematics. This Spring 2025 semester, I'm taking Algorithms, Computer Organization, Fundamentals of C++, and Software Development with Java.
                    </p>

                    <p>
                        Outside of the classroom, I look for opportunities to apply my skills in a professional working environment. I had such an opportunity this past Spring 2024 semester as a software engineering intern at OHEL Technologies.
                        During my time at OHEL, I used my skills in Python and the ELK stack to work on an AI application with a team of other software engineers.
                    </p>
                    
                </span>
            </div>
        </div>
        <Footer></Footer>
    </div>
    </>
}

export default About