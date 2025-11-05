import React from 'react'
import Footer from '../components/Footer'
import Header  from '../components/Header'
import Preview  from '../components/Preview'

function ViewResume() {
  return (
    <div>
        <div className='container my-5'>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-6"> <Preview/> </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    </div>
  )
}

export default ViewResume