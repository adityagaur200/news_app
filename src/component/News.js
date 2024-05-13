import React, { useEffect, useState } from 'react'
import Newsitems from './Newsitems'

export default function News(props) {
    const [articles,setArticles] = useState([]);
    const [Page,setPage] = useState(1);
            
        
     const updateNews = async  () =>{
        const url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=ac0cb3539d494abca02466af3a7c2ebc&page=1";
        const data = await fetch(url);
        const parsedData = await data.json();
        setArticles(parsedData.articles);
        
        }
   
   
            
    const NextPage = async() =>
     {   setPage(Page+1);
         let Pages=Page+1;
         console.log(Pages);
         const url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=ac0cb3539d494abca02466af3a7c2ebc&page=${Pages}`;
         const data = await fetch(url);
         const parsedData = await data.json();
         console.log(parsedData); 
         setArticles(parsedData.articles);
          
     }
    const PreviousPage = async() =>
         { 
            console.log(Page);
            setPage(Page-1);
            
            let Pages=Page-1;
            console.log(Pages);
            if(Pages<0)
            {   
            const url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=ac0cb3539d494abca02466af3a7c2ebc&page=${Pages}`;
            const data = await fetch(url);
            const parsedData = await data.json();
            setArticles(parsedData.articles);
            
            }
            else{
                const url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=ac0cb3539d494abca02466af3a7c2ebc&page=1";
                const data = await fetch(url);
                const parsedData = await data.json();
                setArticles(parsedData.articles); 
            }
        }
        useEffect(()=>
            {
                updateNews();
              
            },[Page]);
    
  return (
<div >
    <h1 className='contanier mx-4 '>Enjoy Your News ...</h1>
    <div className='row'>
        {articles.map((elements)=>{
        return <div className='contanier col-md-3 ' key={elements.url}>
                <Newsitems title={elements.title} description ={elements.description}  imageUrl={elements.urlToImage} />
                
               </div>
        })}
    
    </div>
    <div class="d-flex justify-content-between">
    <button type="button" class="btn btn-primary mx-4" onClick={PreviousPage} >Previous</button>
    <button type="button" class="btn btn-primary mx-4" onClick={NextPage} >Next</button>
    </div>
    
</div>
  )
}
