
export default function Home() {
  return (
    <>
    <main className="bg-paper">
    <div className="flex flex-col divide-y divide-slate-600 divide-dotted py-20 px-10 justify-center">
      <div className="flex flex-col md:flex-row px-20">
        <div className="flex mb-10 md:mt-64 md:w-3/5 justify-center">
            <h1 className="text-6xl drop-shadow-xl">
                Irene Dwyer
            </h1>
        </div>
        <div className="flex items-center md:w-2/5 justify-center">
            <img className="drop-shadow-2xl p-5" src="/irene_drawing.png" alt="Irene Dwyer"></img>
        </div>
      </div>
        <div className="flex flex-col m-10 p-10">
            <h2 className="text-3xl font-bold mb-5">New art</h2>
            <p className="text-lg">
                Thombus
            </p>
            <img className="drop-shadow-2xl border-solid border-2 border-black m-5" src="/thombus.jpg" alt="Hand drawing of Thombus, the talking rhombus, a character created by Irene Dwyer, inspired by a card from Cards Against Humanity"></img>
        </div>    

    </div>
    </main>
    </>
  );
}
