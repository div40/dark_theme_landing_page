import gearImage from "../assets/images/helix2.png";
import pieImage from "../assets/images/emojistar.png";
import Image from "next/image";

export const CTA = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 text-center">
      <div className="container max-w-xl relative">
        <Image
          src={gearImage}
          className="absolute top-6 left-[calc(100%+36px)]"
          alt=""
        />
        <Image
          src={pieImage}
          className="absolute -top-[120px] right-[calc(100%+24px)]"
          alt=""
        />
        <h2 className="font-bold text-5xl sm:text-6xl tracking-tighter">
          Get instant access
        </h2>
        <p className="text-xl text-white/70 mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, dolore.
        </p>
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input
            type="email"
            placeholder="you@email.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"
          />
          <button
            type="submit"
            className="bg-white text-black h-12 rounded-lg px-5"
          >
            Get access
          </button>
        </form>
      </div>
    </div>
  );
};
