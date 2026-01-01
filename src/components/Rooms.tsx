import standard from '../assets/rooms/standard .webp';
import deluxe from '../assets/rooms/deluxe.webp';
import suite from '../assets/rooms/exquisite.webp';
export default function Rooms() {
  return (
    <section className="section-spacing" id='rooms'>
        <div className="flex flex-col  h-full w-full">
            <div className="flex justify-center items-center flex-col mb-10 gap-3">
                <h1 className="text-center">Rooms and Suite</h1>
                <p className="text-center">
                    Choose from a range of rooms designed to suit your comfort and budget.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-6">
                <div className='row-span-2 cursor-pointer relative overflow-hidden group'>
                    <img src={suite} alt="suite room" className='h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105' loading='lazy'/>

                    {/* Overlay with title and description */}
                    <div className="absolute inset-0  md:group-hover:bg-black/60 bg-black/60 md:bg-transparent  transition-colors duration-500 " />

                    {/* Text with slide up effect */}
                    <div className="absolute bottom-10 left-2 md:bottom-0 md:left-0 right-0 p-4 md:p-8 bg-linear-to-t">
                        <div className="transform translate-y-8 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500">
                        <h1 className="text-white text-4xl md:text-5xl mb-3 font-semibold">Exquisite Suite</h1>
                        <p className="text-gray-300 leading-relaxed w-full md:w-[80%]">
                            A premium space designed for executives and families seeking a more refined stay.
                        </p>
                        </div>
                    </div>
                </div>

                 

                <div className='cursor-pointer relative overflow-hidden group'>
                    <img src={deluxe} alt="suite room" className='h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105' loading='lazy'/>

                    {/* Overlay with title and description */}
                    <div className="absolute inset-0  md:group-hover:bg-black/60 bg-black/60 md:bg-transparent transition-colors duration-500 " />

                    {/* Text with slide up effect */}
                    <div className="absolute bottom-10 left-2 md:bottom-0 md:left-0 right-0 p-4 md:p-8 bg-linear-to-t">
                        <div className="transform translate-y-8 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500">
                        <h1 className="text-white text-4xl md:text-5xl mb-3 font-semibold">Deluxe Suite</h1>
                        <p className="text-gray-300 leading-relaxed w-full md:w-[80%]">
                            A spacious room with modern interior finishes, perfect for guests who want extra comfort.
                        </p>
                        </div>
                    </div>
                </div>

                <div className='cursor-pointer relative overflow-hidden group'>
                    <img src={standard} alt="suite room" className='h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105' loading='lazy'/>

                    {/* Overlay with title and description */}
                    <div className="absolute inset-0 bg-black/60 md:bg-transparent  md:group-hover:bg-black/60 transition-colors duration-500 " />

                    {/* Text with slide up effect */}
                    <div className="absolute bottom-10 left-2 md:bottom-0 md:left-0 right-0 p-4 md:p-8 bg-linear-to-t">
                        <div className="transform translate-y-8 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500">
                        <h1 className="text-white text-4xl md:text-5xl mb-3 font-semibold">Standard Suite</h1>
                        <p className="text-gray-300 leading-relaxed w-[80%]">
                            A comfortable and affordable option, ideal for short stays and solo travelers.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
