import React from "react"

export default () => (
  <div style={{margin: '16px'}}>
    <section>
      <div style={{color: 'rgba(255, 255, 255, 0.75)', fontFamily: 'Poppins', fontWeight: 300,}}>2018 - present</div>
      <h2 style={{color: '#fff', fontFamily: 'Poppins', margin: 0, lineHeight: '2rem', fontSize: '2rem'}}>Developer consultant at KTH's e-learning team</h2>
      <div style={{margin: '0 -16px', display: 'flex', flex: '1 0 auto', color: 'rgba(255,255,255,0.75)'}}>
        <div style={{fontFamily: 'Poppins', width: '160px', margin: '16px', fontSize: '1rem'}}>
          <div>Company</div>
          <div style={{fontWeight: 700}}>Find-out Technologies AB</div>
        </div>
        <div style={{fontFamily: 'Poppins', width: '160px', margin: '16px', fontSize: '1rem'}}>
          <div>Customer</div>
          <div style={{fontWeight: 700}}>KTH Royal Institute of Technology</div>
        </div>
      </div>
      <main style={{fontFamily: 'Merriweather', color: 'rgba(255,255,255,0.75)'}}>
      Developer at e-learning team of the KTH. Mainly write Node.JS open-source apps (github.com/kth) to sync data between KTH’s internal systems and Canvas –an externally developed Learning Management System–; create external tools integrated in Canvas like transfer of grades from Canvas to Ladok (Swedish central system); also other tasks like help to migrate and shutdown old databases and help with the digitalisation goals of the institution.
      </main>
    </section>
  </div>
)
