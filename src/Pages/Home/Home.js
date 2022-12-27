import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Home() {
    const [movieData, setmovieData] = useState([])
    useEffect(() => {
    //  let response = axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=b4cffe8929ed8f2f4da68364e99f8d60")
    //  console.log(response);
    axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=b4cffe8929ed8f2f4da68364e99f8d60")
    .then(function (response) {
        // handle success
        setmovieData(response.data.results);

    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    }, [])
    console.log(movieData);
  return (
    <div>
        {movieData&&movieData.map((item,index)=>{
            console.log(item);
            return(
                <>
                <p>
                    {item.title}
                </p>
                <p>
                    {item.overview}
                </p>
                </>
            )
        })}
    </div>
  )
}

export default Home