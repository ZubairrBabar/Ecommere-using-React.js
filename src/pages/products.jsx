import axios from "axios"
import { useEffect, useState } from "react"
import ProductCard from "../component/productCart"
import CategoryChip from "../component/categoryChips"

function Products(){
    
const [products , setproducts] = useState([])
const [loding , setloding] = useState(true)
const [category, setcategory] = useState([])
const [chosenCategory, setChosenCategory] = useState("All")

useEffect(()=>{
   console.log("useEffect Call hogya");
   const url = chosenCategory === "All"
   ? 'https://dummyjson.com/products'
   :`https://dummyjson.com/products/category/${chosenCategory}`

axios.get(url)
 .then((res) => {
    setproducts(res.data.products)
   //  console.log("product=>", res);
    setloding(false)

 })
 .catch((err)=> console.log(err)) 
 setloding(false)

},[chosenCategory]) 
 

useEffect(()=>{
    axios.get('https://dummyjson.com/products/categories')
    .then((res) => {
    //    console.log("category=>", res);
    setcategory(res.data)
    setloding(false)
    
   })
   .catch((err)=> console.log(err)) 
   setloding(false)
   
},[]) 


return(
   <div className="container mx auto ">
    {loding? (
       <h1 className="text-center">Loding...</h1>
      )
      : (
         <div >
   <div className="flex flex-wrap ml-9">
   <CategoryChip 
   onClick={()=> setChosenCategory("All")}
   isChosen={chosenCategory === "All"} 
   category={{
      slug: "All",
      name: "All",
   }}  /> 

    {category.map((data)=> (
        <CategoryChip 
        onClick={()=> setChosenCategory(data.slug) }
        isChosen={data.slug == chosenCategory} 
        category={data} key={data.slug} /> 
    )  )}

    </div>

    <div className="flex flex-wrap -m-4  m-auto">
      {products.map((item) => (
      <ProductCard product={item} key={item.id}  />
      ))}
      </div>
    </div>
    )}

       </div>
    )
}

export default Products 