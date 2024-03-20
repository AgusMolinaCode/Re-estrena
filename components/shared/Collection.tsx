import { IEvent } from '@/lib/mongodb/database/models/event.model'
import React from 'react'

export interface CollectionProps {
  data: IEvent[]
  emptyTitle: string
  emptyStateSubtext: string
  collectionType?: 'Events_Organized' | 'My_Tickets' | 'All_Events' 
  urlParamName?: string
  page: number | string
  totalPages?: number
  limit:number
}

const Collection = ({
    data,
    emptyTitle,
    emptyStateSubtext,
    collectionType,
    urlParamName,
    page,
    totalPages = 0
}: CollectionProps) => {
  return (
    <div>Collection</div>
  )
}

export default Collection