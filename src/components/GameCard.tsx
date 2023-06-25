import { Handbag } from "@phosphor-icons/react"
import type IGame from "../types/IGame"
export default function GameCard({ game }: { game: IGame }) {
    return (
        <div
            className=" flex flex-col justify-between  bg-zinc-100 transition-all duration-300 rounded-xl border-violet-200 border-solid border-2 col-span-4
        hover:-translate-y-2
        shadow-sm shadow-violet-200 hover:shadow-violet-300"
        
        >
            <div className="w-full">
                {/* Card Header */}
                <div>

                </div>
                <img
                    className=" w-full rounded-md rounded-bl-none rounded-br-none border-b-2 border-violet-500"
                    src={game.thumbnail}
                />
                <p className="text-violet-900 text-lg font-bold col-span-2 pt-2 pl-3">
                    {game.title}
                </p>
            </div>

            <div className="p-4 w-full grid grid-cols-2 grid-flow-row flex-1 ">
                {/*Card Body*/}
                <div className="mb-1">
                    <p className="m-0">{game.genre}</p>
                    <p className="text-xs text-violet-500 font-bold">Gênero</p>
                </div>

                <div className="mb-1">
                    <p className="m-0">{game.platform}</p>
                    <p className="text-xs text-violet-500 font-bold">
                        Plataforma
                    </p>
                </div>
                <div className="mb-1">
                    <p className="m-0">{game.publisher}</p>
                    <p className="text-xs text-violet-500 font-bold">
                        Publicador
                    </p>
                </div>
                <div className="mb-1">
                    <p className="m-0">{(game.release_date.replace(/([0-9]{4})-([0-9]{2})-([0-9]{2})/gm,"$3/$2/$1"))}</p>
                    <p className="text-xs text-violet-500 font-bold">
                        Data de lançamento
                    </p>
                </div>
            
            
            </div>

            <div className="p-4 pt-0">{/* Card Foooter */}
            <a href="" ><button className=" flex justify-center items-center gap-2 p-2 rounded-md text-lg text-white bg-violet-400 w-full" ><Handbag size={"1.5rem"} /> Ver na Loja</button></a>
            </div>
        </div>
    )
}
