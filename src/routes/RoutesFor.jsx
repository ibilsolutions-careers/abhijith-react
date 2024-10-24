import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from '../components/Home';
import BookDescriptions from '../components/BookDescriptions';

export default function RoutesFor() {

// creating routes for pages


  return (
    <Router>
      <Routes>
          <Route element={<Home></Home>}  path='/'  />
          <Route element={<BookDescriptions></BookDescriptions>}  path='/desc'  />
          {/* <Route element={<Home></Home>}  path='/'  /> */}




      </Routes>



    </Router>
  )
}
