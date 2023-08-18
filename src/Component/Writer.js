import React from 'react'
import persion from "../logo/man.png"
const Writer = () => {
  return (
    <div className='smallCard-containeer'>
    <div className='smallcard-parent'>
     <div>
     <div className='smallcard-persion-img bg' style={{backgroundImage:`url(${persion})`}}>

</div>
     </div>
     <div className='smallcard-userdata write-data '>
     <div className='write-name'>WRITTEN BY </div>
      <div className='h5'>Dabloo Kumar Yadav</div>
    <div>August 2023</div>
    
     </div>
    </div>
  
  </div>
  )
}

export default Writer