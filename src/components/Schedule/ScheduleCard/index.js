const ScheduleCard = ({ schedule }) => {
	return (
		<div className="bg-white relative p-4 rounded-xl">
			<div className="flex justify-between items-center">
				<div className="font-bold text-xl">{schedule.subject}</div>
				<div className="text-sm text-[#52565B]">{schedule.time}</div>
			</div>
			<div className="flex justify-start gap-2 items-center mt-3">
				<div className="text-[#52565B]">{schedule.chapterNo}</div>
				<div className="font-bold text-[#080E14]">{schedule.chapterName}</div>
			</div>
			<div className={`rounded-e-full w-[4px] h-1/2 left-0 top-[25%] z-10 absolute`} style={{ backgroundColor: schedule.color}}></div>
		</div>
	)
}

export default ScheduleCard