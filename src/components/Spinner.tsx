import { SpinnerGap } from "@phosphor-icons/react";

export default function Spinner(){
    return <span className="col-span-12 flex items-center justify-center">
        <SpinnerGap className="animate-spin-slow" size={32} weight="bold"/>
    </span>


}