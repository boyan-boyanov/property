import { Link } from "react-router-dom"
import GoogleMapComponent from "../GoogleMapComponent/GoogleMap"
import "./about.css"


const AboutComponent = () => {
    const varna = {lat:43.221850, lng: 27.876106} 
    const devnja = {lat:43.222893, lng: 27.569000}

    return (
        <>
            <div>
                <div className="banner-container">
                    <h1 className="banner-text">About us</h1>
                </div>
                <div className="about-home-container">
                    <ol className="about-home_ol">
                        <li>
                            <Link className="about-home__home-link" to="/">Home</Link>
                        </li>
                        <li className="about-home__aboutUs-link">About us</li>
                    </ol>
                </div>
                <div className="conftext-3472">
                    <h2 className="conftext-3472_h2">Rightmove’s purpose is to make home moving easier in the Bulgaria.</h2>
                    <h3 className="conftext-3472_h3">We do this by creating a simpler and more efficient property marketplace.</h3>
                </div>

                <section className="about-all-card">

                    <div className="about-card-container">
                        <div className="about-card">
                            <div className="box-signpost-placeholder box1" ></div>
                            <div className="box-signpost-content">
                                <div className="box-component-title">Leadership</div>
                                <p className="box-component-p">  The Board fosters an environment of entrepreneurial leadership and innovation, within a framework of responsible governance and risk management.</p>
                                <p className="box-component-primary">
                                    <Link className="box-component-primary-link" to="/about">Leadership</Link>
                                </p>
                            </div>
                        </div>

                        <div className="about-card">
                            <div className="box-signpost-placeholder box2" ></div>
                            <div className="box-signpost-content">
                                <div className="box-component-title">Culture &amp; Values</div>
                                <p className="box-component-p"> At the heart of everything we do is Rightmove’s open, innovative and supportive culture, which reflects the values of our Board and Senior Leadership Team.</p>
                                <p className="box-component-primary">
                                    <Link className="box-component-primary-link" to="/about">Values &amp; Culture</Link>
                                </p>
                            </div>
                        </div>
                        <div className="about-card">
                            <div className="box-signpost-placeholder box3" ></div>
                            <div className="box-signpost-content">
                                <div className="box-component-title">Our strategy</div>
                                <p className="box-component-p">  Rightmove’s strategy is to be the place consumers turn to first and engage with most, which provides an unrivalled audience and value for our customers, and we do this by innovating to create a simpler and more efficient market place and building great teams.</p>
                                <p className="box-component-primary">
                                    <Link className="box-component-primary-link" to="/about">Read our strategy</Link>
                                </p>
                            </div>
                        </div>
                        <div className="about-card">
                            <div className="box-signpost-placeholder box4" ></div>
                            <div className="box-signpost-content">
                                <div className="box-component-title">History</div>
                                <p className="box-component-p">  Rightmove was formed in 2000, floated on the London Stock Exchange in 2006 and is now a FTSE 100 company.</p>
                                <p className="box-component-primary">
                                    <Link className="box-component-primary-link" to="/about">See all timeline</Link>
                                </p>
                            </div>
                        </div>




                    </div>


                </section>

            </div>
            <GoogleMapComponent aboutMarks={[varna, devnja]} />
        </>
    )
}

export default AboutComponent