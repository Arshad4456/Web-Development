// import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="container mx-auto">
      <div className="get-chai text-white pt-10 pb-10">
        <div className=" teagif flex justify-center items-center">
        <h1 className="text-3xl font-bold">Get Me a Chai</h1>
          <img width={88} src="/tea.gif" alt="" />
        </div>

        <div className="twoparas flex flex-col justify-center items-center">
        <p>A crowdfunding platform for creators to fund their projects.</p>
        <p>A piece where your fans can buy you a chai.Unleash the power of your fans and get your projects funded.</p>
        </div>

        <div className="twobuttons flex justify-center items-center pt-3">
          <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </div>
      </div>

      <div className="break bg-white h-1 opacity-10"></div>

      <div className="secondsec text-white flex flex-col justify-center items-center pt-10 pb-16">
        <div><h2 className="font-bold text-2xl pb-6">
          Your Fans can buy you a Chai
          </h2></div>
          <div className="threeicons flex justify-around items-center w-full">
            <div className="isticon flex flex-col justify-center items-center">
              <img className="bg-gray-400 rounded-full" width={44} src="/man.gif" alt="" />
              <p>Fans want to help</p>
              <p>Your Fans are available to support you</p>
            </div>
            <div className="secondicon flex flex-col justify-center items-center">
              <img className="bg-gray-400 rounded-full" width={44} src="/coin.gif" alt="" />
              <p>Fans want to contribute</p>
              <p>Your Fans are waiting to contribute financially</p>
            </div>
            <div className="thirdicon flex flex-col justify-center items-center">
              <img className="bg-gray-400 rounded-full" width={44} src="/group.gif" alt="" />
              <p>Fans want to collaborate</p>
              <p>Your Fans are ready to collaborate with you</p>
            </div>
          </div>
      </div>

      <div className="break bg-white h-1 opacity-10"></div>

      <div className="thirdsec text-white flex flex-col justify-center items-center pt-10 pb-16">
        <div><h2 className="font-bold text-2xl pb-6">
          Learn more about us
          </h2></div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/8KkKuTCFvzI?si=_VT8laTvRt-A7r6J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
    </>
  );
}
