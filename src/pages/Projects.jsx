import Header from '../components/Header.jsx';
import ProjectsPageStyle from './Projects.module.css';
import Footer from '../components/Footer.jsx';
import projIm from './images/examplennviz.png';
//
function Projects() {
    return (
        <>
            <div className={ProjectsPageStyle.pageContainer}>
                <Header className="header" />
                <div className={ProjectsPageStyle.contentContainer}>
                    <h1>Projects</h1>
                    <div className={ProjectsPageStyle.content}>
                        <p>
                            I believe the best way to truly understand a technology is to build it from the ground up.
                            With that mindset, I developed an autodifferentiation engine in pure vanilla Python,
                            enabling backpropagation in neural networks. Here's a visualization of part of a neural network made with this engine:
                        </p>
                        <div className={ProjectsPageStyle.imageContainer}>
                            <img src={projIm} alt="Visualization of a neural network built using autodifferentiation" />
                        </div>
                        <p>
                            This project was guided by Andrej Karpathy's
                            <i> "Neural Networks: Zero to Hero"</i> series on YouTube. If you're interested in learning
                            how libraries like PyTorch implement backpropagation, I highly recommend checking out the{' '}
                            <a
                                href="https://www.youtube.com/watch?v=VMj-3S1tku0&list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                first video
                            </a>{' '}
                            in the series. As I continue to learn more about neural networks and machine learning from
                            this series, I look forward to applying my knowledge to more advanced projects in the
                            future.
                        </p>
                        <br />
                        <p>
                            Additionally, I've always been curious about the internet and how it works. I wondered how
                            to take my HTML page and put it on the internet for everyone to see. So, I took on the
                            challenge of learning React to build a website to put on the internet. Now, here you are, on
                            my website! This site is deployed using GitHub Pages. Here is the{' '}
                            <a href="https://github.com/AydenGarza/aydengarza.github.io" target="_blank" rel="noopener noreferrer">
                                repository
                            </a>
                            .
                        </p>
                        <br />
                        <p>
                            Though this site is live, it's still a work in progress. Between a full load of computer
                            science and software engineering courses, studying new technologies outside of the
                            classroom, sharpening my algorithmic problem-solving skills, and working on other projects
                            I've yet to share, I'm continuing to refine this site. That being said, I'd love to hear
                            feedback! Feel free to connect with me—I'm always looking to improve and collaborate.
                        </p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Projects;
