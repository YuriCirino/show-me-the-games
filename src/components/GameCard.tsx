import type IGame from "../types/IGame"
export default function GameCard({ game }: { game: IGame }) {
    return (
        <div className=" flex flex-col bg-zinc-100 transition-all duration-300 rounded-xl border-violet-200 border-solid border-2 col-span-4
        hover:-translate-y-2">
            <img className="rounded-md rounded-bl-none rounded-br-none border-b-2 border-violet-500" src={game.thumbnail}></img>
            <div className="p-4 w-full"><b className="text-violet-900"> {game.title}</b>
            <p>{game.genre}</p>
            <p>{game.platform}</p>
            <p className="flex-1">{game.short_description}</p>
            </div>
            
        </div>
    )
}
