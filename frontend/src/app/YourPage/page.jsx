import React from 'react'
import Link from 'next/link'

const YourPage = () => {
  return (
    <div>
        <Link href='/Create'>
        <button>Click here to create page</button>
        </Link>
    </div>
  )
}

export default YourPage