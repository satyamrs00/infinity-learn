import Image from 'next/image'
import green from './../../assets/SVGs/DSC08615 2.svg'
import cap from './../../assets/SVGs/Frame.svg'
import { Button } from '@mui/material'

const Scholarship = () => {
	return (
		<div className="bg-[#00364E] text-[#CECFD0] px-4 pt-8 lg:pt-0 lg:px-20 grid grid-cols-1 lg:grid-cols-2 w-full overflow-hidden">
			<div className='p-2 lg:p-4 pb-0 lg:pb-0 flex justify-end flex-col items-center relative order-last lg:order-none'>
				<Image src={cap} alt='cap' width={120} height={0} className='-mb-8 z-10 w-[80px] lg:w-[120px]' />
				<Image src={green} alt='green' width={600} height={0} className='z-10 w-[355px] lg:w-[600px] ' />
				<div className='mb-6 lg:hidden z-10 self-stretch'>
					<Button variant='contained' disableElevation fullWidth color='primary' sx={{ borderRadius: '0.5rem', paddingX: '4rem'}}>
						apply to scholarships
					</Button>
				</div>
				<div className='h-full absolute flex flex-col justify-end'>
					<div className='overflow-hidden h-[15rem] -ms-[30%] lg:ms-0'>
						<div className='bg-[#004463] w-[25rem] lg:w-[40rem] aspect-square rounded-full'></div>
					</div>
				</div>
			</div>
			<div className='p-0 lg:p-20 flex flex-col gap-4 lg:gap-8'>
				<div className='text-4xl lg:text-5xl text-white font-bold leading-[3rem] lg:leading-[4rem]'>get up to <span className='text-[#FCDE5A]'>50% scholarship</span></div>
				<div className='lg:text-xl'>over <span className='text-white font-bold'>500+</span> students awarded scholarships worth of <span className='text-white font-bold'>₹50L</span></div>
				<div className='mt-2 hidden lg:block'>
					<Button variant='contained' disableElevation color='primary' sx={{ borderRadius: '0.5rem', paddingX: '4rem'}}>
						apply to scholarships
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Scholarship