"use client"
import { Tab, Tabs } from "@mui/material"
import { useState } from "react"
import blue from './../../assets/SVGs/Group 1000006190.svg'
import check from './../../assets/SVGs/checklist 1.svg'
import Image from "next/image"

const Overview = () => {
	const [tab, setTab] = useState(0)
	return (
		<div className="bg-[#F1F2F6] p-4 lg:p-16 w-full flex flex-col items-center">
			<div className="no-scrollbar w-full">
				<Tabs value={tab} onChange={(e, v) => setTab(v)} textColor="primary" indicatorColor="primary">
					<Tab label="overview" />
					<Tab label="learn with live classes" />
					<Tab label="revise with recordings" />
					<Tab label="practice mock tests" />
					<Tab label="study with IL books" />
				</Tabs>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-2 mt-8 gap-8 lg:mt-12 w-full">
				<div className="flex flex-col items-start lg:items-center gap-8 order-last lg:order-none">
					<div className="text-4xl lg:text-5xl font-bold">
						<div>all-rounder</div>
						<div className="text-[#007BFF]">learning!</div>
					</div>
					<div className="flex flex-col gap-4 lg:ms-10">
						<div className="flex gap-2">
							<Image src={check} alt="check" width={20} height={0} className="lg:hidden" />
							<div>1000+ hrs <strong>live classes</strong></div>
						</div>
						<div className="flex gap-2">
							<Image src={check} alt="check" width={20} height={0} className="lg:hidden" />
							<div>3000+ hrs <strong>recorded content</strong></div>
						</div>
						<div className="flex gap-2">
							<Image src={check} alt="check" width={20} height={0} className="lg:hidden" />
							<div><strong>AITS</strong> - 24 biweekly mock tests</div>
						</div>
						<div className="flex gap-2">
							<Image src={check} alt="check" width={20} height={0} className="lg:hidden" />
							<div>world class <strong>IL books</strong></div>
						</div>
					</div>
				</div>
				<div className="flex justify-center">
					<Image src={blue} alt="blue" width={550} height={0} />
				</div>
			</div>
		</div>
	)
}

export default Overview