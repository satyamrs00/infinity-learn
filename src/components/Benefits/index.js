import Image from "next/image";
import left from './../../assets/SVGs/expand_more.svg'
import PlanCard from "./PlanCard";
import red from './../../assets/SVGs/Rectangle-853 1.svg'
import spiral from './../../assets/SVGs/Vector (2).svg'
import { Button } from "@mui/material";

const Benefits = () => {
	return (
		<div className="bg-[#F3F3F3] w-full py-8 lg:py-16">
			<div className="flex flex-col lg:flex-row gap-4 lg:gap-10 px-4 lg:px-16 overflow-x-auto no-scrollbar mb-4 lg:mb-16 items-stretch lg:items-end">
				<div className="flex flex-col gap-4 lg:gap-8 lg:self-start lg:me-48">
					<div className="text-5xl font-bold text-[#080E14] text-center lg:text-start">multiyear<div className="text-[#007BFF]">benefits</div></div>
					<div className="text-[#52565B] text-center lg:text-start">choose your plan accordingly</div>
					<div className='gap-2 mt-2 hidden lg:flex'>
						<div className='bg-[#D4E9FF] opacity-[60%] rounded-lg aspect-square px-3 flex items-center justify-center'>
							<Image src={left} alt="left" width={12} height={0} />
						</div>
						<div className='bg-[#D4E9FF] rounded-lg aspect-square px-3 flex items-center justify-center'>
							<Image src={left} alt="left" width={12} height={0} style={{ rotate: '180deg'}}/>
						</div>
					</div>
				</div>
				<PlanCard plan={{ recommended: true, months: 24, save: 43, total: '90,000', totalPrev: '120,000', totalPerMonth: '3,750' }} />
				<PlanCard plan={{ recommended: false, months: 24, save: 43, total: '90,000', totalPrev: '120,000', totalPerMonth: '3,750' }} />
				<PlanCard plan={{ recommended: false, months: 24, save: 43, total: '90,000', totalPrev: '120,000', totalPerMonth: '3,750' }} />
			</div>
			<div className="bg-[#D4E9FF] p-4 lg:p-8 mx-4 my-4 lg:my-0 lg:mx-16 rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-6 items-end">
				<div className="order-last lg:order-none">
					<div className="relative">
						<div className="absolute bg-[#FDE57B] aspect-square rounded-full w-[100%] z-[0] top-[20%] left-[-20%]">
							<Image src={spiral} alt="" width={75} height={0} className="w-[50px] lg:w-[75px] absolute z-20 left-[87%] top-[20%]" />
						</div>
						<Image src={red} alt="red" width={300} height={0} className="w-[200px] lg:w-[300px] relative z-10 -mb-8" />
					</div>
				</div>
				<div className="p-0 lg:p-4 px-0 lg:px-8 pe-0 lg:pe-20">
					<div className="text-5xl font-bold text-[#080E14] mb-10 lg:mb-4 mt-6">mind over matters with <span className="text-[#007BFF]">mentors</span></div>
					<div className="text-[#52565B] text-lg mb-10 lg:mb-8">We’ll guide you in making a study plan that helps you study efficiently and in a balanced manner!</div>
					<div>
						<Button variant="contained" disableElevation className="w-full lg:w-auto" sx={{ borderRadius: '0.5rem', paddingX: '4rem' }}>lets plan together</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Benefits;