import React from 'react'
import Newsitems from './Newsitems'

export default function News(props) {
      const articles=[
            {
                "source": {
                  "id": null,
                  "name": "Abplive.com"
                },
                "author": "ABP News Bureau",
                "title": "iPhone 16 Leaks: Display Likely To Be 20% Brighter Than iPhone 15 Pro - ABP Live",
                "description": "The iPhone 16 Pro is rumoured to support up to 1,200 nits of typical brightness when displaying SDR content. It is a 20 per cent increase compared to the 1,000 nits cap on the iPhone 15 Pro models.",
                "url": "https://news.abplive.com/technology/gadgets/iphone-16-leaks-specifications-battery-colour-price-display-20-per-cent-brighter-than-iphone-15-pro-1686847",
                "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2024/05/12/13dc54e495dc484cc2d08f6dcf3a0bfb1715493782241555_original.png?impolicy=abp_cdn&imwidth=1200",
                "publishedAt": "2024-05-12T06:05:44Z",
                "content": "Later this year, the iPhone 16 Pro is anticipated to launch as the successor to the iPhone 15 Pro, with potential enhancements to the display and other features, as per a source. While Apple's Pro de… [+1852 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "YouTube"
                },
                "author": null,
                "title": "Apple closing in on pact with OpenAI to use its AI | World Business Watch | WION - WION",
                "description": "Reports suggest that Apple has closed in on an agreement with OpenAI to use the start-up’s technology on the iPhone. That's part of Apple's broader push to b...",
                "url": "https://www.youtube.com/watch?v=AcxxvE8Ztf0",
                "urlToImage": "https://i.ytimg.com/vi/AcxxvE8Ztf0/maxresdefault.jpg",
                "publishedAt": "2024-05-12T06:02:12Z",
                "content": null
              },
              {
                "source": {
                  "id": null,
                  "name": "Hindustan Times"
                },
                "author": "HT News Desk",
                "title": "Lok Sabha elections 2024 LIVE Updates: PM's ‘historic’ roadshow in Patna today - Hindustan Times",
                "description": "Lok Sabha elections 2024 LIVE Updates: In Monday's fourth phase, as many as 96 parliamentary seats across nine states and a Union territory, will vote.",
                "url": "https://www.hindustantimes.com/india-news/lok-sabha-elections-may-12-2024-live-updates-bjp-congress-nda-india-bloc-narendra-modi-rahul-gandhi-101715476829215.html",
                "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/05/12/550x309/Gurugram-goes-to-polls-on-May-25-in-the-sixth-phas_1715365828781_1715477520257.jpg",
                "publishedAt": "2024-05-12T05:55:22Z",
                "content": "Sunday is the eve of the fourth leg of the seven-phase Lok Sabha elections, with as many as 96 parliamentary seats across nine states and a Union territory (Jammu and Kashmir) set to poll in this rou… [+7143 chars]"
              },
              {
                "source": {
                  "id": "the-times-of-india",
                  "name": "The Times of India"
                },
                "author": "TOI Lifestyle Desk",
                "title": "5 possible ways to reduce the risk of breast cancer - The Times of India",
                "description": "While there is no surefire way to prevent breast cancer, adopting these lifestyle changes can significantly reduce your risk. By maintaining a balanced lifestyle, you can take proactive steps to protect your health and reduce your risk of breast cancer.",
                "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/5-possible-ways-to-reduce-the-risk-of-breast-cancer/photostory/109948832.cms",
               "urlToImage": "https://static.toiimg.com/photo/109948907.cms",
                "publishedAt": "2024-05-12T05:30:00Z",
                "content": "A healthy diet can help reduce the risk of breast cancer. Focus on eating a variety of fruits, vegetables, whole grains, and lean proteins, and limit processed and high-fat foods. According to the Am… [+421 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "NDTV News"
                },
                "author": null,
                "title": "\"Azadi\": Huge Protests, Clashes With Cops In Pakistan-Occupied Kashmir - NDTV",
                "description": "Pakistan-occupied Kashmir (PoK) has been hit by civilian unrest and a massive crackdown has been launched by the authorities to quell protests that have spread across the occupied region.",
                "url": "https://www.ndtv.com/india-news/azadi-say-protesters-amid-clashes-with-cops-in-pakistan-occupied-kashmir-5644583",
                "urlToImage": "https://c.ndtvimg.com/2024-05/19jm605o_pok-protest_625x300_12_May_24.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=738?ver-20240506.08",
                "publishedAt": "2024-05-12T05:25:10Z",
                "content": "Protests broke out in Pakistan-occupied Kashmir (PoK) for freedom\r\nSrinagar/New Delhi: Pakistan-occupied Kashmir (PoK) has been hit by civilian unrest and a massive crackdown has been launched by the… [+3043 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "NDTV News"
                },
                "author": null,
                "title": "BJP May Get 220 Seats, Won't Form Government: Arvind Kejriwal's Prediction - NDTV",
                "description": "Delhi Chief Minister Arvind Kejriwal on Saturday launched a blistering attack on the Bharatiya Janata Party (BJP) and said that the ruling party won't get more than 230 seats in the ongoing Lok Sabha elections.",
                "url": "https://www.ndtv.com/india-news/arvind-kejriwal-2024-lok-sabha-elections-bjp-wont-get-more-than-230-seats-india-bloc-will-win-arvind-kejriwal-5643911",
                "urlToImage": "https://c.ndtvimg.com/2024-05/vnp165ag_arvind-kejriwal_625x300_12_May_24.jpeg?ver-20240506.08",
                "publishedAt": "2024-05-12T04:40:00Z",
                "content": "Arvind Kejriwal was speaking at Aam Aadmi Party's headquarters in Delhi\r\nNew Delhi: Delhi Chief Minister Arvind Kejriwal on Saturday launched a blistering attack on the Bharatiya Janata Party (BJP) a… [+2932 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Slurrp.com"
                },
                "author": "Devi Poojari",
                "title": "National Institute Of Nutrition Declares Mud Vessels Best For Cooking - Slurrp",
                "description": "The top nutrition body in India which shared an updated version of the ‘Dietary Guidelines for Indians’, mention a host of advantages of using earthen cookware. Collated with plenty of research, expert inputs and scientific evidence, read more to know about w…",
                "url": "https://www.slurrp.com/article/national-institute-of-nutrition-declares-mud-vessels-best-for-cooking-1715486843735",
                "urlToImage": "https://images.slurrp.com/prodarticles/xyvsvdie3xm.webp",
                "publishedAt": "2024-05-12T04:21:47Z",
                "content": ""
              },
              {
                "source": {
                  "id": "google-news",
                  "name": "Google News"
                },
                "author": null,
                "title": "Why Sourav Ganguly's Sanju Samson Masterplan To Reverse Rishabh Pant's Ban Was Rejected By IPL - NDTV Sports",
                "description": "Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.",
                "url": "https://news.google.com/rss/articles/CBMiiwFodHRwczovL3Nwb3J0cy5uZHR2LmNvbS9pcGwtMjAyNC9ob3ctc291cmF2LWdhbmd1bHktdHJpZWQtdXNpbmctc2FuanUtc2Ftc29ucy1jb250cm92ZXJzaWFsLWRpc21pc3NhbC10by1zYXZlLXJpc2hhYmgtcGFudC1mcm9tLWJhbi01NjQyMDk10gGRAWh0dHBzOi8vc3BvcnRzLm5kdHYuY29tL2lwbC0yMDI0L2hvdy1zb3VyYXYtZ2FuZ3VseS10cmllZC11c2luZy1zYW5qdS1zYW1zb25zLWNvbnRyb3ZlcnNpYWwtZGlzbWlzc2FsLXRvLXNhdmUtcmlzaGFiaC1wYW50LWZyb20tYmFuLTU2NDIwOTUvYW1wLzE",
                "urlToImage": "https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw",
                "publishedAt": "2024-05-12T04:08:00Z",
                "content": null
              },
            ] 
            
        
    
    
  return (
<div>
    <h1 className='contanier mx-4 '>Enjoy Your News ...</h1>
    <div className='row'>
        {articles.map((elements)=>{
        return <div className='col-md-3' key={elements.url}>
                <Newsitems title={elements.title} description ={elements.description}  imageUrl={elements.urlToImage} />
                
               </div>
        })}
    
    </div>
</div>
  )
}
