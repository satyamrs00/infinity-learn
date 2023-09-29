import yellow from './../../assets/SVGs/Mask group.svg'
import yellowM from './../../assets/SVGs/Mask group_mobile.svg'
import pcb from './../../assets/SVGs/Group.svg'
import pcbM from './../../assets/SVGs/Group (3).svg'
import date from './../../assets/SVGs/Group 1000006369.svg'
import dateM from './../../assets/SVGs/Group 1000006369 (1).svg'
import Image from 'next/image'
import Button from '@mui/material/Button';

const Landing = () => {
	return (
		<div className='pt-10 lg:px-16 w-full bg-[#007BFF] text-[#EDEDED] grid lg:grid-cols-2 grid-cols-1'>
			<div className='flex justify-center my-4 p-4 lg:p-0'>
				<Image src={yellow} alt='yellow' width={550} height={0} className='hidden lg:block' />
				<Image src={yellowM} alt='yellow' width={550} height={0} className='lg:hidden' />
			</div>
			<div className='flex flex-col gap-4 p-4 lg:bg-[#007BFF] bg-white text-[#080E14] lg:text-[#EDEDED]'>
				<div className='text-sm lg:text-base'>
					<span className='text-[#FF7A00] lg:text-[#FCDE5A]'>full syllabus course</span>
					<span className='text-[#52565B] lg:text-white'> + revision + test series</span>
				</div>
				<div className='font-bold text-5xl'>
					<span className='text-[#007BFF] lg:text-[#FCDE5A]'>NEET</span>
					<span className=''> rankers course</span>
				</div>
				<div className='text-[#52565B] lg:text-[#EDEDED] text-lg'>write a short description of the course here that talks about what is included and why it should be taken.</div>
				<div className='grid grid-cols-1 lg:grid-cols-2'>
					<div className='flex items-center gap-3 mt-4'>
						<Image src={pcb} alt='pcb' width={32} height={0} className='hidden lg:block' />
						<Image src={pcbM} alt='pcb' width={32} height={0} className='lg:hidden' />
						<span >Biology, Physics, Chemistry</span>
					</div>
					<div className='flex items-center gap-3 mt-4'>
						<Image src={date} alt='date' width={32} height={0} className='hidden lg:block' />
						<Image src={dateM} alt='date' width={32} height={0} className='lg:hidden' />
						<span>Batch starts <strong>24th June</strong></span>
					</div>
				</div>
				<div className='flex justify-between items-center text-sm lg:text-base lg:border lg:border-4 bg-[#E3F1FF] lg:bg-transparent lg:border-[#FCDE5A] p-4 rounded-2xl'>
					<div>
						<div className='lg:text-[#FCDE5A]'>starting at</div>
						<div className='flex items-center gap-2 lg:text-[#FCDE5A] py-1'>
							<div className='text-3xl lg:text-5xl font-bold'>₹1,660</div>
							<div>/month</div>
						</div>
						<div>
							<span className='line-through lg:text-[#EA2424]'>₹2,550</span>
							<span> * offer valid until 21st June</span>
						</div>
					</div>
					<div className='rounded-2xl bg-[#00364E] p-3 px-4 aspect-square h-auto text-xl text-white'><strong>40%</strong><br />OFF</div>
				</div>
				<div className='grid-cols-2 gap-4 hidden lg:grid'>
					<Button variant='contained' disableElevation color='white' sx={{
						borderRadius: '0.5rem'
					}}>
						enrol at ₹1,660/month
					</Button>
					<Button variant='outlined' disableElevation color='yellow' sx={{
						borderRadius: '0.5rem'
					}}>
						start learning for free
					</Button>
				</div>
				<div className='grid-cols-1 gap-4 grid lg:hidden mb-10 mt-4'>
					<Button variant='contained' disableElevation color='primary' sx={{
						borderRadius: '0.5rem'
					}}>
						enrol at ₹1,660/month
					</Button>
					<Button variant='outlined' disableElevation color='black' sx={{
						borderRadius: '0.5rem'
					}}>
						book free demo class
					</Button>
					<div className='text-[#007BFF] text-center'>download brochure</div>
				</div>
			</div>
		</div>
	)
}

export default Landing