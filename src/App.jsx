import sana from "./assets/sana.png"
import sana2 from "./assets/sana2.png"
import sana3 from "./assets/sana3.png"
import logo from "./assets/logo.png"
import rasm from "./assets/rasm.png"
import rasm2 from "./assets/rasm2.png"
import rasm3 from "./assets/rasm3.png"
import rasm4 from "./assets/rasm4.png"
import rasm5 from "./assets/rasm5.png"
import rasm847 from "./assets/rasm847.png"
import rasm6 from "./assets/rasm6.png"
import rasm67 from "./assets/rasm67.png"
import rasm68 from "./assets/rasm68.png"
import rasm7 from "./assets/rasm7.png"
import rasm8 from "./assets/rasm8.png"
import rasm9 from "./assets/rasm9.png"
import rasm10 from "./assets/rasm10.png"
import rasm11 from "./assets/rasm11.png"
import rasm12 from "./assets/rasm12.png"
import woman from "./assets/woman.png"
import icon1 from "./assets/icon1.png"
import icon2 from "./assets/icon2.png"
import star1 from "./assets/star1.png"
import hovuz from "./assets/hovuz.png"
import icon3 from "./assets/icon3.png"
import icon4 from "./assets/icon4.png"
import icon5 from "./assets/icon5.png"
import icon6 from "./assets/icon6.png"
import icon7 from "./assets/icon7.png"

import './App.css'

function App() {

  return (
    <>
      <nav>
         <img src={logo}/>
       <ul>
        <li a>booking</li>
        <li a>facilities</li>
        <li a>about us</li>
        <li a>location</li>
        <li a>contact</li>
        </ul> 
             <buttonc className="button1">Sign in</buttonc>
        </nav>
            {/*  */}
         <div className='section1'>
          <div>
            <h1>Find Your Best Hotel <br></br>
               for Deals</h1>
               <p>lorem Ipsum is simply dummy text of the printing <br></br>
                 and typesetting industry.</p>
          </div>
          <div>
            <img src={sana}/>
            <img src={sana2}/> <br></br>
            <img className="img1" src={sana3}/>
          </div>
         </div>
           {/*  */}
         <div className="section2">
         <div> <img src={rasm}/></div>
         <div>
          <img src={rasm2}/> <br></br>
          <img className="rasm3" src={rasm3}/>
         </div>
         </div>
         {/*  */}
         
          <div className="image2">
            <h1>Facilities & Service</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br></br> Lorem Ipsum has been the industry's standard dummy </p></div>

          <div className="section3">
          <div className="images">
             <img src={rasm4}/>
             <h5>Private Workspace</h5>
             <h6>Lorem Ipsum is simply dummy text <br></br> of the printing and typesetting <br></br> industry. Lorem Ipsum has</h6>
             </div>

              <div className="images">
             <img src={rasm5}/>
             <h5>Parking Area</h5>
             <h6>Lorem Ipsum is simply dummy text <br></br> of the printing and typesetting <br></br> industry. Lorem Ipsum has</h6>
             </div>

              <div className="images">
             <img src={rasm67}/>
             <h5>Free Wifi</h5>
             <h6>Lorem Ipsum is simply dummy text <br></br> of the printing and typesetting <br></br> industry. Lorem Ipsum has</h6>
             </div>

              <div className="images">
             <img src={rasm68}/>
             <h5>Breakfast</h5>
             <h6>Lorem Ipsum is simply dummy text <br></br> of the printing and typesetting <br></br> industry. Lorem Ipsnum has</h6>
             </div>
         </div> 

         {/*  */}
         <div className="section4">
             <div>
              <img src={rasm847}/>
             </div>
             <div>
              <h2>Finest Luxury Hotels <br></br>  resort</h2>
              <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text ever since the <br></br> 1500s, when an unknown printer took a galley of type and scrambled it to <br></br> make a type specimen book.</h6>
              <div className="images6">
                <div><img className="images7" src={rasm6}/></div>
              <div></div>
              <div><img className="images7" src={rasm6}/></div>
              <div><img className="images7" src={rasm6}/></div>
              </div>
              <button className="button2">explore more</button>
             </div>
         </div>
         <div className="section5">
          <img src={rasm7}/>
            <div><img src={rasm8}/></div>
            <div><img src={rasm9}/></div>
            <div><img src={rasm10}/></div>
            <div><img src={rasm11}/></div>
         </div>
         <div className="section6">
          <div><img className="rasm12" src={rasm12}/></div>
          <div className="shape">
                <img src={woman}/>
                <h4>Nazmul Nabeel</h4>
                <p>“Lorem Ipsum is simply dummy text of <br></br> the printing and typesetting industry. <br></br> Lorem Ipsum has been the industry's <br></br> standard dummy text ever since the ”</p>
                <img src={icon1}/>
          </div>
         </div>

         <div className="section7">
          <h1>Best Quality Hotels</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and <br></br> typesetting industry.</p>
          <div className="button">
            <img src={star1}/>
            <img src={star1}/>
            <img src={star1}/>
            <img src={star1}/>
            <img src={star1}/>
            <img className="icon2" src={icon2}/>
          </div>
         </div>
         <div className="section8">
          <div className="hovuz">
            <img src={hovuz}/>
            <h4>Swimming pool and beach of luxury...</h4>
            <p>Lorem Ipsum is simply dummy text of the printing <br></br> and typesetting industry.</p>
            <div className="iconwrap">
              <button className="button3">Details</button>
            </div>
                      
         </div>

         <div className="hovuz">
            <img src={hovuz}/>
            <h4>Swimming pool and beach of luxury...</h4>
            <p>Lorem Ipsum is simply dummy text of the printing <br></br> and typesetting industry.</p>
            <div className="iconwrap">
              <button className="button3">Details</button>
            </div>
                      
         </div>

         <div className="hovuz">
            <img src={hovuz}/>
            <h4>Swimming pool and beach of luxury...</h4>
            <p>Lorem Ipsum is simply dummy text of the printing <br></br> and typesetting industry.</p>
            <div className="iconwrap">
              <button className="button3">Details</button>
            </div>
                      
         </div>
         </div>

         <div className="section9">
          <div className="icon3wrap">
            <h1>Subscribe for our mailing list to get <br></br> latest updates and offers</h1>
            <p>Lorem Ipsum is simply dummy text of the printing<br></br>and typesetting industry. Lorem Ipsum has been the industry's </p>
            <img src={icon3}/>
          </div>
         </div>


         <div className="section10">
          <div>
            <img src={icon4}/>
            <p>Lorem Ipsum is simply dummy text  <br></br>of the printing and typesetting <br></br> industry.</p>
            <div className="iconwrap10">
              <div><img src={icon5}/></div>
            <div><img src={icon6}/></div>
            <div><img src={icon7}/></div>
            </div>
          </div>
          <div>
            <h4>Home</h4>
            <p>Booking</p>
            <p>Facilities</p>
            <p>Location</p>
            <p>Contact</p>
          </div>
          <div>
            <h4>
              Help
            </h4>
            <p>About Us</p>
            <p>Help center</p>
            <p>Privacy policy</p>
            <p>FAQs</p>
          </div>
          <div>
            <h4>Get the app</h4>
            <p>iOS app</p>
            <p>Android app</p>
          </div>
         </div>

 
    </>
  )
}

export default App
