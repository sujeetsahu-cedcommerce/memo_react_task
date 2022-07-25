import React from 'react'
import {memo} from 'react';
import { useState } from 'react'
function CurrencyConverter() {

    const [doller,set_Doller] = useState('');
    const [curency,set_Currency] = useState('');
    const [amount ,setAmount] = useState('');

    const get_Amount = (event) => {
        setAmount(event.target.value);
    }

    const Exchange_Amount = () => {
        
        const result = isNaN(amount) ? 0 : 1;
        if(result){
            set_Doller(amount);
            const rupees = amount*79.84;
            set_Currency(rupees);
        }
        else{
            alert("please enter number only");
        }
       
    }

  return (
    <div>
        <div className='main_container'>
            <div style={{textAlign:"center"}}>
                <h2>Currency Converter</h2>
            </div>
          <div className='control_sub_main_width'>
               <label >Enter Amount</label><br/>
               <input type="text" onChange={get_Amount}></input>
           
            <div className='flex_container_options'>
               <div className='flex_container_item'>
                 <label>From</label><br/>
                 <div style={{display:"inline-block"}}><img src="https://image.shutterstock.com/image-vector/vector-image-american-flag-260nw-157626554.jpg" alt="" style={{width:"30px"}}/></div>
                 <select style={{border:"none",backgroundColor:"white"}}>
                    <option></option>
                 </select>
               </div>
               <div>
                 <div><i class="fa-solid fa-arrow-right-long"></i></div>
                 <div><i class="fa-solid fa-arrow-left-long"></i></div>
               </div>
               <div className='flex_container_item'>
                 <label>To</label><br/>
                 <div style={{display:"inline-block"}}><img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" alt="" style={{width:"30px"}}/></div>
                 <select style={{border:"none",backgroundColor:"white"}}>
                    <option style={{}}></option>
                 </select>
               </div>
            </div>
            <div style={{marginTop:"10px"}}>{doller} USD = {curency} INR</div>
            <div style={{marginTop:"10px"}}>
                <button style={{width:"100%",backgroundColor:"violet"}} onClick={Exchange_Amount}>Get Exchange Rate</button>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default memo(CurrencyConverter);