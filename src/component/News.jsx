import React, { useEffect, useState } from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner';
export default function News(props) {
    const [articles,setArticles] = useState([]);
    const [Page,setPage] = useState(1);
    const [totalResult,settotalResult] = useState([]);
    const[Loading,setLoading]=useState(false);   
     const updateNews = async  () =>{
        const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=30a492ea896647658b27f025f628c31c&page=1&pagesize=${props.pageSize}`;
        setLoading({Loading: true});
        const data = await fetch(url);
        const parsedData = await data.json();
        setLoading({Loading: false});
        setArticles(parsedData.articles);
        settotalResult(parsedData.totalResults);
        
        }
   
   
            
      const NextPage = async() =>
       {   setPage(Page+1);
           let Pages=Page+1;
           console.log(Pages);
           const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=30a492ea896647658b27f025f628c31c&page=${Pages}&pagesize=${props.pageSize}`;
           setLoading({Loading: true});
           const data = await fetch(url);
           const parsedData = await data.json();
           setLoading({Loading: false});
           console.log(parsedData); 
           setArticles(parsedData.articles);
           setPage(Page+1);
     
       }
      const PreviousPage = async() =>
           {  setPage(Page-1);
              let Pages=Page-1;
              const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=30a492ea896647658b27f025f628c31c&page=${Pages}`;
              setLoading({Loading: true});
              const data = await fetch(url);
              const parsedData = await data.json();
              setLoading({Loading: false});
              setArticles(parsedData.articles);
              setPage(Page-1);
           }
        useEffect(()=>
            {
                updateNews();
              
            },[Page]);
    
  return (
<div className='container my-3'>
    <div className='text-center' style={{margin:'35px 0pxs'}}>
    <h1>Enjoy Your News ...</h1>
    {!Loading && <Spinner />}
    </div>
    <div className='row'>
        {Loading && articles.map((elements)=>{
        return <div className='contanier col-md-3 ' key={elements.url}>
                <Newsitems title={elements.title?elements.title:""} description ={elements.description?elements.description:""}  imageUrl={elements.urlToImage} readMore={elements.url} />
                
               </div>
        })}
    
    </div>
    <div class="d-flex justify-content-between">
    <button type="button" className="btn btn-primary mx-4" onClick={PreviousPage} >Previous</button>
    <button type="button" className="btn btn-primary mx-4" onClick={NextPage} >Next</button>
    </div>
    
</div>
  )
}
