import React, { useState, useEffect } from 'react'
import axios from 'axios'
import printSearchResult from '../../Home'

function Usersearchlist () {

       
  const SearchAPI = 'https://ok-myhome.herokuapp.com/search/myhome'
  const [search, setSearch] = useState({});
  const [result, setResult] = useState([]);
  console.log(search)

  const addSearch = async () => {
      const res = await axios.post(SearchAPI, search)
      console.log("res", res.data)
      setResult(res.data);
  }
    

    return (
        <div>

            <printSearchResult/>
        </div>
    )
}
export default Usersearchlist 