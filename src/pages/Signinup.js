import React from 'react'
 import "./Signinup.css"
const Signupin = () => {
  return ( 
  
   <div className='userlogin'>
  <div className='signin'>
  <h1>Sign in</h1>
  <span>or use your account</span>
  <form class="form">
     
      <fieldset class="email">
        <input type="email" placeholder="Email" />
      </fieldset>
      <fieldset class="password">
        <input type="password" placeholder="Password" />
      </fieldset>
    
      <button type="submit" class="btnform">SIGN IN</button>
    </form>
    <span>Forgot your password?</span>
	</div>
  
  <div className='signup'>
    <div className='signup1'>
   <h1>Join Us Today!</h1>
   </div>
   <div className='signup2'>
   Look for events and grow your buissnes!
   </div>
   <button type="submit" class="btnsignup">SIGN UP</button>
  </div>
  </div>


   

  );

}

export default Signupin;