import GameList from "../components/GameList"
import Logo from "../assets/logo.svg"

export default function Home() {
    return (
        <main className=" grid grid-cols-12 grid-flow-row gap-5 
        lg:px-20 lg:py-9
        md:px-12 md:py-6
        max-sm:px-6 max-sm:py-4
        "
        
        >
            <div
                className="
                lg:col-start-4 lg:col-end-10 
                md:col-start-2 md:col-end-12 
                max-sm:col-start-1 max-sm:col-end-13 
            flex justify-center items-center gap-1
             bg-white border-2 
            border-violet-300 rounded-md
            rounded-tl-3xl rounded-br-3xl
            shadow-sm shadow-violet-100
            "
            >
                <img src={Logo}className="p-2 w-24 max-sm:w-16 "></img>
                <div className="h-3/4 border-solid border-violet-300 border-l-2">
                </div>
                <h1 className="text-center text-5xl md:text-4xl max-sm:text-xl px-1 py-3 font-bold text-violet-500 rounded-br-3xl">
                    Show me the Games!
                </h1>
            </div>

            <GameList />
        </main>
    )
}
