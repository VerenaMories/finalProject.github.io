import React from 'react';
import style from "./ColorBox.module.css";
import $ from 'jquery';
import { useEffect } from 'react';


export default function ColorBox() {
  
  
  
  useEffect(() => {
    $('#toggleBtn').click(function () {
      let optionBox=$('#optionBox').outerWidth();
      if($('#colorBox').css('left')=== '0px')
      {
          $('#colorBox').animate({left:`-${optionBox}px`},1000);
      }
     else{
      $('#colorBox').animate({left:`0px`},1000);
     }
  });
  
  let colorItemm=  $('.colorItemm');
  colorItemm.eq(0).css('backgroundColor','tomato');
  colorItemm.eq(1).css('backgroundColor','#09c');
  colorItemm.eq(2).css('backgroundColor','lightgreen');
  colorItemm.eq(3).css('backgroundColor','blue');
  colorItemm.eq(4).css('backgroundColor','teal');
  
  colorItemm.click(function(e){
  
  let bgColor=$(e.target).css('backgroundColor');
  $('h5, h2, p').css('color' ,bgColor)
  })
  });
  return (
    <>
   <div id="colorBox" className={ ` text-center ${style.colorBox} `}>
       <div id="optionBox" className={`${style.optionBox} `}>
           <h3> Choose your color:</h3>
           <div className={`colorItemm ${style.colorItem}`}></div>
           <div className={`colorItemm ${style.colorItem} `}></div>
           <div className={`colorItemm ${style.colorItem}` }></div>
           <div className={`colorItemm ${style.colorItem}`}></div>
           <div className={`colorItemm ${style.colorItem}`}></div>

       </div>
       <i className={`fa-solid fa-gears fa-2x ${style.toggleBtn  } `} id='toggleBtn'></i>
   </div>
    

    
    
    </>
  )
}
