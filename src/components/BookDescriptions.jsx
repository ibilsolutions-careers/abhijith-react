import React from 'react';
import { useLocation,Link } from 'react-router-dom';

export default function() {



  const location = useLocation();

  //storing data passed from the useNavigate

  const data = location.state || {};


  console.log(data);





  return (
    <div>
      <Link to='/' ><button>Home</button></Link>

        <div>
            {
              <div>
                <h2>Book Name: {data.book.book_title}</h2>
                <p>Author: {data.book.book_author}</p>
                <p> {data.book.summary}</p>

              </div>
            }

        </div>

    </div>
  )
}
