import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [books,setBooks] = useState([])




  const apiKey = "pE0vnfkIHTk4yHFVbBegiG5pUE8B4gni"

  const apiLink =`https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=${apiKey}`

  // fetching data from api

 async function  FetchApi(){

  try{
    const res = await axios.get(apiLink);
     //storing data to state from api
    if(res.status === 200){
      setBooks(res.data.results)
    }

  }catch(err){
    alert(err)
  }


  }

  useEffect(()=>{
    FetchApi();
  },[])



  //function to navigate to book details page

  const getBook=(book)=>{

    navigate('/desc',{
      state:{book}
    })


  }









  return (
    <div>
      <ul>

      {
        books.map((book,id)=>
          <li key={id} className='books' onClick={()=>getBook(book)} >
              <h3>{book.book_title}</h3>
              <p>{book.book_author}</p>

          </li>
        )
      }
</ul>
    </div>
  )
}
