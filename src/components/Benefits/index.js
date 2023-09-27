import Image from "next/image";
import left from './../../assets/SVGs/expand_more.svg'
import PlanCard from "./PlanCard";
import red from './../../assets/SVGs/Rectangle-853 1.svg'
import spiral from './../../assets/SVGs/Vector (2).svg'
import { Button } from "@mui/material";

const Benefits = () => {
	return (
		<div className="bg-[#F3F3F3] w-full py-16">
			<div className="flex gap-10 items-end px-16 overflow-y-auto no-scrollbar mb-16">
				<div className="flex flex-col gap-8 self-start me-48">
					<div className="text-5xl font-bold text-[#080E14]">multiyear<div className="text-[#007BFF]">benefits</div></div>
					<div className="text-[#52565B]">choose your plan accordingly</div>
					<div className='flex gap-2 mt-2'>
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
			<div className="bg-[#D4E9FF] p-8 mx-16 rounded-xl overflow-hidden grid grid-cols-2 items-end">
				<div className="relative ">
					<div className="absolute bg-[#FDE57B] aspect-square rounded-full w-[100%] z-[0] top-[20%] left-[-20%]">
						<Image src={spiral} alt="" width={75} height={0} className="absolute z-20 left-[87%] top-[20%]" />
					</div>
					<Image src={red} alt="red" width={300} height={0} className="relative z-10 -mb-8" />
				</div>
				<div className="p-4 px-8 pe-20">
					<div className="text-5xl font-bold text-[#080E14] mb-4">mind over matters with <span className="text-[#007BFF]">mentors</span></div>
					<div className="text-[#52565B] text-lg mb-8">We’ll guide you in making a study plan that helps you study efficiently and in a balanced manner!</div>
					<div>
						<Button variant="contained" disableElevation className="mt-8" sx={{ borderRadius: '0.5rem', paddingX: '4rem' }}>lets plan together</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Benefits;