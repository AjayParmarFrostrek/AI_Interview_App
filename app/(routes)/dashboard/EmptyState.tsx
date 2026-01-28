import React from 'react'
import CreateinterviewDialog from '../_components/CreateinterviewDialog'

function EmptyState() {
  return (
    <div className='mt-14 flex flex-col items-center gap-5 border border-dashed p-10 border-4 
             rounded-2xl bg-gray-50'>
        
    <h2 className='mt-2 text-lg text-gray-500'> You do not have any interview created</h2>
    <CreateinterviewDialog/>
    </div>
  )
}

export default EmptyState

