import Image from 'next/image'
import book from './../../assets/SVGs/image 9.svg'
import check from './../../assets/SVGs/checklist 1.svg'
import left from './../../assets/SVGs/expand_more.svg'
import { Button } from '@mui/material'

const Books = () => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 w-full">
			<div className="bg-[#D4E9FF] flex flex-col items-center p-8">
				<div className='text-4xl font-bold text-[#007BFF] mb-4 lg:hidden'>IL books <span className='text-[#080E14]'>for NEET</span></div>
				<Image src={book} alt="book" width={425} height={0} />
				<div className='flex gap-2'>
					<div className='bg-[#fff] opacity-[60%] rounded-lg aspect-square px-3 flex items-center justify-center'>
						<Image src={left} alt="left" width={12} height={0} />
					</div>
					<div className='bg-[#fff] rounded-lg aspect-square px-3 flex items-center justify-center'>
						<Image src={left} alt="left" width={12} height={0} style={{ rotate: '180deg'}}/>
					</div>
				</div>
			</div>
			<div className='bg-[#FEFBEE] p-4 lg:p-16 py-8 lg:py-16 flex flex-col gap-4 justify-center'>
				<div className='text-5xl font-bold text-[#007BFF] mb-8 hidden lg:block'>IL books <span className='text-[#080E14]'>for NEET</span></div>
				<div className='text-3xl lg:text-2xl text-[#080E14] font-bold mb-4'>Botany class 11 <span className='text-lg font-normal text-[#6B6E72]'>(12 books)</span></div>
				<div className='text-[#52565B] flex gap-2'>
					<Image src={check} alt="check" width={20} height={0} />
					Based on latest NEET Pattern
				</div>
				<div className='text-[#52565B] flex gap-2'>
					<Image src={check} alt="check" width={20} height={0} />
					Concise Theory + Practice Questions
				</div>
				<div className='text-[#52565B] flex gap-2'>
					<Image src={check} alt="check" width={20} height={0} />
					Topic-wise Detailed MCQs for revision
				</div>
				<div className='mt-6'>
					<Button variant='outlined' disableElevation color='black' className='w-full lg:w-auto' sx={{ fontWeight: 'bold', borderRadius: '0.5rem', paddingX: '4rem' }} >
						download sample (PDF)
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Books