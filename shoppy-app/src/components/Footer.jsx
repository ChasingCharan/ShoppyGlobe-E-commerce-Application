import insta_icon from "../assets/img/instagram-icon.png";
import wp_icon from "../assets/img/whatsapp-icon.png";
import fb_icon from "../assets/img/facebook-icon.png";
import footer_logo from "../assets/img/logo.png";

function Footer(){
    return(
        <footer className='flex flex-col items-center w-[99vw] overflow-hidden'>
            <div className="flex md:my-5 my-1 items-center justify-center">
                <img src={footer_logo} className='h-10 w-10 md:h-20 md:w-20' alt="footer logo" />
                <p className='font-bold text-lg md:text-3xl'>ShoppyGlobe</p>
            </div>
            <ul className='flex space-x-5 text-sm md:text-2xl'>
                
            </ul>
            <ul className='flex my-3 space-x-5'>
                <li><a href="https://www.instagram.com" target='_blank'><img src={insta_icon} className='w-7 h-7 md:h-12 md:w-12' alt="instagram social link" /></a></li>
                <li><a href="https://www.whatsapp.com" target='_blank'><img src={wp_icon} className='w-7 h-7 md:h-12 md:w-12' alt="Whats up social link" /></a></li>
                <li><a href="https://www.facebook.com" target='_blank'><img src={fb_icon} className='w-7 h-7 md:h-12 md:w-12' alt="facebook social link" /></a></li>
            </ul>
            <div className='md:text-md text-sm my-2'>Copyright 2025. All rights reserved.</div>
        </footer>
    )
}

export default Footer;