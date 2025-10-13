import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <main className="bg-purple-100">
        <section className="grid grid-cols-2 h-[60vh]">
          <div className="flex flex-col justify-center items-center gap-2.5 text-center">
            <p className={`font-bold text-3xl ${poppins.className} `}>The best URL shortener in the Market</p>
            <p className="px-12">We are the most straightforward URL Shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener</p>
            <div className='flex gap-2 font-bold justify-center text-white'>
              <Link href="/shorten"><button className='bg-purple-500 px-3 py-1 rounded-lg cursor-pointer'>Try Now</button></Link>
              <Link href="/github"><button className='bg-purple-500 px-3 py-1 rounded-lg cursor-pointer'>Github</button></Link>
            </div>
          </div>
          <div className=" relative">
            <Image className="mix-blend-darken" alt="an image of vector" src={"/vector.jpg"} fill={true} />
          </div>


        </section>
      </main>
    </>
  );
}
