import './footer.scss';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerWrapper">
            <div className="newsletter">
                <span>Subscribe to get the latest</span>
                <p>news about us</p>

                <div className="about">
                    <span>We recommended you to subscribe to our newspaper, enter your</span>
                    <p>email below to get our daily update about us</p>
                </div>
            </div>

            <div className='email'>
                <input type="email" placeholder='Enter your adress'/>
                <button>subscribe</button>
            </div>
        </div>

        <div className="footerDetails">
        <div className="footerpage">
            <div className="footerLinks">
                <div className="Locations">
                    <h1>Live<span>Decor</span></h1>
                    <p>We will help you to make a <br />
                    luxurious interior designed by a <br />
                    professional interior designer</p>

                    <div className="social">
                        <InstagramIcon className='Icon'/>
                        <FacebookIcon className='Icon'/>
                        <YouTubeIcon className='Icon'/>
                    </div>
                  
                </div>

                <div className="Locations">
                    <h2>Product</h2>
                    <a href="/"><p>Take a test decor</p></a>
                    <a href="/"><p>Why live decor</p></a>
                    <a href="/"><p>features</p></a>
                    <a href="/"><p>Pricing</p></a>
                    <a href="/"><p>Franchise</p></a>
                </div>


                <div className="Locations">
                    <h2>Support</h2>
                    <a href="/"><p>Contact</p></a>
                    <a href="/"><p>Help Center</p></a>
                    <a href="/"><p>Join a webinar</p></a>
                    <a href="/"><p>Hire a certificated specialist</p></a>
                </div>

                <div className="joinOur">
                   <span>Join Our Newsletter</span>
                   <input type="email"/>
                <button>subscribe</button>
                <p>We will send you weekly updates to your better <br />
                tour packages</p>
                </div>
                </div>

                </div>
                </div>
    </div>
  )
}

export default Footer