import React from "react";
import Header from "./Header";
import Card from "./Card";
import godDetails from "../god-details";

// function getGods(ok) {
//   return <Card key={ok.id} name={ok.name} career={ok.career} />;
// }
// function App() {
//   return (
//     <div>
//       <Header />
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-3 col-md-6 col-sm-12">
//             <div className="card bg-light mb-3">
//               <Card
//               name="Ra"
//               img="./images/go3ran.png"
//               title="God of the Sun" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
function creatCard(gods) {
  return (
    <Card
      key={gods.id}
      name={gods.name}
      img={gods.imgURL}
      title={gods.career}
    />
  );
}
function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="parent">{godDetails.map(creatCard)}</div>
      </div>
    </div>
  );
}
export default App;
