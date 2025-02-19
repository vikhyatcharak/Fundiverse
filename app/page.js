import Image from "next/image";
import Separation from "@/components/Separation";

export default function Home() {
  return (
    <>
      <div className="main h-[44vh] w-full flex flex-col justify-center items-center gap-4">
        <h1 className="text-5xl font-bold flex justify-center items-center gap-1"><span>Fundiverse - Fans Fund Dreams </span><img src="/logo.png" alt="img" width={45} /></h1>
        <p>A crowd funding platform for creators. Get funded by your fans and followers.</p>
        <div className="buttons flex gap-4">
            <button type="button" className="text-white text-lg bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg px-5 py-2.5 text-center">
                Start Here
            </button>
            <button type="button" className="text-white text-lg bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg px-5 py-2.5 text-center">
                Read More
            </button>
        </div>
      </div>
      <Separation />
      <div className="w-full fund flex flex-col items-center pt-14 pb-14">
        <h2 className="text-2xl font-bold ">Your fans can support you</h2>
          <div className="items w-full flex gap-5 justify-around pt-7">
            <div className="item gap-1 flex flex-col justify-center items-center">
              <button className="p-1 rounded-full bg-slate-600"><img src="/man.png" className="rounded-full bg-slate-600" width={45} alt="" /></button>
              <span className="font-bold">Fans want to help</span>
              <p>fans are available to help you</p>
            </div>
            <div className="item gap-1 flex flex-col justify-center items-center">
              <button className="p-1 rounded-full bg-slate-600"><img src="/coin.png" className="rounded-full bg-slate-600" width={45} alt="" /></button>
              <span className="font-bold">Fans want to help</span>
              <p>fans are available to help you</p>
            </div>
            <div className="item gap-1 flex flex-col justify-center items-center">
              <button className="p-1 rounded-full bg-slate-600"><img src="/man.png" className="rounded-full bg-slate-600" width={45} alt="" /></button>
              <span className="font-bold">Fans want to help</span>
              <p>fans are available to help you</p>
            </div>
        </div>
      </div>
      <Separation />
      <div className="w-full fund flex flex-col items-center pt-14 pb-14">
        <div className="text-2xl font-bold pb-7">Learn More about us</div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/xcJtL7QggTI?si=4QPXGiwbdhjeH6lm" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </>
  );
}
