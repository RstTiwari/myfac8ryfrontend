import '../HeroSection/HeroSection.css';
import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Hero() {
    return (
        <div className='main-demand'>
            {/* Text Section */}
            <div className='On-demand'>
                <h1 className='H1'>
                    ON-demand <br /><span style={{ color: "#e20c03" }}>Manufacturing <br /> Platform</span>
                </h1>
                <p>The convenience of instant pricing for laser cut and bended metal parts.</p>
                <br />
                <p>
                    With just a few clicks, you can upload your files of laser cut and bended metal parts,
                    specify your requirements, and receive an accurate quote within minutes.
                    Our innovative tool streamlines the manufacturing process for simple metal parts,
                    saving you time and ensuring cost transparency.
                    Perfect for engineers to place an order in minutes.
                </p>
                <br />
                <p>Experience the ease of getting your price without the wait!</p>
                <br />
                <div className='buttonss'>



                    <Button variant="contained" endIcon={<ArrowForwardIosIcon />}>
                        Get instant quote
                    </Button>
                    <Button variant="contained" endIcon={<ArrowForwardIosIcon />}>
                        How it works
                    </Button>
                </div>
            </div>

            {/* Video Section */}
            <div className="videos">
                <iframe
                    src="https://player.vimeo.com/video/867898342?autoplay=1&loop=1&autopause=0&color=00adef&portrait=0&byline=0&title=0&controls=0&muted=1"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    style={{ width: '100%', height: '100%' }}
                ></iframe>
            </div>
        </div>
    );
}
