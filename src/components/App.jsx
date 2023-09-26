import React  from "react";
import Card from "./Card";
import Sdata from "./Sdata";




const App = () => (
<>
 {Sdata.map((val)=>{
return(
   <Card key={val.id} 
   imgsrc={val.imgsrc}
   title= {val.title}
   sname={val.sname}
   link={val.link} />
);
})}
</>
);

export default App;