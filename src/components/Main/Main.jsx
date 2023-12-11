import './main.scss'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const Main = () => {
  return (
    <div className='main'>
        <div className="mainWrapper">
            <div className="mainheading">
                <h1> Benefits You Get When <br /> Using Our Services</h1>
        
            <div className="service">
                <div className="content">
                    <h4>Best Quality</h4>
                    <p>All Of Fruniture Uses the Best <br /> Materials and Choices For Our <br /> Customers</p>
                </div>
                <div className="content">
                    <h4><LocalShippingIcon className='Icons'/>Free Shipping</h4>
                    <p>Free Shipping Everytime You Buy <br />Fruniture From Us Without <br />Exeption</p>
                </div>
                <div className="content">
                    <h4>Warranty</h4>
                    <p>Everytime You Buy Our Furniture <br /> Products, You Will Get a Warranty <br />Without Exception</p>
                </div>
            </div>

            <div className="experience">
                <img src="/Assets/int1.jpg" alt="" />

                <div className="h1">
                <h1>We Provide You The <br />Best Experience</h1>
                <p>You don't worry about the results because all of these interiors are <br />
                made by people who are professionals in their fields with an elegant and <br />
                luxurious style and with premium quality materials</p>

            <div className="gained">

            
                <div className="award">
                    <h1>10</h1>
                    <span>years <br />experiences</span>
                </div>
                <div className="award">
                    <h1>35</h1>
                    <span>award <br />gained</span>
                </div>
                <div className="award">
                    <h1>374</h1>
                    <span>furnitures <br />sold</span>
                </div>
                
                </div>
                <button className='btn'>Learn More</button>
                </div>


              
            </div>
            
            </div>
        </div>

        <div className="guidelines">
            <div className="steps">
                <h1>We Provide You The Best <br />Process Experience</h1>
                

                <div className="content">
                <p>01</p>

                <div className='h4'>
                <h4>Briefing</h4>
                <span>First thing you determine the concept and model yoy <br />
                want. then choose what colors and materials you want <br />
                to use in your furniture</span>
                </div>
                </div>
               
                <div className="content">
                <p>02</p>
                <div class="vertical-line"></div>

                <div className='h4'>
                <h4>Processing</h4>
                <span>When the briefing process is complete and what the <br />
                client wants has been achieved then we carry ouut the <br />
                execution of the desired concept</span>
                </div>
                </div>
                

                <div className="content">
                <p>03</p>
                <div class="vertical-line"></div>

                <div className='h4'>
                <h4>Finishing</h4>
                <span>After the is complete, we will immediately carry <br />
                out the finishing stage and we do it carefully and make <br />
                sure there are no mistakes</span>
                </div>
                </div>
                </div>
                
                <div className="contentImg">
                    <img src="/Assets/int2.jpg" alt="" />
                </div>
        </div>
    </div>
  )
}

export default Main