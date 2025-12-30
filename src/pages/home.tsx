import heroBg from "@/assets/hero/hero-placeholder.jpg";
import Navbar from "../components/Navbar";
import Rooms from "@/components/Rooms";
function Home() {
  return (
    <main>
      <section id="hero" className="min-h-screen relative w-full ">
        {/* 
        <div className="absolute inset-0 bg-black/40"></div> */}
        <Navbar />
        <div className="min-h-screen flex flex-col md:justify-between items-center px-6 md:mt-10">
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="font-light text-7xl text-center mb-5">
              Crix Nook Hotel
            </h1>
            <p className="mt-4 max-w-xl  text-center">
              From carefully designed rooms to attentive service, every detail
              is crafted to give you a comfortable, relaxing, and memorable
              stay.
            </p>
          </div>
          <div className="w-screen flex-2 md:min-h-screen relative">
            <img
                src={heroBg}
                alt="hero background"
                className="absolute inset-0 h-full w-full object-cover md:mt-10"
            />
          </div>
          
        </div>
      </section>

      <section id="about" className="bg-secondaryColor h-155 section-spacing pt-15">
        <div className="flex flex-col md:flex-row h-full w-full">
            <div className="flex-1">
                <h1>About <br className="hidden md:block"/> Crix Nook Hotel</h1>
            </div>
            <div className="flex-2 md:flex-1 flex flex-col justify-start md:justify-end "> 
                <div className="space-y-4 mb-10">
                    <p>
                    Crix Nook Hotel is a newly opened hospitality destination created to provide guests with a comfortable, peaceful, and reliable place to stay.
                    </p>
                    <p>
                        Our rooms are thoughtfully designed, our services are dependable, and our location makes it easy for guests to relax or get around the city with ease.
                    </p>
                </div>
                <button className="self-start btn-primary">Learn More</button>
            </div>
        </div>
      </section>

      <Rooms />
    </main>
  );
}

export default Home;
