'use client'

import { IEvent } from '@/lib/mongodb/database/models/event.model'
import React from 'react'

const CheckoutButton = ({event}:{event: IEvent}) => {
  
    const hasEventFinished = new Date(event.endDateTime) < new Date();
  
    return (
    <div>CheckoutButton</div>
  )
}

export default CheckoutButton