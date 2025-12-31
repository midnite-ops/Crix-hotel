import gal1 from '../assets/gallery/gal-1.jpg';
import gal2 from '../assets/gallery/gal-2.jpg';
import gal3 from '../assets/gallery/gal-3.jpg';
import gal4 from '../assets/gallery/gal-4.jpg';
import gal5 from '../assets/gallery/gal-5.jpg';
export default function Gallery() {
  return (
    <section id='gallery' className='section-spacing'>
        <div className='flex flex-col justify-center items-center mb-10 '>
            <h1 className='text-center mb-5 font-light'>Hotel Gallery</h1>
            <p className='text-center w-[80%] md:w-[60%]'>Take a look at our rooms, reception area, and relaxing environment designed to make your stay enjoyable.</p>
        </div>

        <div className="grid grid-cols-1 grid-rows-5 md:grid-cols-3 md:grid-rows-2 gap-6">
            <div className='md:row-span-2 md:col-span-1 overflow-hidden'>
                <img src={gal3} alt="a hotel image" className='w-full h-full object-cover ' />
            </div>
            <div className='overflow-hidden'>
                <img src={gal1} alt="a hotel image" className='w-full h-full object-cover' />
            </div>
            <div className='overflow-hidden'>
                <img src={gal2} alt="a hotel image" className='w-full h-full object-cover' />
            </div>
            <div className='overflow-hidden'>
                <img src={gal4} alt="a hotel image" className='w-full h-full object-cover ' />
            </div>
            <div className='overflow-hidden'>
                <img src={gal5} alt="a hotel image" className='w-full h-full object-cover' />
            </div>
        </div>
        
    </section>
  )
}
