import heroBg from "@/assets/hero/hero-bg.jpg";
import Navbar from "../components/Navbar";
function Home() {
  return (
    <main>
      <section id="hero" className="min-h-screen relative w-full ">
        {/* 
        <div className="absolute inset-0 bg-black/40"></div> */}
        <Navbar />
        <div className="relative min-h-screen z-10 flex flex-col justify-evenly items-center px-6 ">
          <div>
            <h1 className="font-extrabold text-7xl text-center mb-5">
              Crix Nook Hotel
            </h1>
            <p className="mt-4 max-w-xl  text-center">
              From carefully designed rooms to attentive service, every detail
              is crafted to give you a comfortable, relaxing, and memorable
              stay.
            </p>
          </div>
          <img
            src={heroBg}
            alt="hero background"
            className=" h-75 w-full object-cover"
          />
        </div>
      </section>
    </main>
  );
}

export default Home;
