import GameList from "../components/GameList"
import Logo from "../assets/logo.svg"

export default function Home() {
    return (
        <main className="px-20 py-9 grid grid-cols-12 grid-flow-row gap-5 ">
            <div className="col-start-4 col-end-10 
            flex justify-center items-center bg-white border-2 
            border-violet-300 rounded-md
            rounded-tl-3xl rounded-br-3xl
            shadow-xl shadow-violet-100
            ">
                <img src={Logo} width={100} className="p-2  "></img>
                    <h1 className="text-center text-5xl font-bold text-violet-500 rounded-br-3xl">
                    Show me the Games!
                </h1>
                
                
                
                
            </div>

            <GameList />
        </main>
    )
}
