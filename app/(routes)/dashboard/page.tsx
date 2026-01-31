"use client";

import React, { useState } from 'react'
import { useUser } from '@clerk/nextjs'
import EmptyState from './EmptyState';
import CreateInterviewDialog from '../_components/CreateInterviewDialog';


function Dashboard() {
    const {user} = useUser();
    const [interviewList, setInterviewList] = useState([]);
  return (
 <div className='py-20 px-10 md:px-28 lg:px-44 xl:px-56'> 
    <div className='flex justify-between items-center'>
       <div>
          <h2 className= 'text-lg text-gray-500'> My Dashboard</h2>
          <h2>Welcome, {user?.fullName}</h2>
         </div>
     <CreateInterviewDialog/>
     </div>
    {interviewList.length == 0 && 
      <EmptyState />}
 </div>
  )
}

export default Dashboard