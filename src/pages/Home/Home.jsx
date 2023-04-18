import React, { useEffect } from 'react'
import { Card } from '../../componants'
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux'
import {addPerson} from '../../slices/CardSlice'

const Home = () => {

const dispatch = useDispatch();
const items = useSelector((state)=>state.card);


const  getData = async (url) => {
     const users = await axios.get(url);
     dispatch(addPerson(users.data));
}

useEffect(()=>{
    getData(import.meta.env.VITE_API_LINK);
},[])


  return (
    <div>
    {items.people.map((item)=>{
          return  <Card key={item.id} {...item}/>

    })}
     
    </div>
  )
}

export default Home
