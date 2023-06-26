import { useEffect, useState,useRef } from "react"
import IGame from "../types/IGame"
import data from '../assets/games.json'
import api from "../api/api"
import GameCard from "./GameCard"
import {isAxiosError } from "axios"
import useDebounce from "../hooks/useDebounce"
import {MagnifyingGlass} from '@phosphor-icons/react'
import Spinner from "./Spinner"
import ErrorMessage from "./ErrorMessage"


export default function GameList() {
    const [games, setGames] = useState<IGame[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [filteredGames, setFilteredGames] = useState<IGame[]>([])
    const [error, setError] = useState({ status: false, 
        errorMessage: "O servidor não conseguirá responder por agora, tente voltar novamente mais tarde." })
    const debouncedHandleFilter = useDebounce(handleFilter,500)
    useEffect(() => {
        ;(async () => {
            try {
                setIsLoading(true)

                const res = await api.get<IGame[]>("/data")
                if (res.status == 200) {
                    console.log(res.status)
                    console.log(res)
                    setGames(res.data)
                    setFilteredGames(res.data)
                    setIsLoading(false)
                }
                // setIsLoading(true)
                // setTimeout(()=>{},1000)
                // setGames(data)
                // setFilteredGames(data)
                // setIsLoading(false)

            } catch (e) {
                setIsLoading(false)
                console.log(e)
                if (isAxiosError(e)) {
                    if (e.code == "ECONNABORTED" || e.code == "") {
                        setError({
                            status: true,
                            errorMessage:
                                "O servidor demorou para responder, tente mais tarde.",
                        })
                    } else if (
                        (e.response?.status as number) >= 500 &&
                        (e.response?.status as number) < 600
                    ) {
                        setError({
                            status: true,
                            errorMessage:
                                "O servidor falhou em responder, tente recarregar a página.",
                        })
                    } else {
                        setError({
                            status: true,
                            errorMessage:
                                "O servidor não conseguirá responder por agora, tente voltar novamente mais tarde.",
                        })
                    }
                } else {
                    setError({
                        status: true,
                        errorMessage:
                            "Ops houve algum erro, tente voltar novamente mais tarde.",
                    })
                }
            }
        })()
    }, [])

    function handleFilter(event: React.ChangeEvent<HTMLInputElement>) {
        let titleToSearch = event.target.value.toLowerCase()
        if(titleToSearch == ''){
            setFilteredGames(games)
        }else{
            let newGameList = games.filter((game) =>
            game.title.toLowerCase().includes(titleToSearch)
        )
        setFilteredGames(newGameList)
        }
        
    }

    if(isLoading){
        return <Spinner/>
    }else{
        return (
            error.status ? <ErrorMessage message={error.errorMessage}/>:
            <><div className="col-span-12 rounded-full  my-1 flex gap-3 px-4 py-2 -mt-30 bg-white shadow-sm shadow-violet-200 border-violet-200 border-solid border-2">

                <MagnifyingGlass className="fill-violet-400" size={32} />
                <input type="text" className="w-full border-l-2 border-violet-400 pl-2 text-zinc-800 text-xl outline-none" onChange={debouncedHandleFilter}></input>
            </div>
                {filteredGames.map((game) => (
                    <GameCard game={game} key={game.id} />
                ))}
            </>
        )
    }
    
}
