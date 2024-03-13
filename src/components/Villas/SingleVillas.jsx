import React from 'react'
import {villas} from '../../villas'
import { useParams } from 'react-router-dom'

const SingleVillas = () => {
    const {id} = useParams()
    const numericId = Number(id)
    const filteredVilla = villas.filter((villa)=>villa.id === numericId[0])
  return (
    <section id="singleVilla" className='page'>
          <div className="container">
            <h3>{filteredVilla.name}</h3>
            <div className="images">
                <div className="villaImg">
                    <img src={filteredVilla.image} alt={filteredVilla.name}/>
                </div>
                <div className="otherImgs">
                    <div>
                        <img src="/landing.jpg" alt="landing"/>
                        <img src="/people.jpg" alt="people" />
                    </div>

                    <div>
                        <img src="/people2.jpg" alt="people2" />
                        <img src="/villa10.jpg" alt="villa" />
                    </div>
                </div>
            </div>
            <h4>{filteredVilla.location}</h4>
            <p>
                {filteredVilla.bathrooms} Bathrooms / {filteredVilla.bedrooms} Bedrooms / 
                {filteredVilla.guests} Guests / {filteredVilla.squareMeter}
            </p>

            <div className='checkin_out'>
                <h5>Check In; <span>9:00 AM</span></h5>
                <h5>Check Out: <span>11:00 PM</span></h5>
            </div>
            <div className="location">
                <h4>LOCATION</h4>
                <iframe
                 src="https://www.google.com/maps/search/location/@12.1531182,75.0988186,11z/data=!3m1!4b1?entry=ttu" 
                 style={{width:'100%',height:'100%',border:0}}
                 allowFullScreen=""
                 loading='lazy'
                 referrerPolicy='no-referrer-when-downgrade'
                 >
                </iframe>
            </div>
          </div>
    </section>
  )
}

export default SingleVillas