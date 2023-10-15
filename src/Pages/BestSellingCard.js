import React from 'react'
import {Card} from "antd"
import "../Pages/Style.css"
const {Meta} = Card

const BestSellingCard = ({projectId,title ,images,description}) => {
    console.log(title,images ,"iamges, title")
  return (
          <Card
              hoverable
              style={{
                  width: 300,
                  padding:30,
                  height: 450,
                  marginBottom:"20px",
                  textAlign:"center"
              }}
              cover={<img className='bestSelling_images'  alt="example" src={images[0]} />}
        
          >
              <Meta style={{fontSize:"5px"}} title={title.toUpperCase()} />
              <p>{description.slice(0, 100)}<a href={`/productDetails/${projectId}`}>...MORE</a></p>
          </Card>
  )
}

export default BestSellingCard
