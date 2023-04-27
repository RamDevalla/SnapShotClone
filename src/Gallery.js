import React from 'react';

export default function 
Gallery({data}) {
  return (
    < >
        {data.map((image) =>
        <div id="image" style={{display:'block',float:'left',marginLeft:"10px"}}>
        <img  style={{marginLeft:'26px', padding:"8px",borderRadius:"15px" ,display:'flex' ,justifyContent:"center"}}
        src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}

       height="250" width="300" 
       
       alt={image.title}/>
        </div>
        )}
    </>
        
        
  )
}
