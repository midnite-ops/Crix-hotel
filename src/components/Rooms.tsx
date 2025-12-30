import standard from '../assets/rooms/standard .jpg';
import deluxe from '../assets/rooms/deluxe.jpg';
import suite from '../assets/rooms/exquisite.jpg';
export default function Rooms() {
  return (
    <section className="section-spacing">
        <div className="flex flex-col  h-full w-full">
            <div className="flex justify-center items-center flex-col mb-10 gap-3">
                <h1 className="text-center">Rooms and Suite</h1>
                <p className="text-center">
                    Choose from a range of rooms designed to suit your comfort and budget.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 space-x-6">
                <div className='row-span-2 bg-amber-600'>
                    <img src={suite} alt="suite room" className='h-full object-cover'/>
                </div>
                <div>
                    <img src={standard} alt="standard room"  className='h-full object-cover'/>
                </div>
                <div>
                    <img src={deluxe} alt="deluxe room" />
                </div>
            </div>
        </div>
    </section>
  )
}
