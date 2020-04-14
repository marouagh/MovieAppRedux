import React from 'react'

export default function Rating({stars, handleChangeRating =()=>{}}) {
    let starsTab = []
    for(let i=0; i<5; i++)
    {
        i<stars ? starsTab.push(<span key={i}  className='rating starsgold' onClick={() =>handleChangeRating(i+1)}>★</span>): starsTab.push(<span key={i}  className='rating' onClick={() =>handleChangeRating(i+1)}>☆</span>)
        
    }
    return (
        <span  className='stars'>
            {starsTab}
        </span>
    )
}
