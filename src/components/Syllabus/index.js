import phy from './../../assets/SVGs/Physics_Icon_InLn (3).svg'
import chem from './../../assets/SVGs/Chemistry_Icon_InLn (2).svg'
import bio from './../../assets/SVGs/Biology_Icon_InLn (2).svg'
import arrow from './../../assets/SVGs/Vector (1).svg'
import Image from 'next/image'

const Syllabus = () => {
	return (
		<div className="p-16 w-full">
			<div className="text-5xl font-bold text-[#080E14] text-center mb-10">syllabus</div>
			<div className="flex gap-6 justify-center">
				<div className="p-4 bg-[#FFEDF0] flex gap-4 rounded-2xl text-xl font-bold items-center">
					<Image src={chem} alt='chem' width={50} height={0} />
					Chemistry
					<Image src={arrow} alt='arrow' width={20} height={0} className='ms-12'/>
				</div>
				<div className="p-4 bg-[#FFF3EC] flex gap-4 rounded-2xl text-xl font-bold items-center">
					<Image src={phy} alt='phy' width={50} height={0} />
					Physics
					<Image src={arrow} alt='arrow' width={20} height={0} className='ms-12'/>
				</div>
				<div className="p-4 bg-[#F2FFED] flex gap-4 rounded-2xl text-xl font-bold items-center">
					<Image src={bio} alt='bio' width={50} height={0} />
					Biology
					<Image src={arrow} alt='arrow' width={20} height={0} className='ms-12'/>
				</div>
			</div>
		</div>
	)
}

export default Syllabus