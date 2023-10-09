import DJ from "../assets/img/dj.png";
import empower from "../assets/img/strong-woman.png";
import shero from "../assets/img/speech.png";
import wellness from "../assets/img/mental-health.png";
import planting from "../assets/img/planting.png"
import chip from "../assets/img/chip.png"
import seminar from "../assets/img/seminar.png"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>#MY PROMISES</h2>
                        <p>Remember, together we can create an inclusive, empowering, and vibrant campus for all the amazing women out there! 💪🌸<br></br>#EmpowHER #CollegeRevolution #HERFutureLeadership</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={empower} alt="Image" />
                                <h5>Empowerment Hub 💪</h5>
                                <p>Elevating skills, confidence, and leadership through engaging workshops tailored just for HER!</p>
                            </div>
                            <div className="item">
                                <img src={DJ} alt="Image" />
                                <h5>Inclusive Campus Events 🎉</h5>
                                <p>Hosting fun and inclusive events that celebrate diversity, from cultural festivals to women's sports tournaments. Because unity makes us stronger!</p>
                            </div>
                            <div className="item">
                                <img src={shero} alt="Image" />
                                <h5>SHERO Speakers Series</h5>
                                <p>Inviting inspiring female leaders to share their journeys, motivating every student to dream big and reach for the stars.</p>
                            </div>
                            <div className="item">
                                <img src={wellness} alt="Image" />
                                <h5>Health & Wellness Boost 🌸:</h5>
                                <p>Introducing yoga sessions, mental health workshops, and accessible fitness programs. Let's prioritize our well-being and radiate positivity together</p>
                            </div>
                            <div className="item">
                                <img src={planting} alt="Image" />
                                <h5>Green Campus Initiative 🌿</h5>
                                <p>Planting trees, promoting recycling, and organizing eco-friendly drives. We'll make our campus sustainable, because every small effort counts toward a greener future!</p>
                            </div>
                            <div className="item">
                                <img src={seminar} alt="Image" />
                                <h5>EmpowHER Entrepreneurship Fair</h5>
                                <p>Encouraging entrepreneurial spirit with a cool fair where innovative, female-led startups can thrive and inspire.</p>
                            </div>
                            <div className="item">
                                <img src={chip} alt="Image" />
                                <h5>Tech-Savvy Sisters 📱</h5>
                                <p>Enhancing digital literacy with tech workshops, coding classes, and creating a women-led tech club. Let's embrace the digital world with confidence and curiosity.</p>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}