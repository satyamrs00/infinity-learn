import * as React from 'react';
import Button from '@mui/material/Button';
import Image from 'next/image'
import logo from './../assets/images/Group 45506.png'
import call from './../assets/SVGs/call.svg'
import Landing from '@/components/Landing';
import Overview from '@/components/Overview';
import Schedule from '@/components/Schedule';

export default function HomePage() {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-start `}
    >
      <nav className='bg-[#007BFF] w-full text-[#E7E7E7] py-2 px-12 flex items-center justify-evenly'>
        <div className='flex gap-2 items-center'>
          <Image 
            src={logo}
            width={80}
            height={0}
            alt='logo'
          />
          <div className='flex flex-col items-center '>
            <div className='w-[1px] bg-[#E6E6E6] leading-4 '>&nbsp;</div>
            <div className='pb-1 text-[#E6E6E6] text-xs'>by</div>
            <div className='w-[1px] bg-[#E6E6E6] leading-4 '>&nbsp;</div>
          </div>
          <div>
            <div className=' text-2xl font-impact'>
              Sri Chaitanya
            </div>
            <div className='leading-3 text-xs'>
              Educational Institutions
            </div>
          </div>
        </div>
        <Button variant='outlined' disableElevation color='white' >
          class 12+ | NEET
        </Button>
        <div>
          study material
        </div>
        <div>
          result
        </div>
        <div>
          more
        </div>
        <div className='flex items-center gap-2'>
          <div className='aspect-square bg-[#FCDE5A] p-3 rounded-full'>
            <Image src={call} alt='call' width={15} height={0} />
          </div>
          <div className='flex flex-col text-[#FCDE5A]'>
            <div>need help? talk to experts</div>
            <div className='font-bold '>1800-419-427</div>
          </div>
        </div>
        <Button variant='contained' disableElevation color='white' sx={{ fontWeight: 'bold'}} >
          sign in
        </Button>
      </nav>
      <div className='h-[1px] w-full bg-[#2C91FF]'></div>
      <Landing />
      <Overview />
      <Schedule />
    </div>
  );
}