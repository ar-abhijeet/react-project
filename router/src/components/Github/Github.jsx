import React from 'react'
import {useState, useEffect} from 'react'
import { useLoaderData } from 'react-router-dom';
function Github() {
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/ar-abhijeet')
  //   .then((res)=> res.json())
  //   .then((data)=> setData(data))
  // })
  
  const data = useLoaderData();
  return (
    <div className = 'flex flex-col items-center	'>
      <img className = 'm-4' src = {data.avatar_url} alt="git image" width='300'></img>
      <div class = "text-center text-white m-4 bg-gray-600 p-4 text-3xl">Github Followers: {data.followers}</div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async()=>{
  const response = await fetch('https://api.github.com/users/ar-abhijeet');
  return response.json();
}