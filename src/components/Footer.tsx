import facebook from '../assets/facebook-icon.png';
import instagram from '../assets/instagram-icon.png';
import twitter from '../assets/twitter-icon.png'

export default function Footer() {
  return (
    <footer className='py-5 px-5 md:px-10 bg-secondaryColor'>
        <div className='flex flex-col md:flex-row justify-between gap-5 md:gap-0 md:items-center'>
            <div className='mb-5'>
                <h1 className="text-3xl md:text-4xl">Crix Nook</h1>
            </div>
            <div>
                <ul className="flex flex-col md:flex-row gap-3 font-mont">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#rooms">Rooms and Suite</a></li>
                    <li><a href="#amenities">Amenities</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                </ul>
            </div>
            <div className="flex flex-col gap-3 mt-8 border-t-textColor ">
                <h2 className='md:hidden'>Connect with us</h2>
                <div className='flex gap-3'>
                    <img src={facebook} alt="a facebook icon" className='w-7 cursor-pointer'/>
                    <img src={instagram} alt="an instagram icon" className='w-7 cursor-pointer'/>
                    <img src={twitter} alt=" a twitter icon" className='w-7 cursor-pointer'/>
                </div>
                
                
            </div>
        </div>
        <div className='border-t border-t-textColor mt-8 pt-3'>
                <p className='text-center'>2025 <span className="font-mont">Crix Nook</span>. All rights reserved.</p>
            </div>
    </footer>
  )
}
