import React from 'react'

function Contact() {
  return (
    <div id='contact'>
   
    <div className='contact1'>
    <h1>Contact  <br></br> Us</h1>
    <div id='h4'>
      <h4>Phone:618900000</h4>
      <h4>Email:Zacki98@gmail.com</h4>
      <h4>City:Mogadisho/Banaadir</h4>
    </div>
    <div id='Input'>
     <input type="text" placeholder='Name'/><br></br>
     <input type="Email" placeholder='Gmail' /><br></br>
     <input type="number" placeholder='Phone' />
     <textarea name="" placeholder='Say somthing.....'></textarea>
     <button>Submit</button>
     </div>
    </div>

    </div>
  )
}

export default Contact