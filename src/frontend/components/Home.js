import '../css/Home.css';
import home1 from '../images/home1.png';
import Courses from './Courses';
import Testimonials from './Testimonial';
import Why from './Why';

function Home() {
    return (
        <>
            <section id="hero-section">
                <div className="hero-content">
                    <span className="hero-badge">Best IT Solution Service</span>
                    <h1 className="hero-title">AMPLEMIND</h1>
                    <h2 className="hero-subtitle">Learn. Create. Innovate.</h2>
                    
                    <div className="hero-btn-group">
                        <button className="btn-primary">Discover more</button>
                        <button className="btn-secondary">Talk to Us</button>
                    </div>
                </div>
                
                <div className="hero-image-wrapper">
                    <img src={home1} alt="IT Solutions" className="hero-image" />
                </div>
            </section>

            <Courses limit={4} />
            <Why />
            <Testimonials limit={3} />
        </>
    );
}

export default Home;