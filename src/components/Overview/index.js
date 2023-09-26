"use client"
import { Tab, Tabs } from "@mui/material"
import { useState } from "react"
import blue from './../../assets/SVGs/Group 1000006190.svg'
import Image from "next/image"

const Overview = () => {
	const [tab, setTab] = useState(0)
	return (
		<div className="bg-[#F1F2F6] p-16 w-full flex flex-col items-center">
			<Tabs value={tab} onChange={(e, v) => setTab(v)} textColor="primary" indicatorColor="primary">
				<Tab label="overview" />
				<Tab label="learn with live classes" />
				<Tab label="revise with recordings" />
				<Tab label="practice mock tests" />
				<Tab label="study with IL books" />
			</Tabs>
			<div className="grid grid-cols-2 mt-12 w-full">
				<div className="flex flex-col items-center gap-8">
					<div className="text-5xl font-bold">
						<div>all-rounder</div>
						<div className="text-[#007BFF]">learning!</div>
					</div>
					<div className="flex flex-col gap-4 ms-10">
						<div>1000+ hrs <strong>live classes</strong></div>
						<div>3000+ hrs <strong>recorded content</strong></div>
						<div><strong>AITS</strong> - 24 biweekly mock tests</div>
						<div>world class <strong>IL books</strong></div>
					</div>
				</div>
				<div className="flex justify-center">
					<Image src={blue} alt="blue" className="w-4/5 " />
				</div>
			</div>
		</div>
	)
}

export default Overview