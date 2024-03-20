import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flew-row'>
        <Link href='/'>
          <Image src='/assets/images/logo.svg' alt='Fiesta Logo' width={128} height={128} />
        </Link>

        <p>2024 Even-Dev. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
