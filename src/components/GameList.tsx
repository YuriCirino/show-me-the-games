
import { useEffect, useState } from "react"
import IGame from "../types/IGame"
export default function GameList() {
    const [games, setGames] = useState<IGame[]>([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        console.log(games)
        setIsLoading(false)
    }, [])
    return isLoading ? 
    (<h1>Loading...</h1>) : (
        <main>
            {games.map(game=><p>{game?.title}</p>)}
        </main>
    )
}
