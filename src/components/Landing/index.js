import yellow from './../../assets/SVGs/Mask group.svg'
import pcb from './../../assets/SVGs/Group.svg'
import date from './../../assets/SVGs/Group 1000006369.svg'
import Image from 'next/image'
import Button from '@mui/material/Button';

const Landing = () => {
	return (
		<div className='p-10 px-16 w-full bg-[#007BFF] text-[#EDEDED] grid grid-cols-2 '>
			<div className='flex justify-center'>
				<Image src={yellow} alt='yellow' className='w-4/5' />
			</div>
			<div className='flex flex-col gap-4'>
				<div>
					<span className='text-[#FCDE5A]'>full syllabus course</span>
					<span> + revision + test series</span>
				</div>
				<div className='font-bold text-5xl'>
					<span className='text-[#FCDE5A]'>NEET</span>
					<span className='text-white'> rankers course</span>
				</div>
				<div className='text-lg'>write a short description of the course here that talks about what is included and why it should be taken.</div>
				<div className='grid grid-cols-2'>
					<div className='flex items-center gap-3 mt-4'>
						<Image src={pcb} alt='pcb' width={32} height={0} />
						<span>Biology, Physics, Chemistry</span>
					</div>
					<div className='flex items-center gap-3 mt-4'>
						<Image src={date} alt='date' width={32} height={0} />
						<span>batch starts <strong>24th June</strong></span>
					</div>
				</div>
				<div className='flex justify-between items-center border border-4 border-[#FCDE5A] p-4 rounded-2xl'>
					<div>
						<div className='text-[#FCDE5A]'>starting at</div>
						<div className='flex items-center gap-2 text-[#FCDE5A] py-1'>
							<div className='text-5xl font-bold'>₹1,660</div>
							<div>/month</div>
						</div>
						<div>
							<span className='line-through text-[#EA2424]'>₹2,550</span>
							<span>* offer valid until 21st June</span>
						</div>
					</div>
					<div className='rounded-2xl bg-[#00364E] p-3 px-4 aspect-square h-auto text-xl'><strong>40%</strong><br />OFF</div>
				</div>
				<div className='grid grid-cols-2 gap-4'>
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
			</div>
		</div>
	)
}

export default Landing