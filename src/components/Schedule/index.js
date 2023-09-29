import { Button } from "@mui/material"
import ScheduleCard from "./ScheduleCard"

const Schedule = () => {
	return (
		<div className="py-8 lg:py-12 px-4 lg:px-16 w-full flex flex-col items-center">
			<div className="bg-[#F1F2F6] rounded-xl p-4 lg:p-6 w-full">
				<div className="text-4xl lg:text-5xl font-bold mb-2 text-center lg:text-start py-4 lg:py-0">schedule</div>
				<div className="flex justify-between flex-col lg:flex-row gap-4">
					<div className="lg:text-lg text-[#52565B]">syllabus will be completed by <span className="font-bold text-[#080E14]">12 Dec, 2023</span> after which the revision will commence</div>
					<div className="hidden lg:block">
						<Button variant="outlined" disableElevation color="primary" sx={{ color: '#080E14', backgroundColor: '#E6F2FF', paddingRight: '4rem' }}>15 june to 22 june</Button>
					</div>
					<div className="lg:hidden">
						<Button variant="outlined" fullWidth disableElevation color="primary" sx={{ color: '#080E14', backgroundColor: '#E6F2FF', paddingRight: '4rem', justifyContent: 'flex-start' }}>15 june to 22 june</Button>
					</div>
				</div>
				<div className="flex flex-col my-6 lg:my-10 gap-4 lg:gap-10 items-stretch">
					<div className="flex gap-4 lg:gap-10 items-start lg:items-center">
						<div className="lg:me-20 py-4 lg:py-0">
							<div className="text-[#080E14] text-xl">Mon</div>
							<div className="text-[#6B6E72]">15 June</div>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 grow">
							<ScheduleCard schedule={{ color: '#8EC37A', subject: 'Biology', time: '10:45 am - 12:15 am', chapterNo: 'chapter 1', chapterName: 'morphology - flowering plants' }} />
							<ScheduleCard schedule={{ color: '#FFAD7A', subject: 'Physics', time: '10:45 am - 12:15 am', chapterNo: 'chapter 1', chapterName: 'morphology - flowering plants' }} />
						</div>
					</div>
					<div className="flex gap-4 lg:gap-10 items-start lg:items-center">
						<div className="lg:me-20 py-4 lg:py-0">
							<div className="text-[#080E14] text-xl">Mon</div>
							<div className="text-[#6B6E72]">15 June</div>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 grow">
							<ScheduleCard schedule={{ color: '#D85A6E', subject: 'Chemistry', time: '10:45 am - 12:15 am', chapterNo: 'chapter 1', chapterName: 'morphology - flowering plants' }} />
							<ScheduleCard schedule={{ color: '#8EC37A', subject: 'Biology', time: '10:45 am - 12:15 am', chapterNo: 'chapter 1', chapterName: 'morphology - flowering plants' }} />
						</div>
					</div>
					<div className="flex gap-4 lg:gap-10 items-start lg:items-center">
						<div className="lg:me-20 py-4 lg:py-0">
							<div className="text-[#080E14] text-xl">Mon</div>
							<div className="text-[#6B6E72]">15 June</div>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 grow">
							<ScheduleCard schedule={{ color: '#FFAD7A', subject: 'Physics', time: '10:45 am - 12:15 am', chapterNo: 'chapter 1', chapterName: 'morphology - flowering plants' }} />
							<ScheduleCard schedule={{ color: '#D85A6E', subject: 'Chemistry', time: '10:45 am - 12:15 am', chapterNo: 'chapter 1', chapterName: 'morphology - flowering plants' }} />
						</div>
					</div>
				</div>
				<div className="text-center text-[#007BFF] mb-40">view more</div>
			</div>
			<div className="bg-[#00364E] rounded-2xl p-8 lg:p-16 w-11/12 flex flex-col items-stretch lg:items-center gap-8 -mt-40">
				<div className="text-white text-3xl lg:text-4xl font-bold text-center lg:text-start">need help with your <span className="text-[#FCDE5A]">study plan?</span></div>
				<div className="hidden lg:block">
					<Button variant="contained" disableElevation color="primary" sx={{ borderRadius: '0.5rem' }}>talk to experts</Button>
				</div>
				<div className="lg:hidden">
					<Button variant="contained" disableElevation color="primary" sx={{ borderRadius: '0.5rem', fontSize: '1.25rem' }} fullWidth>lets plan together</Button>
				</div>
			</div>
		</div>
	)
}

export default Schedule