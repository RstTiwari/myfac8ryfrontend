import CountUp from 'react-countup'
import '../HeroSection/Whyus.css'
import Button from '@mui/material/Button';
export default function Whyus() {
    return (
        <>
            <div>
                <h1 style={{ marginTop: "5%", marginLeft: "3%" }}>Why us ?</h1>
                <div className="count">
                    <div className="kcount">
                        <h1>&gt; <CountUp start={0} end={200} duration={3} delay={1} />k</h1>
                        <p className='Texts'>
                            hours of monthly capacity
                        </p>
                    </div>
                    <div className="manufacturing">
                        <h1 style={{ color: "red" }}><CountUp start={0} end={10} duration={3} delay={1} />+</h1>
                        <p className='Texts'>
                            manufacturing facilities
                        </p>
                    </div>
                    <div className="main exporting">
                        <h1 ><CountUp start={0} end={11} duration={3} delay={1} /></h1>
                        <p className='Texts'>
                            main exporting countries

                        </p>
                    </div>
                    <div className="days">
                        <h1 style={{ color: "red" }}><CountUp start={0} end={12} duration={3} delay={1} /></h1>
                        <p className='Texts'>
                            days average lead time
                        </p>
                    </div>
                </div>

                <div className="textmaindiv">
                    <div className='ptext'> <p> Not sure how to get product sketch?</p></div>
                    {/* <div className='buttons1' >
                        <button ><p>call us now +37060041944</p></button>
                        <button ><p>Book a technical consultation with us</p></button>
                    </div> */}
                
                <div className='buttons1'>
                    <Button style={{backgroundColor:"white",color:"red"}} >
                    Not sure how to get product sketch?
                    </Button>
                    <Button style={{backgroundColor:"white",color:"red"}} >
                    Book a technical consultation with us
                    </Button>
                </div>
                </div>

            </div>
        </>
    )
}