import React from 'react'

export default function Newsitems(props) {
  const {title,description,imageUrl,readMore} = props;
  const image1="https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1219181572%2Fvector%2Fbreaking-news-background-stock-illustration.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3DQf7e0zV4c1krL_MgcPdwfnp7wFFmntf9veciH57y1N8%3D&tbnid=260Jy_5yNy8aOM&vet=12ahUKEwipgPjr4YyGAxWy9qACHSj5B4YQMygkegUIARC8AQ..i&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fbreaking-news-no-people&docid=AH7k-UrGSWzmLM&w=612&h=612&q=no%20news%20%20picture&ved=2ahUKEwipgPjr4YyGAxWy9qACHSj5B4YQMygkegUIARC8AQ";
  return (
<>
    <div className="card" style={{width:"18rem"}}>
  <img src={image1?imageUrl:imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={readMore} className="btn btn-primary">Read More</a>
  </div>
</div>
</>
  )
}
