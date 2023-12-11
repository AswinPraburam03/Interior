import './blogs.scss'

const Blogs = () => {
  return (
    <div className='blogs'>
        <div className="blogWrapper">
            <div className="ourCustomers">
                <h1>We Our Customers <br />
                are Saying</h1>
            </div>

            <div className="review">

            

            <div className="quotes">
                <div className="content">
                
                    <img src="/Assets/quot2.png" alt="" />
                <span>The results given are very <br />
                satisfying</span>
                <p>First thing you determine the concept and model you<br />
                want. then choose what colors and materials you want to use <br />
                in your furniture</p>
                    <div className="customerImg">

                    
                <div className="customer">
                    <img src="/Assets/propic.jpg" alt="" /> 
                    <span>David Edwards</span>
                   </div>    
                    </div>  
                </div>
              
                    
              
            </div>
            <div className="quotes">
                <div className="content">
                
                    <img src="/Assets/quot2.png" alt="" />
                <span>The service provided is very <br />
                good and friendly</span>
                <p>First thing you determine the concept and model you<br />
                want. then choose what colors and materials you want to use <br />
                in your furniture</p>
                    <div className="customerImg">

                    
                <div className="customer">
                    <img src="/Assets/postpic.jpg" alt="" /> 
                    <span>Kane</span>
                   </div>    
                    </div>  
                </div> 
            </div>
            </div>
        </div>
    </div>
  )
}

export default Blogs