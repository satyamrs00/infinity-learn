import Image from 'next/image';
import call from './../../assets/SVGs/Group (2).svg'
import mail from './../../assets/SVGs/Group 45614.svg'
import loc from './../../assets/SVGs/Vector (3).svg'
import facebook from './../../assets/SVGs/Vector (4).svg'
import twitter from './../../assets/SVGs/icons.svg'
import youtube from './../../assets/SVGs/Vector (5).svg'
import pinterest from './../../assets/SVGs/Vector (6).svg'
import linkedin from './../../assets/SVGs/Vector (7).svg'
import logo from './../../assets/SVGs/Group 45506 (1).svg'
import logoM from './../../assets/SVGs/Artboard 1 2.svg'
import { Button } from '@mui/material';

const Footer = () => {
	return (
		<div className="p-4 py-8 lg:p-12 w-full bg-white text-[#52565B]">
			<div className='flex flex-col lg:flex-row gap-8 lg:gap-12 items-start'>
				<div className='flex flex-col gap-2 w-full lg:w-4/12'>
					<Image src={logo} alt='logo' width={200} height={0} className='mb-2 hidden lg:block' />
					<Image src={logoM} alt='logo' width={90} height={0} className='mb-2 lg:hidden' />

					<div className='flex gap-2 text-[#080E14] lg:text-[#52565B]'>
						<Image src={call} alt='call' width={14} height={0} />
						1800-419-427
					</div>
					<div className='w-full h-[1px] bg-[#E6E7E8]'></div>
					<div className='flex gap-2 text-[#080E14] lg:text-[#52565B]'>
						<Image src={mail} alt='mail' width={15} height={0} />
						support@infinitylearn.com
					</div>
					<div className='w-full h-[1px] bg-[#E6E7E8]'></div>
					<div className='flex gap-2 items-start'>
						<Image src={loc} alt='loc' width={12} height={0} className='mt-1'/>
						6th Floor, NCC Building, Durgamma Cheruvu Road, Vittal Rao Nagar, HITEC City, Hyderabad, Telangana 500081.
					</div>
					<div className='flex gap-4 mt-4 justify-center lg:justify-start'>
						<Button variant='outlined' disableElevation color='black' className='aspect-square ' sx={{ borderRadius: '0.5rem', minWidth: '2.5rem', padding: 0}}>
							<Image src={facebook} alt='facebook' width={8} height={0} />
						</Button>
						<Button variant='outlined' disableElevation color='black' className='aspect-square w-10 ' sx={{ borderRadius: '0.5rem', minWidth: 0, padding: 0}}>
							<Image src={twitter} alt='twitter' width={18} height={0} />
						</Button>
						<Button variant='outlined' disableElevation color='black' className='aspect-square w-10' sx={{ borderRadius: '0.5rem', minWidth: 0, padding: 0}}>
							<Image src={youtube} alt='youtube' width={20} height={0} />
						</Button>
						<Button variant='outlined' disableElevation color='black' className='aspect-square w-10' sx={{ borderRadius: '0.5rem', minWidth: 0, padding: 0}}>
							<Image src={pinterest} alt='pinterest' width={18} height={0} />
						</Button>
						<Button variant='outlined' disableElevation color='black' className='aspect-square w-10' sx={{ borderRadius: '0.5rem', minWidth: 0, padding: 0}}>
							<Image src={linkedin} alt='linkedin' width={16} height={0} />
						</Button>
					</div>
				</div>
				<div className='grid grid-cols-2 lg:grid-cols-4 gap-8 leading-7'>
					<div>
						<div className='text-[#080E14] font-bold text-xl mb-2'>company</div>
						<div>about us</div>
						<div>our team</div>
						<div>life at infinity learn</div>
						<div>IL in the news</div>
						<div>blogs</div>
						<div>careers</div>
						<div>become a teacher</div>
					</div>
					<div>
						<div className='text-[#080E14] font-bold text-xl mb-2'>support</div>
						<div>get in touch</div>
						<div>privacy policy</div>
						<div>refund policy</div>
						<div>takedown policy</div>
						<div>terms and conditions</div>
					</div>
					<div>
						<div className='text-[#080E14] font-bold text-xl mb-2'>courses</div>
						<div>IITJEE</div>
						<div>JEE Main</div>
						<div>JEE Advanced</div>
						<div>IITJEE Foundation</div>
						<div>NEET</div>
						<div>NEET Foundation</div>
						<div>CUET</div>
						<div>CBSE tuitions</div>
					</div>
					<div>
						<div className='text-[#080E14] font-bold text-xl mb-2'>more</div>
						<div>IL for schools</div>
						<div>knowledge hubs</div>
						<div>scholarships</div>
						<div>hall of fame</div>
					</div>
				</div>
			</div>
			<div className='mt-10 lg:mt-16'>
				<div className='text-2xl lg:text-5xl mb-8 font-bold text-[#080E14]'>free study <span className='text-[#007BFF]'>material</span></div>
				<div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
					<div>
						<div className='text-[#080E14] font-bold text-xl mb-2'>JEE</div>
						<div>JEE previous year's papers</div>
						<div>JEE important questions</div>
						<div>JEE revision notes</div>
						<div>JEE sample papers</div>
						<div>JEE study guide</div>
						<div>JEE mock tests</div>
					</div>
					<div>
						<div className='text-[#080E14] font-bold text-xl mb-2'>NEET</div>
						<div>NEET previous year's papers</div>
						<div>NEET important questions</div>
						<div>NEET revision notes</div>
						<div>NEET sample papers</div>
						<div>NEET study guide</div>
						<div>NEET mock tests</div>
					</div>
					<div>
						<div className='text-[#080E14] font-bold text-xl mb-2'>CUET</div>
						<div>CUET previous year's papers</div>
						<div>CUET important questions</div>
						<div>CUET revision notes</div>
						<div>CUET sample papers</div>
						<div>CUET study guide</div>
						<div>CUET mock tests</div>
					</div>
					<div>
						<div className='text-[#080E14] font-bold text-xl mb-2'>CBSE</div>
						<div>CBSE previous year's papers</div>
						<div>CBSE important questions</div>
						<div>CBSE revision notes</div>
						<div>CBSE sample papers</div>
						<div>CBSE study guide</div>
						<div>CBSE mock tests</div>
					</div>
					<div>
						<div className='text-[#080E14] font-bold text-xl mb-2'>Popular books</div>
						<div>HC Verma part 1</div>
						<div>HC Verma part 2</div>
						<div>RS Agarwal</div>
						<div>RD Sharma</div>
						<div>Lakhmir Singh</div>
						<div>DK Goel</div>
						<div>Sandeep Garg</div>
						<div>TS Grewal</div>
					</div>
					<div>
						<div className='text-[#080E14] font-bold text-xl mb-2'>NCERT solutions</div>
						<div>Class 12 NCERT solutions</div>
						<div>Class 11 NCERT solutions</div>
						<div>Class 10 NCERT solutions</div>
						<div>Class 9 NCERT solutions</div>
						<div>Class 8 NCERT solutions</div>
						<div>Class 7 NCERT solutions</div>
						<div>Class 6 NCERT solutions</div>
					</div>
					<div>
						<div className='text-[#080E14] font-bold text-xl mb-2'>NCERT exemplar</div>
						<div>Class 12 NCERT exemplar</div>
						<div>Class 11 NCERT exemplar</div>
						<div>Class 10 NCERT exemplar</div>
						<div>Class 9 NCERT exemplar</div>
						<div>Class 8 NCERT exemplar</div>
						<div>Class 7 NCERT exemplar</div>
						<div>Class 6 NCERT exemplar</div>
					</div>
					<div>
						<div className='text-[#080E14] font-bold text-xl mb-2'>State Board</div>
						<div>Rajasthan State Board</div>
						<div>West Bengal State Board</div>
						<div>Gujarat State Board</div>
						<div>Telangana State Board</div>
						<div>Andhra Pradesh State Board</div>
						<div>Uttar Pradesh State Board</div>
					</div>
					<div>
						<div className='text-[#080E14] font-bold text-xl mb-2'>Subject</div>
						<div>Math</div>
						<div>Science</div>
						<div>Physics</div>
						<div>Chemistry</div>
						<div>Economics</div>
						<div>Accountancy</div>
						<div>Business Studies</div>
					</div>
				</div>
				<div className='w-full h-[1px] my-8 bg-[#E6E7E8]'></div>
				<div className='flex justify-between items-center'>
					<div className='text-[#007BFF]'>2023 | www.infinitylearn.com</div>
					<div className='flex gap-4 items-center hidden lg:flex'>
						<div>follow us</div>
						<div className='flex gap-4'>
							<Button variant='outlined' disableElevation color='black' className='aspect-square ' sx={{ borderRadius: '0.5rem', minWidth: '2.5rem', padding: 0}}>
								<Image src={facebook} alt='facebook' width={8} height={0} />
							</Button>
							<Button variant='outlined' disableElevation color='black' className='aspect-square w-10 ' sx={{ borderRadius: '0.5rem', minWidth: 0, padding: 0}}>
								<Image src={twitter} alt='twitter' width={18} height={0} />
							</Button>
							<Button variant='outlined' disableElevation color='black' className='aspect-square w-10' sx={{ borderRadius: '0.5rem', minWidth: 0, padding: 0}}>
								<Image src={youtube} alt='youtube' width={20} height={0} />
							</Button>
							<Button variant='outlined' disableElevation color='black' className='aspect-square w-10' sx={{ borderRadius: '0.5rem', minWidth: 0, padding: 0}}>
								<Image src={pinterest} alt='pinterest' width={18} height={0} />
							</Button>
							<Button variant='outlined' disableElevation color='black' className='aspect-square w-10' sx={{ borderRadius: '0.5rem', minWidth: 0, padding: 0}}>
								<Image src={linkedin} alt='linkedin' width={16} height={0} />
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer;