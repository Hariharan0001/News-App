import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
function Twitter() {
  let twitterId = [
    "https://twitter.com/elonmusk",
    "https://twitter.com/sundarpichai",
    "https://twitter.com/MarkZuckss",
    "https://twitter.com/BillGates",
    "https://twitter.com/JeffBezos"
  ];
  let name = ["Elon Musk", "Sundar Pichai","Mark Elliot Zuckerberg","BillGates","JeffBezos"];
  let img = [
    "https://th.bing.com/th/id/OIP.xYmbTtivEBWDM1-YNQ4M5gHaEK?w=291&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    "https://th.bing.com/th?id=OIP.gp1OKoE4zoLCCucevnQ6zgAAAA&w=281&h=221&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/330px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
    "https://th.bing.com/th/id/OIP.tVN2lIR_BgGStUnuAJwqWgHaFm?w=222&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    "https://th.bing.com/th/id/OIP.wy_qa7E9d__e9xWjXJZZZAHaDt?w=305&h=174&c=7&r=0&o=5&dpr=1.1&pid=1.7"
  ];
  return (
    <div id="twitterbody">
      {twitterId.map((id, index) => (
        <div key={index} id="twittercard">
            <div className="text-center">
          <img id="twitterimg" src={img[index]} alt="article" />
          </div>
          <div className="text-center">{name[index]}</div>
          <div className="text-center">
          <a href={id} >
            <button className="btn btn-primary">Follow</button>
          </a>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Twitter;
