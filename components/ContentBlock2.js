import React from "react"
import Image from "next/image"

import icon1 from "../public/icones/pin.png"
import icon2 from "../public/icones/phone.png"
import logo from "../public/logo.png"

const ContentBlock2 = () => {
	return (
		<section className="gradiant">
			<div className=" flex flex-col container lg:flex-row ">
				<div className="  py-10 lg:pr-20 bg-white  lg:w-[50%]  ">
					<div className="md:pr-28">
						<h2 className="font-OpenSans font-black text-xl uppercase title title--orangeSmall">
							Réservez votre séjour et profitez d’une expérience inoubliable !
						</h2>
					</div>
					<p className="text-md leading-6  md:text-justify mt-7 xl:leading-8 xl:text-lg">
						Contactez-nous dès maintenant pour réserver votre séjour au sein de
						notre pourvoirie 4 saisons, ou pour toutes demandes d’informations
						concernant l’emplacement, la disponibilité, les équipements sur
						place, les tarifs ou toutes autres questions. Il nous fera plaisir
						de vous apporter des réponses claires et précises sur ce que vous
						trouverez sur place.
						<br />
						<br />
						Au plaisir de vous accueillir au Domaine Aventurier
					</p>
				</div>
				<div className=" py-10 bg-[#79cf00] relative px-5 lg:w-[50%] 2xl:pl-16 2xl:pr-20 ">
					<div className=" flex flex-col justify-start items-start gap-10">
						<div className="flex flex-row justify-start items-start">
							<Image
								src={icon1}
								alt=""
								className="w-[35px] lg:w-[35px] mr-5 mt-2"
							></Image>
							<p className="font-OpenSans text-base font-bold text-white md:text-lg ">
								Domaine Aventurier
								<br />
								131 Chemin du Poisson Blanc <br />
								Notre-Dame-du-Laus, Québec J0X 2M0
							</p>
						</div>
						<div className="flex flex-row justify-end items-start">
							<Image
								src={icon2}
								alt=""
								className="w-[35px] lg:w-[35px] mr-5 mt-2"
							></Image>
							<p className="font-OpenSans font-bold text-white text-base md:text-lg">
								819-767-2130
								<br />
								<span className="mt-1 block">
									514-518-2643
									<span className="text-sm md:ml-1 block md:inline-block">
										(Cellulaire : Appel / SMS)
									</span>
								</span>
							</p>
						</div>
					</div>
					<div className="bottom-4 px-5">
						<Image
							src={logo}
							alt="Logo Domaine Aventurier"
							className="w-[120px] right-0 absolute  mt-[-30px] sm:mt-[-40px] sm:w-[150px] md:w-[150px] lg:w-[280px] z-20 lg:mt-[-10px] mr-5 xl:mr-0"
						></Image>
						<span className="left-0 bottom-12 h-16 lg:w-[80%] bg-white absolute"></span>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContentBlock2
