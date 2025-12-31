import heroBg from "@/assets/hero/hero-placeholder.jpg";
import Navbar from "../components/Navbar";
import Rooms from "@/components/Rooms";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
function Home() {
  return (
    <main>
      <section id="home" className="min-h-screen relative w-full ">
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

      <section id="about" className="bg-secondaryColor h-155 section-spacing pt-15 md:pt-20">
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

      <section id="amenities" className="section-spacing bg-secondaryColor h-auto md:h-200 py-15">
        <div className="flex flex-col md:flex-row h-full w-full">
          <div className=" flex-1 flex items-end">
            <h1>Amenities <br /> & Facilities</h1>
          </div>

          <div className="flex-1 self-start grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-y-10 gap-x-10 md:gap-y-20 mt-10 md:mt-0">
            <div className="border-l-textColor border-l pl-5">
              <h2 className="font-garamond text-2xl mb-2">Free Wifi</h2>
              <p className="text-base">Stay connected effortlessly with fast and reliable internet access throughout the hotel. Perfect for business travelers, remote work, and guests who want to stream, browse, or stay in touch without interruptions.</p>
            </div>

            <div className="border-l-textColor border-l pl-5">
              <h2 className="font-garamond text-2xl mb-2">On-Site Dining</h2>
              <p className="text-base">Enjoy freshly prepared meals made from carefully selected ingredients. Our dining experience offers a mix of local and international flavors, served in a relaxed and welcoming atmosphere..</p>
            </div>

            <div className="border-l-textColor border-l pl-5">
              <h2 className="font-garamond text-2xl mb-2">24/7 Guest Services</h2>
              <p className="text-base">Our front desk and guest services are available around the clock to ensure a smooth and comfortable stay. From check-ins to special requests, help is always just a moment away.</p>
            </div>

            <div className="border-l-textColor border-l pl-5">
              <h2 className="font-garamond text-2xl mb-2">Elegant Rooms & Suites</h2>
              <p className="text-base">Thoughtfully designed rooms that blend modern comfort with warm, calming interiors. Each space is crafted to give guests a peaceful retreat, whether they’re staying for a night or an extended visit.</p>
            </div>
          </div>
        </div>
      </section>
      <Gallery />
      <Footer />
    </main>
  );
}

export default Home;
