import React from "react"
import Circle from "./circle-icon"

export default () => (
  <div>
    <section className='my-16'>
      <div className='font-bold text-indigo-100'>Current job</div>
      <h2 className='text-xl font-bold my-2'>Developer consultant at KTH's e-learning team</h2>
      <div className='my-4'>
        <div className='my-4 text-sm'>
          <div className='text-indigo-300'>Company</div>
          <div className='text-indigo-100'>Find-out Technologies AB</div>
        </div>
        <div className='my-4 text-sm'>
          <div className='text-indigo-300'>Customer</div>
          <div className='text-indigo-100'>KTH Royal Institute of Technology</div>
        </div>
      </div>
      <div className='font-bold text-indigo-200'>
        <Circle className='inline-block stroke-current align-middle w-4 h-4' />
        <div className='inline-block px-2 align-middle'>Full-time</div>
      </div>
    </section>

    <section className='my-16'>
      <div className='font-bold text-indigo-100'>Current project</div>
      <h2 className='text-xl font-bold my-2'>Freelance full-stack developer for COAM's magazine</h2>
      <div className='my-4'>
        <div className='my-4 text-sm'>
          <div className='text-indigo-300'>Customer</div>
          <div className='text-indigo-100'>COAM (Official Association of Architects of Madrid)</div>
        </div>
      </div>
      <div className='font-bold text-indigo-200'>
        <Circle className='inline-block stroke-current align-middle w-4 h-4' />
        <div className='inline-block px-2 align-middle'>Sporadic</div>
      </div>
    </section>

    <section className='my-16'>
      <div className='font-bold text-indigo-100'>2013/sep - 2018/jun</div>
      <h2 className='text-xl font-bold my-2'>Computer Enginner Undergraduate</h2>
      <div className='my-4'>
        <div className='my-4 text-sm'>
          <div className='text-indigo-300'>Institution</div>
          <div className='text-indigo-100'>UPM (Technical University of Madrid)</div>
        </div>
      </div>
      <div className='font-bold text-indigo-200'>
        <Circle className='inline-block stroke-current align-middle w-4 h-4' />
        <div className='inline-block px-2 align-middle'>Full-time</div>
      </div>
    </section>
  </div>
)
