import FooterCSS from './css/footer.css';
function Footer()
{
    return (
        <footer class="foot">
        <hr/>
        <div class="container">
        <section class="foot-sec1">
            <div class="foot-sec1-rakuinfo">
                <h3 class="foot-sec1-rakuinfo-h3">RAKUTECH</h3>
                <p class="foot-sec1-rakuinfo-p">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore et voluptatum natus provident explicabo inventore,
                    incidunt sapiente temporibus eius atque! Corporis excepturi
                    nihil minima mollitia! Eveniet pariatur vitae ipsum earum!</p>
            </div>
            <div class="foot-sec1-follow">
                <h5 class="foot-sec1-follow-h5">Follow Us</h5>
                <p class="foot-sec1-follow-p">Since the 1500s, when an unknown printer took a gallery of type and scrambled.</p>
                <div class="foot-sec1-fticons">
                    <i class="fab fa-facebook-f foot-sec1-fticons-fb"></i>
                    <i class="fab fa-twitter foot-sec1-fticons-twit"></i>
                </div>
            </div>
            <div class="foot-sec1-contact">
                <h5 class="foot-sec1-contact-h5">Contact Us</h5>
                <p class="foot-sec1-contact-p">My company, 4578 Marmora Road, Glasgow
                   <span>D04 89GR</span> 
                   <span> Call us now: 0123-456-789</span>
                   <span>Email:support@whatever.com</span> 
                </p>
            </div>
        </section>
        <hr/>
    </div>
        <div class="container">
        <section class="foot-sec2">
            <div class="foot-sec2-information">
                <h5>Information</h5>
                <p>About Us</p>
                <p>Information</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
            <div class="foot-sec2-services">
                <h5>Services</h5>
                <p>About Us</p>
                <p>Information</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
            <div class="foot-sec2-extras">
                <h5>Extras</h5>
                <p>About Us</p>
                <p>Information</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
            <div class="foot-sec2-myaccount">
                <h5>My Account</h5>
                <p>About Us</p>
                <p>Information</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
            <div class="foot-sec2-usefullinks">
                <h5>Useful Links</h5>
                <p>About Us</p>
                <p>Information</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
            <div class="foot-sec2-ouroffers">
                <h5>Our Offers</h5>
                <p>About Us</p>
                <p>Information</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>  
        </section>
    </div>
        <hr/>
        <div class="container">
        <section class="foot-sec3">
        <span class="foot-sec3-copyright">© 2018 Ecommerce theme by www.bisenbaev.com</span>
        <figure class="foot-sec3-paymentIcon">
        <img src="/Frontend-final-exercise/Western-union.png" alt="" />
        <img src="/Frontend-final-exercise/Group 19.png" alt="" />
        <img src="/Frontend-final-exercise/Paypal.png" alt="" />
        <img src="/Frontend-final-exercise/visa.jpg" alt="" />
        </figure>
        </section>
        </div>  
    </footer>
    );
}

export default Footer;