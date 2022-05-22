import { useEffect, useState } from "react";
import axios from "axios";
import {Card, Buttons, Button} from './style'



function CardHome(props){
    const [images, setImages] = useState('')
    const url = props.url

    useEffect(()=>{
        axios.get(`${url}`)
        .then((res) =>{
            console.log(res.data)
            setImages(res.data.sprites.versions['generation-v']['black-white'].animated.front_default)
        }).catch((err) =>{
            console.log(err.message)
        })
    }, [url])


    return(
    <>
        <Card >
        <img src={images} alt={props.name}/>
        <h2>{props.name} </h2>
        <span>{props.id}</span>
        <Buttons>
        <Button onClick={props.add}>Adicionar</Button>
        <Button onClick={props.det}>Ver detalhes</Button>
        </Buttons>
        </Card>
        </>
    )
}
export default CardHome