import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-bootstrap/Carousel';
// import "./custom.css";
import '../HeroSection/About.css'

export default function About() {
    return (
        <>
            <h1 style={{ marginLeft: "3vw" }}>About  us</h1>
            <div className="maindiv">
                <div className="wrapcontainer">
                    <p className="first">
                        ColibrisODM, with over 30 years of combined expertise, specializes in on-demand
                        sheet metal manufacturing. Our service ensures our
                        clients personalized and precise solutions for complex metal manufacturing projects.

                    </p>
                    <p className="second">
                        For a faster approach, our instant quotation tool enables clients to upload
                        technical drawings of their sheet metal parts and receive accurate prices within
                        minutes. This innovative feature streamlines the ordering process,
                        making it perfect for quick-turnaround projects.
                    </p>
                    <p className="third">
                        We offer a comprehensive range of manufacturing services, including cutting,
                        forming, welding, machining, coating, and assembly. At ColibrisODM,
                        we strive to balance customer satisfaction and production partner success,
                        ensuring high-quality parts at reasonable prices while maintaining top-notch standards.
                    </p><br />
                    <button style={{ height: "50px", width: "200px", backgroundColor: "blue", borderRadius: "5px" ,marginLeft:"3vw"}}><h2>read more</h2></button>
                </div>
                <div className='Image'>


                    <Carousel data-bs-theme="dark" >
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </>
    );
}
