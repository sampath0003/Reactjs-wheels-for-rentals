import "./Footer.css"
const Footer=()=>{
    return(
        <div className="footer">
            <div className="top">
            <div>
            <h1>Wheels For Rentals</h1>
            <p>choose your favourite wheels</p>
            </div>
            <div>
             <a href="/">
                <i className="fa-brands fa-facebook-square"></i>
                </a> 
                <a href="/">
                <i className="fa-brands fa-instagram-square"></i>
                </a> 
                <a href="/">
                <i className="fa-brands fa-behance-square"></i>
                </a> 
                <a href="/">
                <i className="fa-brands fa-twitter-square"></i>
                </a>   
            </div>
            </div>
            <div className="bottom">
            <div>
                <h4>project</h4>
                <a href="/">Changelog</a>
                <a href="/">Status</a>
                <a href="/">License</a>
                <a href="/">All Versions</a>
            </div>
            <div>
                <h4>Community</h4>
                <a href="/">GitHub</a>
                <a href="/">Issues</a>
                <a href="/">Project</a>
                <a href="/">Twitter</a>
            </div>
            <div>
                <h4>Others</h4>
                <a href="/">Terms of Services</a>
                <a href="/">Privacy Policy</a>
                <a href="/">License</a>
               
            </div>
            </div>
        </div>
    )
}
export default Footer;