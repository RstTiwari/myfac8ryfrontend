import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./custom.css";
import '../HeroSection/About.css'
import Whyus from "./Whyus";

export default function About() {
    const settings = {
        dots: true, // Enable navigation dots
        infinite: true, // Loop through slides
        speed: 500, // Transition speed
        slidesToShow: 2, // Show two slides at once
        slidesToScroll: 1, // Scroll one slide at a time
    };

    return (
        <>
            <h1 style={{marginLeft:"2vw"}}>About  us</h1>
            <div className="maindiv">            
            <div className="wrapcontainer">
                <p className="first">
                    ColibrisODM, with over 30 years of combined expertise, specializes in on-demand
                    sheet metal manufacturing. Our service ensures our
                    clients personalized and precise solutions for complex metal manufacturing projects.

                </p><br />
                <p className="second">
                    For a faster approach, our instant quotation tool enables clients to upload
                    technical drawings of their sheet metal parts and receive accurate prices within
                    minutes. This innovative feature streamlines the ordering process,
                    making it perfect for quick-turnaround projects.
                </p><br />
                <p className="third"><br />

                    We offer a comprehensive range of manufacturing services, including cutting,
                    forming, welding, machining, coating, and assembly. At ColibrisODM,
                    we strive to balance customer satisfaction and production partner success,
                    ensuring high-quality parts at reasonable prices while maintaining top-notch standards.
                </p><br />
                <button style={{height:"50px",width:"200px",backgroundColor:"blue",borderRadius:"5px"}}><h2>read more</h2></button>
            </div>
            <div className="mainimage">
                <Slider {...settings}>
                    <div>
                        <img
                            src="https://via.placeholder.com/600x400?text=Image+1"
                            alt="Image 1"
                            style={{ width: "100%", borderRadius: "5px", marginLeft: "10px", marginRight: "20px" }}
                        />
                    </div>
                    <div>
                        <img
                            src="https://via.placeholder.com/600x400?text=Image+2"
                            alt="Image 2"
                            style={{ width: "100%", height: "auto", borderRadius: "5px", marginLeft: "20px", marginRight: "20px" }}
                        />
                    </div>
                </Slider>
            </div>
            </div>
            <Whyus/>
        </>
    );
}
