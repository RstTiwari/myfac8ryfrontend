import './Footer.css'
import RoomIcon from '@mui/icons-material/Room';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Footer() {
    return (
        <>
            <div>
                <div>
                    <div className="logos">
                        <img src="https://colibrisodm.com/wp-content/uploads/2024/07/colibris-logo-footer.svg" alt="" />
                    </div>
                </div>

                <div className='About-us'>
                    <div className='About-Text' >
                        <h3 style={{fontWeight:"bold"}}>About us</h3>
                        <p  className='About-us-text'>ColibrisODM specializes in on-demand sheet metal
                            manufacturing, offering personalized and precise
                            solutions for complex metal projects through our
                            instant quotation tool, ensuring rapid and accurate
                            pricing for your designs.</p>
                    </div>
                    <div className='Services'>
                        <div className='Services-text'>
                        <h3 style={{fontWeight:"bold"}}>Services</h3>
                        <p>Cutting</p>
                        <p>Forming</p>
                        <p>Welding</p>
                        <p>Machining</p>
                        <p>Coating</p>
                        <p>Assembly</p>
                        <p>Design</p>
                        </div>                 
                    </div>
                    <div className='contact-us'>
                        <h3 style={{fontWeight:"bold"}}>Get in touch</h3>
                        <p> <RoomIcon/> Kareiviu str. 6-530.LT-09117 Vilnius,Lithuania</p>
                        <p> <PhoneEnabledIcon/>+37060041977</p>
                        <p> <EmailIcon/>jbl@colibrisodm.com</p>
                        <p>LT457044090101755730
                            AB SEB Bank, CBVILT2X
                            VAT code LT100014161119
                            UTC +3 / Eastern European Time (EET)</p>
                            <div className='iconss'>
                               
                                <a href=""><FacebookIcon style={{fontSize:"50px"}}/></a>
                               <a href=""> <YouTubeIcon style={{fontSize:"50px"}}/></a>
                                <a href=""><InstagramIcon style={{fontSize:"50px"}}/></a>
                               <a href=""> <LinkedInIcon style={{fontSize:"50px"}}/></a>
                            </div>
                    
                    </div>

                </div>
                <div className="Copyright-footer">
                    <div> Copyright@ColibrisODM2024</div>
                    <div>WEb solution :PK</div>
                    <div> <span>Terms and Conditions</span> <span> Privacy policy</span></div>

                </div>
            </div>
        </>
    )
}