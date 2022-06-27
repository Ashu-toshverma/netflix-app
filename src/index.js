import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import Sdata from './Sdata';
import './index.css';

// import Netflix from './Netflix';
// import Amazon from './Amazon';




// const favseries = "netflix";
// if-else statement
// const FavS=()=>{
//   if(favseries === "netflix"){
//     return <Netflix/>;
//   }
//   else{
//     return <Amazon/>;
//   }
// }

// const ncard=(val)=>{
//   return(
//     <Card
//     imgscr={val.imgscr}
//       sname={val.title}
//       title={val.sname}
//       links={val.links}
//       />

//   );
// }



ReactDOM.render(
  <>
  <h1 className="heading_style">LIST OF 9 NETFLIX SERIES IN 2021 </h1>
  
 {/* {Sdata.map(ncard)} */}
 {Sdata.map((val)=>{ // map method
  return(
    <Card
    imgscr={val.imgscr}
      sname={val.title}
      title={val.sname}
      links={val.links}
      />
  );

  })} 
    {/* <Card

      imgscr={Sdata[0].imgscr}
      sname={Sdata[0].title}
      title={Sdata[0].sname}
      links={Sdata[0].links}
    />
    
    <Card

      imgscr={Sdata[1].imgscr}
      sname={Sdata[1].title}
      title={Sdata[1].sname}
      links={Sdata[1].links}
    />
    
    <Card

      imgscr={Sdata[2].imgscr}
      sname={Sdata[2].title}
      title={Sdata[2].sname}
      links={Sdata[2].links}
    />
    
    <Card

      imgscr={Sdata[3].imgscr}
      sname={Sdata[3].title}
      title={Sdata[3].sname}
      links={Sdata[3].links}
    />
    
    <Card

      imgscr={Sdata[4].imgscr}
      sname={Sdata[4].title}
      title={Sdata[4].sname}
      links={Sdata[4].links}
    />
    
      */}


      {/* <FavS/> */}
      {/* ternary operator  */}
      {/* {favseries === "netflix"? <Netflix/>:<Amazon/>}  */}

  </>,



  document.getElementById('root')
);


