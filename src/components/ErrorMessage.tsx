export default function ErrorMessage({message}:{message:string}){
    return <span className="col-span-12 text-2xl text-red-500 text-center bg-red-100 border-2 border-red-500 p-4 rounded-xl">{message}</span>
}