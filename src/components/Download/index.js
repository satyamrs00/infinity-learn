import phone from './../../assets/SVGs/Group 1000005986.svg'
import apple from './../../assets/SVGs/Group 1000005265.svg'
import android from './../../assets/SVGs/Group 1000005266.svg'
import Image from 'next/image'
import { Button, Input, InputBase } from '@mui/material'

const Download = () => {
	return (
		<>
			<div className="w-full flex justify-center bg-[#F1F2F6] p-16 pb-0 gap-8  text-[#080E14]">
				<div className='flex flex-col gap-8 w-6/12 px-10'>
					<div className='font-bold text-5xl text-[#007BFF] mb-4 leading-[3.6rem]'>best study material, <span className='text-[#080E14]'>now at your finger tips!</span></div>
					<div className='text-[#6B6E72] text-lg ms-12'>live classes</div>
					<div className='text-[#6B6E72] text-lg ms-12'>progress tracking</div>
					<div className='text-[#6B6E72] text-lg ms-12'>diverse question banks</div>
					<div className=''>
						<div className='text-xl font-bold'>download the app</div>
						<div className='flex gap-4 mt-2'>
							<Image src={apple} alt='apple' width={150} height={0} />
							<Image src={android} alt='android' width={150} height={0} />
						</div>
					</div>
				</div>
				<Image src={phone} alt='phone' width={400} height={0} className='-mb-[2px]'/>
			</div>
			<div className='bg-[#00364E] flex gap-16 justify-center w-full p-20 text-[#FFFFFF]'>
				<div className='w-5/12 '>
					<div className='font-bold text-5xl mb-4 leading-[3.6rem]'>book a <span className='text-[#FCDE5A]'>demo session</span></div>
					<div className='text-lg'>A short sentence about how an academic counsellor would help the student.</div>
				</div>
				<div className='flex flex-col gap-2 justify-center'>
					<div className='mb-1 items-stretch flex'>
						<div className='rounded-s-2xl rounded-e-none bg-white px-4 py-2 text-[#080E14] pe-2'>+91</div>
						<input placeholder='enter your mobile number' className='bg-[#FFFFFF] rounded-none px-4 py-2 outline-none border-none text-[#080E14]' />
						<Button variant='contained' disableElevation className='px-4 py-2' sx={{ borderRadius: '0px 1rem 1rem 0' }}>book now</Button>
					</div>
					<div>we will send an otp for verification</div>
				</div>
			</div>
		</>
	)
}

export default Download