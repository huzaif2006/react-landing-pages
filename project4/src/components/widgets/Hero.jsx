import Button1 from "../shared/Button1";

function Hero() {
  return (
    <section className="pt-50 pb-50 rounded-4xl m-2  bg-gradient-to-b from-[#f8cee5] via-[#d9bdf8] to-[#c8e8fd] flex justify-center items-center flex-col">
      <h1 className="text-3xl sm:text-5xl md:text-6xl capitalize font-bold text-center px-[10%] md:px-[20%]">
        Transform Your Ideas into Digital Experiances
      </h1>
      <p className="text-[13px] md:text-base text-center my-8 px-[15%] md:px-[25%]">
        Empower your creativity, shape your digital identity, and showcase your
        unique vision with  ituitive tools and seamless user experiance{" "}
        <b>Let's start no coding skills required</b>
      </p>
      <div>
        <Button1 text="Start Building Now"/>
        <button className="py-3 px-5 md:px-8 text-[14px] md:text-base bg-white font-semibold rounded-xl ml-4">Get a Demo</button>

      </div>
        <a href="" className=" font-medium my-3 text-sm">Try Flow, no credit card required</a>
    </section>
  );
}

export default Hero;
