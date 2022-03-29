import React from "react"
import {useHistory} from 'react-router-dom'



export const Delete = ({id}) =>{
    const history = useHistory()
    const deleteContact = () =>{
        fetch(`/api/${id}`,{
            method: 'POST',
            body:JSON.stringify({
                id:id
            })
        }).then(response => response.json())
        .then(data => {
            history.push('/')

        })

    }

    return(
        <>
        <button onClick={deleteContact}>Delete</button>
        </>
    )
}