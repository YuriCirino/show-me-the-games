import GameList from "../components/GameList";

export default function Home(){

    return<main className="px-20 py-9 grid grid-cols-12 grid-flow-row gap-5 ">
    <h1 className="col-start-1 col-end-13 text-center p-2 text-4xl font-bold "> Show me the Games! </h1>
    <GameList/>
    </main>
}