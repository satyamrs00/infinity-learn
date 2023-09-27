import Image from "next/image";

const FacultyCard = ({ name, image, headline, subject, usp }) => {
	return (
		<div className="bg-white rounded-xl p-2 flex flex-col gap-2 items-center" style={{
			boxShadow: '0px 4px 20px 0px #0060A933'
		}}>
			<Image src={image} alt={name} width={350} height={0} />
			<div className="text-2xl text-black font-bold">{name}</div>
			<div className="text-[#52565B]">{headline}</div>
			<div className="flex gap-2">
				<div className="bg-[#FFE4CC] text-[#FF7A00] p-2 py-1 rounded-lg border border-[#FF7A00]">{subject}</div>
				<div className="bg-[#D6F4DE] text-[#169C38] p-2 py-1 rounded-lg border border-[#169C38]">{usp}</div>
			</div>
		</div>
	)
}

export default FacultyCard;