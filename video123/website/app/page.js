import Image from "next/image";

export default function Home() {
  return (
    <div className="container my-5">
      <Image className="mx-auto"
      src="https://www.hubspot.com/hubfs/wordpress-slider-plugins.jpeg"
      alt="Picture of the author"
      width={500}
      height={500}
    />
    </div>
  );
}
