import React ,{useEffect} from 'react'
import SIcon from '../../Img/cardico.png';


export default function CardService(props) {
    // useEffect(() => {
    //     console.log(props);
    // }
    //     )
    return (
        <div className="  h-full  py-5 my-8 text-center justify-center rounded-lg shadow-lg " style={{width:300}}>
            <img className="h-12 mx-auto" src={SIcon}/>
            <h1 className="items-center pt-4 pb-2 text-xl text-gray-800">{props.title}</h1>
            <p className= "text-sm text-gray-600 px-8 py-2 ">
            {props.desc}
            </p>
        </div>
    )
}
