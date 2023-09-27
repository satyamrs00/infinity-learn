import recco from './../../../assets/SVGs/Tags.svg'
import one from './../../../assets/SVGs/Ellipse 90.svg'
import two from './../../../assets/SVGs/Ellipse 91.svg'
import three from './../../../assets/SVGs/Ellipse 93.svg'
import Image from 'next/image'
import { Button } from '@mui/material'
const PlanCard = ({ plan }) => {
	return (
		<div className="bg-white rounded-xl p-4 flex flex-col gap-6" style={{
			boxShadow: '0px 0px 20px 0px #9AA0D34D'
		}}>
			{plan.recommended && <div className='-ms-8'>
				<Image src={recco} alt='recco' width={180} height={0} />
			</div>}
			<div className='flex gap-16'>
				<div className='flex flex-col items-center'>
					<div className='bg-[#00364E] aspect-square px-4 text-white text-4xl flex justify-center items-center flex-col rounded-xl font-bold'>{plan.months}<div className='font-normal text-sm'>months</div></div>
					<div className=' bg-[#FCDE5A] px-2 rounded-full w-fit -mt-2 text-[0.7rem]'>save {plan.save}%</div>
				</div>
				<div>
					<div className='flex items-center'>
						<span>₹</span>
						<span className='text-4xl font-bold text-[#007BFF]'>{plan.totalPerMonth}</span>
						<span className='text-[#666666]'>/month</span>
					</div>
					<div>total <span className='font-bold'>₹{plan.total}</span></div>
					<div className='text-[#666666] line-through text-sm'>₹{plan.totalPrev}</div>
				</div>
			</div>
			<div className='flex items-center'>
				<Image src={one} alt='one' width={40} height={0} className=''/>
				<Image src={two} alt='two' width={40} height={0} className='-ms-5'/>
				<Image src={three} alt='three' width={40} height={0} className='-ms-5'/>
				<div className='ms-2 text-sm'>42.1K Students Enrolled</div>
			</div>
			<Button variant='contained' disableElevation color='primary' sx={{ borderRadius: '0.5rem' }}>enrol</Button>
		</div>
	)
}

export default PlanCard