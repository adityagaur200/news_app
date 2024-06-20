import React from 'react'

export default function Newsitems(props) {
  const {title,description,imageUrl,readMore,author,date} = props;
  const urls='https://img.freepik.com/free-photo/toy-bricks-table-with-word-news_144627-47478.jpg'
  return (
<>
  <div className="card" style={{width:"18rem" ,}}>
  <img src={!imageUrl?urls:imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className='card-text'><small className='text-muted'>By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={readMore} className="btn btn-dark">Read More</a>
  </div>
</div>
</>
  ) 
}
