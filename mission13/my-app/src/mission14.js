import React, { useState,useEffect } from 'react'

export default function Profile () {
    const [name,setName] = useState('');
    useEffect(()=>{
        document.title = `이름 : ${name}`  
    },[name])
    return (
        <div>
            <h1>{`name is ${name}`}</h1>
            <input type='text' value={name} onChange={e=>setName(e.target.value)}></input>
        </div>
    )
}