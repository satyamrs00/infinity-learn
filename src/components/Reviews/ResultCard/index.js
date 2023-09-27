import Image from "next/image"
import loc from './../../../assets/SVGs/location_on.svg'
import air from './../../../assets/SVGs/Group 1000006121.svg'

const ResultCard = ({ result }) => {
	return (
		<div className="p-2 flex rounded-xl bg-white mt-10 shadow-[0px_4px_20px_0px_#0083E833] w-[20rem] min-w-[20rem] relative mb-4">
			<div className="absolute flex font-bold px-4 py-2 -z-10 pb-10 left-0 -top-10 rounded-t-xl gap-2" style={{ backgroundColor: result.color}}>
				<Image src={air} alt="air" width={20} height={0} />
				<div>AIR {result.air} <span>•</span> score {result.score}</div>
			</div>
			<div>
				<Image src={result.image} alt={result.name} width={120} height={0} />
			</div>
			<div className="p-4 flex flex-col">
				<div className="text-[#080E14] text-lg font-bold">{result.name}</div>
				<div className="flex">
					<Image src={loc} alt="location" width={20} height={0} />
					<div className="text-[#6B6E72] text-sm">{result.city}</div>
				</div>
				<div className="text-[#FF7A00] mt-auto">NEET 2022</div>

			</div>
		</div>
	)
}

export default ResultCard