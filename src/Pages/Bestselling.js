import { Row,Card } from 'antd'
import React, { useEffect, useState } from 'react'
import "../Pages/Style.css"
import { AxiosCall } from '../API/Axios';
import BestSellingCard from './BestSellingCard';

const { Meta } = Card;

const Bestselling = () => {
  const [bestSelling ,setBestSelling] = useState([])
  const getBestSelling = async  ()=>{
    let response = await  AxiosCall("post","bestsellingProject",{})
    if(response.success === 0){
        setBestSelling([])
    }else{
      setBestSelling(response.data)
    }
  }

  useEffect(()=>{
    getBestSelling()
  },[])
  return (
    < >
      <h2 className='pageRowTitle'> BEST SELLING PROJECTS</h2>
      <div className='bestSellingGrid' >
       {
        bestSelling.map((item) =>{
         return  <BestSellingCard projectId = {item.projectId} key={item.projectId}  title = {item.title} images = {item.images} description = {item.description} />
        })
       }
      </div>
    </>
  )
}

export default Bestselling
