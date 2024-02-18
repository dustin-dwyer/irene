
export default function Home() {
  return (
    <>
    <main className="bg-paper">
    <div className="flex flex-col md:flex-row py-20 px-10 justify-center">
        <div className="flex mb-10 md:mt-64 md:w-3/5 justify-center">
            <h1 className="text-6xl drop-shadow-xl">
                Irene Dwyer
            </h1>
        </div>
            <div className="flex items-center md:w-2/5 justify-center">
                <img className="drop-shadow-2xl p-5" src="/irene_drawing.png" alt="Irene Dwyer"></img>
            </div>
    </div>
    </main>
    </>
  );
}
