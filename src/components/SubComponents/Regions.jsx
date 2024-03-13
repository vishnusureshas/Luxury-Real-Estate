import React from 'react'

const Regions = () => {
  return (
    <>
    <section id="regions">
        <h1>OUR REGIONS</h1>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book
         </p>
         <div className="region_container">
            <div className="card">
                <img src="/region1.jpg" alt="mountains" />
                <h2>Mountains</h2>
                <p><span>90</span>Properties</p>
            </div>
            <div className="card">
                <img src="/region2.jpg" alt="coastline" />
                <h2>Coastline</h2>
                <p><span>52</span>Properties</p>
            </div>
         </div>
    </section>
    </>
  )
}

export default Regions