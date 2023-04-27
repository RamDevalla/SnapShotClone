import React, {useState} from "react";
import axios from "axios";
import Gallery from './Gallery'
const Home = () => {
    const apiKey = "43af6032eaa5edf334deb5879dbf1e41"
    const [search, setSearch] = useState();
    const [data, setData] = useState([]);

    const handle_input = (e)=>{
        setSearch(e.target.value)
    }
    const handle_search = (e)=>{

        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`)
        .then(result => {
            setData(result.data.photos.photo)
        })
        .catch(error=>{
            console.log(error)
        })
    }


    
    return (<>
        <div className="main-container">

           <section className="sub-section">

           <section className="sec1"> 
                <h1 className="heading"> Snap Shot </h1>
           </section>

            <div className="div1">

                <input id="search" type="text" className="input" onChange={handle_input} value={search} />
                <button className="search-btn"  onClick={handle_search}> Search </button>

            </div>

           

            <section className="sec2" >
                <button className="btn" onClick={ ()=>{setSearch("mountains");handle_search()}}> MOUNTAINS </button>
                <button className="btn" onClick={ ()=>{setSearch("birds");handle_search()}}> BIRDS </button>
                <button className="btn" onClick={ ()=>{setSearch("beaches");handle_search()}}> BEACHES </button>
                <button className="btn" onClick={ ()=>{setSearch("food");handle_search()}}> FOOD </button>
            </section>

           </section>
       

        </div>

        <div className="container">

        {data.length >= 1 ? <Gallery data={data} /> : <h1 className="textclass"> 
        <marquee className="marquee"> Search For Images </marquee> 
        
        </h1>}

        </div>

    </>)
}

export default Home;