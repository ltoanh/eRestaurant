import React from 'react'
import { useParams } from 'react-router-dom'

function StoreContent() {
  const {id} = useParams();
  return (
    <div>StoreContent {id}</div>
  )
}

export default StoreContent