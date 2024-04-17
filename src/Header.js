import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
function Header({setCategory}) {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    if(searchValue.trim()){
    setCategory(searchValue.trim());
    }
  };
  function handleClick(val){
    setCategory(val)
  }
  return (
    <div id="header" className="p-4">
      <div id="flex">
      <input type="text" className="form-control mb-2 search" placeholder="Search for news" value={searchValue} onChange={handleInputChange}/>
      <button className="btn btn-primary search-button" onClick={handleSearch}>Search</button>
      </div>
       <br />
      <h3>Top Stories for You</h3>
      <ul className="list-unstyled" id="headerlist">
        <li className="mr-3 mb-1 btn btn-secondary" onClick={() => handleClick("All")}>All</li>
        <li className="mr-3 mb-1 btn btn-secondary" onClick={() => handleClick("Android")}>Android</li>
        <li className="mr-3 mb-1 btn btn-secondary" onClick={() => handleClick("Cricket")}>Cricket</li>
        <li className="mr-3 mb-1 btn btn-secondary" onClick={() => handleClick("iPhone")}>iPhone</li>
        <li className="mr-3 mb-1 btn btn-secondary" onClick={() => handleClick("Google")}>Google</li>
        <li className="mr-3 mb-1 btn btn-secondary" onClick={() => handleClick("Nano Technology")}>Nano Technology</li>
        <li className="mr-3 mb-1 btn btn-secondary" onClick={() => handleClick("Mental Health")}>Mental Health</li>
        <li className="mr-3 mb-1 btn btn-secondary" onClick={() => handleClick("Football")}>Football</li>
      </ul>
    </div>
  );
}

export default Header;
