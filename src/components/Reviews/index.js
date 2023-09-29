import Image from 'next/image'
import star from './../../assets/SVGs/Group 1000006434.svg'
import thumbnail from './../../assets/SVGs/Rectangle 34624378.svg'
import play from './../../assets/SVGs/Group 1000006351.svg'
import r1 from './../../assets/SVGs/Group 1000005982.svg'
import r2 from './../../assets/SVGs/Group 1000005982 (1).svg'
import rs1 from './../../assets/SVGs/Group 1000006120.svg'
import rs2 from './../../assets/SVGs/Group 1000006120 (1).svg'
import rs3 from './../../assets/SVGs/Group 1000006120 (2).svg'

import left from './../../assets/SVGs/expand_more.svg'
import ReviewCard from './ReviewCard'
import ResultCard from './ResultCard'

const Reviews = () => {
	return (
		<div className='w-full'>
			<div className="bg-[#00364E] p-4 py-8 lg:py-16 lg:p-16 w-full text-white">
				<div className="text-4xl lg:text-5xl font-bold text-start lg:text-center mb-8 lg:mb-12">reviews and <span className="text-[#FCDE5A]">results</span></div>
				<div className='bg-[#00364E] flex flex-col lg:flex-row gap-4 lg:gap-6 justify-center mb-52 lg:mb-0 lg:pb-60'>
					<div className='flex gap-2'>
						<Image src={star} alt='star' width={20} height={0} />
						31 Infinity Learners in top 100
					</div>
					<div className='flex gap-2'>
						<Image src={star} alt='star' width={20} height={0} />
						234 Infinity Learners in top 1000
					</div>
				</div>
			</div>
			<div className='flex gap-4 -mt-52 justify-start lg:justify-center px-6 lg:px-20 overflow-x-auto no-scrollbar items-stretch'>
				<div className='bg-white rounded-xl p-4 shadow-[0px_7px_10px_0px_#9AA0D34D] w-full mb-8 min-w-full lg:min-w-0'>
					<div className='relative w-full mb-2'>
						<Image src={thumbnail} alt='thumbnail' className='w-full' />
						<Image src={play} alt='play' width={50} height={0} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
					</div>
					<div className='text-[#52565B] mb-8'>It has been the most amazing experience studying in Sri Chaitanya. I gained a lot of experience.</div>
					<div className='flex gap-8 items-end'>
						<div className='text-[#080E14]'>Ruchil<div className='text-[#6B6E72] text-sm'>hyderabad</div></div>
						<div className='text-sm text-[#FF7A00]'>IITJEE Foundation</div>
					</div>
				</div>
				<ReviewCard review={{ image: r1, name: 'Ruchil', city: 'hyderabad', course: 'IITJEE Foundation', text: 'It has been the most amazing experience studying in Sri Chaitanya. I gained a lot of experience.' }} />
				<ReviewCard review={{ image: r2, name: 'Rakesh', city: 'maharastra', course: 'IITJEE Foundation', text: 'It has been the most amazing experience studying in Sri Chaitanya. I gained a lot of experience.' }} />
			</div>
			<div className='flex gap-2 mt-2 px-20 justify-end mb-12 hidden lg:flex'>
				<div className='bg-[#D4E9FF] opacity-[60%] rounded-lg aspect-square px-3 flex items-center justify-center'>
					<Image src={left} alt="left" width={12} height={0} />
				</div>
				<div className='bg-[#D4E9FF] rounded-lg aspect-square px-3 flex items-center justify-center'>
					<Image src={left} alt="left" width={12} height={0} style={{ rotate: '180deg'}}/>
				</div>
			</div>
			<div className='px-6 lg:px-20 overflow-y-auto no-scrollbar flex gap-8 mb-4 lg:mb-20'>
				<ResultCard result={{ image: rs1, name: 'Brijesh', city: 'Kochi, Kerala', air: 21, score: 700, color: '#FBDD5A' }} />
				<ResultCard result={{ image: rs2, name: 'Brijesh', city: 'Kochi, Kerala', air: 256, score: 671, color: '#FBDD5A' }} />
				<ResultCard result={{ image: rs3, name: 'Brijesh', city: 'Kochi, Kerala', air: 21, score: 700, color: '#FBDD5A' }} />
				<ResultCard result={{ image: rs1, name: 'Brijesh', city: 'Kochi, Kerala', air: 21, score: 700, color: '#FBDD5A' }} />
				<ResultCard result={{ image: rs2, name: 'Brijesh', city: 'Kochi, Kerala', air: 256, score: 671, color: '#FBDD5A' }} />
			</div>
		</div>
	)
}

export default Reviews