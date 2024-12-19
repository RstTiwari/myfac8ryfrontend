import CountUp from 'react-countup'
import '../HeroSection/Whyus.css'
export default function Whyus() {
    return (
        <>
            <div>
                <h1 style={{marginTop:"5%",marginLeft:"3%"}}>Why us ?</h1>
                <div className="count">
                    <div className="kcount">
                    <h1>&gt; <CountUp start={0} end={200} duration={3} delay={1}/>k</h1>
                        <p>
                            hours of monthly capacity
                        </p>
                    </div>
                    <div className="manufacturing">
                    <h1 style={{color:"red"}}><CountUp start={0} end={10} duration={3} delay={1}/>+</h1>
                        <p>
                            manufacturing facilities
                        </p>
                    </div>
                    <div className="main exporting">
                    <h1 ><CountUp start={0} end={11} duration={3} delay={1}/></h1>
                        <p>
                            main exporting countries

                        </p>
                    </div>
                    <div className="days">
                    <h1 style={{color:"red"}}><CountUp start={0} end={12} duration={3} delay={1}/></h1>
                        <p>
                            days average lead time
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}