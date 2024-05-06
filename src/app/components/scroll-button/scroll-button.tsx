"use client"
import { useCallback } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { MdKeyboardDoubleArrowUp } from 'react-icons/md'

export const ScollButton = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <div>
      <Link href="#" scroll={false} passHref>
        <Button
          className="rounded-lg bg-[#ffffff87]"
          variant="link"
          onClick={scrollToTop}
        >
          <MdKeyboardDoubleArrowUp size={25} />
        </Button>
      </Link>
    </div>
  )
}

