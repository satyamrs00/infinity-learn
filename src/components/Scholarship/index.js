import Image from 'next/image'
import green from './../../assets/SVGs/DSC08615 2.svg'
import cap from './../../assets/SVGs/Frame.svg'
import { Button } from '@mui/material'

const Scholarship = () => {
	return (
		<div className="bg-[#00364E] text-[#CECFD0] px-20 grid grid-cols-2 w-full overflow-hidden">
			<div className='p-4 pb-0 flex justify-center flex-col items-center relative'>
				<Image src={cap} alt='cap' width={120} height={0} className='-mb-8' />
				<Image src={green} alt='green' width={600} height={0} className='z-10' />
				<div className='h-full absolute flex flex-col justify-end'>
					<div className='overflow-hidden h-[20rem]'>
						<div className='bg-[#004463] w-[40rem] aspect-square rounded-full  '></div>
					</div>
				</div>
			</div>
			<div className='p-20 flex flex-col gap-8'>
				<div className='text-5xl text-white font-bold leading-[4rem]'>get up to <span className='text-[#FCDE5A]'>50% scholarship</span></div>
				<div className='text-xl '>over <span className='text-white font-bold'>500+</span> students awarded scholarships worth of <span className='text-white font-bold'>₹50L</span></div>
				<div className='mt-2'>
					<Button variant='contained' disableElevation color='primary' sx={{ borderRadius: '0.5rem', paddingX: '4rem'}}>
						apply to scholarships
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Scholarship