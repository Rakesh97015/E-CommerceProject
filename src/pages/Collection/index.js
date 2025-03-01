import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/Shopcontext";
import "./index.css";
import Title from "../../component/Title";
import { assets } from "../../assets/assets";
import ProductItem from "../../component/ProductItem";

const Collection = () => {
  const { products,search,showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts,setFilterProducts]=useState([]);
   const [category,setCategory] = useState([]);
    const [subCategory, SetSubCategory] = useState([]);
   const [sortType,setSortType]=useState('relavant')

   
  const toggleCategory=(e)=>{
   
    if(category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item=>item!==e.target.value))
    }
    else{
      setCategory(prev=>[...prev,e.target.value])
    }
  }

  
  const toggleSubCategory=(e)=>{
   
    if(subCategory.includes(e.target.value)){
      SetSubCategory(prev=> prev.filter(item=>item!==e.target.value))
    }
    else{
      SetSubCategory(prev=>[...prev,e.target.value])
    }
  }

  const applyFilter=()=>{
  let productsCopy=products.slice()

  if(showSearch && search){
   productsCopy=productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
  }
  
    if(category.length>0){
      productsCopy=productsCopy.filter(item=>category.includes(item.category))
    }
    if(subCategory.length>0){
      productsCopy=productsCopy.filter(item=>subCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy)
    }

   const sortProducts=()=>{
    let fpCopy=products.slice()
      switch(sortType){
          case 'low-high':
              setFilterProducts(fpCopy.sort((a,b)=>(a.price- b.price)))
              break;

              case 'high-low':
                setFilterProducts(fpCopy.sort((a,b)=>(b.price- a.price)))
                break;
              
                default:
                  applyFilter();
                  break
    }
    
   }


    useEffect(()=>{
    applyFilter()
     },[category,subCategory,search,showSearch])

     useEffect(()=>{ 
      sortProducts()
     },[sortType])

  return (
    <div className="collection">
    <div className=" d-flex ms-5 sm:flex-row gap-1 sm:gap-10 pt-10">
      {/* FILTER SIDEBAR */}
      <div className="min-w-60">
        <div className="d-flex align-items-center justify-content-between">
          <p onClick={()=>setShowFilter(!showFilter)} className="custom-class example fw-bold">FILTERS</p>
          <img
            className="d-block d-sm-none img cursor-pointer ms-2"
            src={assets.dropdown_icon}
            alt=""
            onClick={() => setShowFilter((prev) => !prev)} // Toggle filter visibility
          />
        </div>

        {/* CATEGORIES FILTER */}

        <div
         className={`border border-2 border-gray-400 pl-5 py-3 px-3 mt-6 gap-2 my-5 w-full ${
         showFilter ? "block" : "d-none"
         } sm:d-none d-md-block`}
         >
    
          <p className="mb-3 text-small fw-bold">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Men"} onChange={toggleCategory} />
              Men
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Women"}  onChange={toggleCategory}/>
              Women
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Kids"} onChange={toggleCategory} />
              Kids
            </p>
          </div>
        </div>

        {/* SUBCATEGORY FILTER */}
       <div
        className={`border border-2 border-gray-400 pl-5 py-3 px-3 mt-6 gap-2 my-5 w-full ${
          showFilter ? "d-block" : "d-none"
        } sm:d-none d-md-block`}
        >

          <p className="mb-3 text-small fw-bold">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Topwear"}  onChange={toggleSubCategory} />
              Topwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Bottomwear"} onChange={toggleSubCategory}  />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Winterwear"} onChange={toggleSubCategory}  />
              Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className="name ml-2">
        <div className="d-flex justify-content-between align-items-center text-base sm:text-2xl mb-4">
          <Title text1="ALL" text2="COLLECTIONS" />
          <div className="ml-auto">
            {/* Product Sort */}
            <select onChange={(e)=>{setSortType(e.target.value)}} className="border-2 border-gray-300 text-sm px-2">
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>
          {/* MAP PRODUCTS */}
            
        </div>
        
        <div className="row mt-3 g-3 ">
          {filterProducts.map((item, index) => (
        <div key={index} className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
          <ProductItem name={item.name} id={item._id} price={item.price} image={item.image} />
       </div>
       ))}
     </div>

      </div>
      </div>
    </div>
  );
};

export default Collection;




