import * as React from 'react';
import Button from '@mui/material/Button';
import Image from 'next/image'
import logo from './../assets/SVGs/Group 45506.svg'
import call from './../assets/SVGs/call.svg'
import ham from './../assets/SVGs/Icon.svg'
import drop from './../assets/SVGs/expand_more1.svg'
import Landing from '@/components/Landing';
import Overview from '@/components/Overview';
import Schedule from '@/components/Schedule';
import Faculty from '@/components/Faculty';
import Books from '@/components/Books';
import Syllabus from '@/components/Syllabus';
import Benefits from '@/components/Benefits';
import Reviews from '@/components/Reviews';
import Scholarship from '@/components/Scholarship';
import Download from '@/components/Download';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-start `}
    >
      <nav className='bg-[#007BFF] w-full text-[#E7E7E7] py-2 px-4 lg:px-12 flex items-center justify-end gap-4 lg:gap-6'>
        <div className='flex gap-2 items-center me-auto'>
          <Image 
            src={logo}
            width={80}
            height={0}
            alt='logo'
          />
          <div className='flex-col items-center hidden lg:flex'>
            <div className='w-[1px] bg-[#E6E6E6] leading-4 '>&nbsp;</div>
            <div className='pb-1 text-[#E6E6E6] text-xs'>by</div>
            <div className='w-[1px] bg-[#E6E6E6] leading-4 '>&nbsp;</div>
          </div>
          <div className='hidden lg:block'>
            <div className=' text-2xl font-impact'>
              Sri Chaitanya
            </div>
            <div className='leading-3 text-xs'>
              Educational Institutions
            </div>
          </div>
        </div>
        <div className='hidden lg:block'>
          <Button variant='outlined' disableElevation color='white'>
            class 12+ | NEET
          </Button>
        </div>
        <div className='hidden lg:block'>
          study material
        </div>
        <div className='hidden lg:block'>
          result
        </div>
        <div className='hidden lg:block'>
          more
        </div>
        <div className='hidden lg:flex items-center gap-2'>
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
        <Image src={ham} alt='ham' width={18} height={0} className='lg:hidden'/>
      </nav>
      <div className='h-[1px] w-full bg-[#2C91FF] hidden lg:block'></div>
      <div className='px-4 bg-[#007BFF] w-full lg:hidden'>
        <Button variant='contained' disableElevation color='white' fullWidth sx={{ justifyContent: 'space-between'}} >
          class 12+ | NEET
          <Image src={drop} alt='drop' width={9} height={0} />
        </Button>
      </div>
      <Landing />
      <Overview />
      <Schedule />
      <Faculty />
      <Books />
      <Syllabus />
      <Benefits />
      <Reviews />
      <Scholarship />
      <Download />
      <Footer />
    </div>
  );
}