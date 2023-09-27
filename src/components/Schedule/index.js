import { Button } from "@mui/material"
import ScheduleCard from "./ScheduleCard"

const Schedule = () => {
	return (
		<div className="py-12 px-16 w-full bg-white flex flex-col items-center">
			<div className="bg-[#F1F2F6] rounded-xl p-6 w-full">
				<div className="text-5xl font-bold mb-2">schedule</div>
				<div className="flex justify-between">
					<div className="text-lg text-[#52565B]">syllabus will be completed by <span className="font-bold text-[#080E14]">12 Dec, 2023</span> after which the revision will commence</div>
					<div>
						<Button variant="outlined" disableElevation color="primary" sx={{ color: '#080E14', backgroundColor: '#E6F2FF'}}>15 june to 22 june</Button>
					</div>
				</div>
				<div className="grid grid-cols-[10rem_auto_auto] my-10 gap-10 items-center">
					<div>
						<div className="text-[#080E14] text-xl">Mon</div>
						<div className="text-[#6B6E72]">15 June</div>
					</div>
					<ScheduleCard schedule={{ color: '#8EC37A', subject: 'Biology', time: '10:45 am - 12:15 am', chapterNo: 'chapter 1', chapterName: 'morphology - flowering plants' }} />
					<ScheduleCard schedule={{ color: '#FFAD7A', subject: 'Physics', time: '10:45 am - 12:15 am', chapterNo: 'chapter 1', chapterName: 'morphology - flowering plants' }} />
					<div>
						<div className="text-[#080E14] text-xl">Mon</div>
						<div className="text-[#6B6E72]">15 June</div>
					</div>
					<ScheduleCard schedule={{ color: '#D85A6E', subject: 'Chemistry', time: '10:45 am - 12:15 am', chapterNo: 'chapter 1', chapterName: 'morphology - flowering plants' }} />
					<ScheduleCard schedule={{ color: '#8EC37A', subject: 'Biology', time: '10:45 am - 12:15 am', chapterNo: 'chapter 1', chapterName: 'morphology - flowering plants' }} />
					<div>
						<div className="text-[#080E14] text-xl">Mon</div>
						<div className="text-[#6B6E72]">15 June</div>
					</div>
					<ScheduleCard schedule={{ color: '#FFAD7A', subject: 'Physics', time: '10:45 am - 12:15 am', chapterNo: 'chapter 1', chapterName: 'morphology - flowering plants' }} />
					<ScheduleCard schedule={{ color: '#D85A6E', subject: 'Chemistry', time: '10:45 am - 12:15 am', chapterNo: 'chapter 1', chapterName: 'morphology - flowering plants' }} />
				</div>
				<div className="text-center text-[#007BFF] mb-40">view more</div>
			</div>
			<div className="bg-[#00364E] rounded-2xl p-16 w-11/12 flex flex-col items-center gap-8 -mt-40">
				<div className="text-white text-4xl font-bold">need help with your <span className="text-[#FCDE5A]">study plan</span></div>
				<div>
					<Button variant="contained" disableElevation color="primary" sx={{ borderRadius: '0.5rem' }}>talk to experts</Button>
				</div>
			</div>
		</div>
	)
}

export default Schedule