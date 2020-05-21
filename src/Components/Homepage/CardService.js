import React ,{useEffect} from 'react'
import SIcon from '../../Img/cardico.png';


export default function CardService(props) {
    // useEffect(() => {
    //     console.log(props);
    // }
    //     )
    return (
        <div className="flex justify-end flex-left sm:flex-col h-full mx-12 py-6 my-4 sm:my-8 sm:text-center  justify-center rounded-lg  cardt animate w-9/12 md:w-4/12 xl:w-3/12">
            <img className="h-12 sm:mx-auto mx-2" src={SIcon}/>
            <h1 className="sm:items-center pt-4 pb-2 text-xl text-gray-800">{props.title}</h1>
            <p className= "text-sm text-gray-600 px-8 py-2 hidden sm:block">
            {props.desc}
            </p>
        </div>
    )
}
