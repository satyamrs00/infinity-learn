import Image from "next/image";
import quotes from "./../../../assets/SVGs/Group (1).svg";

const ReviewCard = ({ review }) => {
	return (
		<div className="bg-white shadow-[0px_7px_10px_0px_#9AA0D34D] p-8 rounded-xl w-full mb-8 min-w-full lg:min-w-0">
			<div className="flex">
				<div>
					<Image src={review.image} alt="review" width={120} height={0} />
				</div>
				<div className="px-4 py-2">
					<div className="text-[#080E14] font-bold text-xl ">{review.name}</div>
					<div className="text-[#6B6E72] mb-2">{review.city}</div>
					<div className="text-[#FF7A00]">{review.course}</div>
				</div>
			</div>
			<Image src={quotes} alt="quotes" width={50} height={0} className="mt-8 mb-4" />
			<div>{review.text}</div>
		</div>
	);
}

export default ReviewCard;