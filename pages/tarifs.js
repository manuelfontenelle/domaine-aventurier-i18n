import React from "react"

import Head from "next/head"
import Image from "next/image"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import iconChevreuil from "@/public/icones/chevreuil.png"
import iconDinde from "@/public/icones/dinde_green.png"
import iconOurs from "@/public/icones/ours.png"
import iconSauvagine from "@/public/icones/sauvagine_green.png"
import iconPeche from "@/public/icones/fishing_green.png"
import iconQuad from "@/public/icones/quad_green.png"
import iconChalet from "@/public/icones/bed_orange.png"
import iconCamping from "@/public/icones/camping_orange.png"
import introPageImg from "@/public/intro_tarifs.jpg"
import tarifDindonImg from "@/public/tarif_dindon.jpg"
import tarifSauvagineImg from "@/public/tarif_sauvagine.jpg"
import tarifChevreuilImg from "@/public/tarif_chevreuil.jpg"
import tarifOursImg from "@/public/tarif_ours.jpg"
import tarifPecheImg from "@/public/tarif_peche.jpg"
import tarifQuadImg from "@/public/tarif_quad.jpg"
import ImgRightTarif from "@/components/ImgRightTarif"
import ImgRightTarifWhite from "@/components/ImgRightTarifWhite"
import TarifForfait2 from "@/components/TarifForfait2"
import { useEffect, useState } from "react"

import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["tarifs", "nav"])),
			// Will be passed to the page component as props
		},
	}
}

const tarifs = () => {
	const { t } = useTranslation("tarifs")
	//////////////////////////////////////
	//////////////////////////////////////
	const textCerf = (
		<p className="mt-2 text-md leading-6">
			<span className="font-bold uppercase">{t("tarifs.cerf.content")}</span>
			<span className="font-bold text-[#ff7f00] block ">
				{t("tarifs.cerf.content2")}
			</span>
			<br />
			{t("tarifs.cerf.content3")}
		</p>
	)
	const textDindon = (
		<p className="mt-2 text-md leading-6">
			<span className="font-bold uppercase">{t("tarifs.dindon.content")}</span>
			<span className="font-bold text-[#ff7f00] block ">
				{t("tarifs.dindon.content2")}
			</span>
			{t("tarifs.dindon.content3")}
			<br /> <br />
			{t("tarifs.dindon.content4")}
			<br />
		</p>
	)
	const textSauvagine = (
		<p className="mt-2 text-md leading-6">
			<span className="font-bold uppercase">
				{t("tarifs.sauvagine.content")}
			</span>
			<span className="font-bold text-[#ff7f00] block ">
				{t("tarifs.sauvagine.content2")}
			</span>
			{t("tarifs.sauvagine.content3")}
			<br /> <br />
			{t("tarifs.sauvagine.content4")}
			<br />
		</p>
	)
	const textOurs = (
		<p className="mt-2 text-md leading-6">
			<span className="font-bold uppercase">{t("tarifs.ours.content")}</span>
			<span className="font-bold text-[#ff7f00] block ">
				{t("tarifs.ours.content2")}
			</span>
			{t("tarifs.ours.content3")}
			<br /> <br />
			{t("tarifs.ours.content4")}
			<br />
		</p>
	)

	const textPeche = (
		<p className="mt-2 text-md leading-6">
			<span className="font-bold uppercase">{t("tarifs.peche.content")}</span>
			<span className="font-bold text-[#ff7f00] block">
				{t("tarifs.peche.content2")}
			</span>
			<br />
			<span className="font-bold uppercase">{t("tarifs.peche.content3")}</span>
			<span className="font-bold text-[#ff7f00] block">
				{t("tarifs.peche.content4")}
			</span>
			<br />
			{t("tarifs.peche.content5")}
		</p>
	)

	const textQuad = (
		<p className="mt-2 text-md leading-6">
			<span className="font-bold uppercase">{t("tarifs.quad.content")}</span>
			<span className="font-bold text-[#ff7f00] block">
				{t("tarifs.quad.content2")}
			</span>
			<br />
			<span className="font-bold uppercase">{t("tarifs.quad.content3")}</span>
			<span className="font-bold text-[#ff7f00] block">
				{t("tarifs.quad.content4")}
			</span>
			<br />
			{t("tarifs.quad.content5")}
		</p>
	)

	const textForfaitVagabond = (
		<p className="mt-2 text-md leading-6">
			{t("tarifs.vagabond.content")}
			<br />
			<span className="font-bold text-[#ff7f00] ">
				{t("tarifs.vagabond.content2")}
			</span>
		</p>
	)

	const textForfaitDebarcadaire = (
		<p className="mt-2 text-md leading-6">
			{t("tarifs.debarcadere.content")}
			<br />
			<span className="font-bold text-[#ff7f00] ">
				{t("tarifs.debarcadere.content2")}
				<br />
				{t("tarifs.debarcadere.content3")}
			</span>
		</p>
	)

	const textForfaitTouriste = (
		<p className="mt-2 text-md leading-6">
			{t("tarifs.touriste.content")}
			<br />
			<span className="font-bold text-[#ff7f00] ">
				{t("tarifs.touriste.content2")}
				<br />
				{t("tarifs.touriste.content3")}
			</span>
		</p>
	)

	const textForfaitAventurier = (
		<p className="mt-2 text-md leading-6">
			{t("tarifs.aventurier.content")}
			<br />
			<span className="font-bold text-[#ff7f00] ">
				{t("tarifs.aventurier.content2")}
				<br />
				{t("tarifs.aventurier.content3")}
			</span>
		</p>
	)
	//////////////////////////////////////
	//////////////////////////////////////

	const [scroll, setScroll] = useState(false)
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 50)
		})
	}, [])
	return (
		<div>
			<Head>
				<title>{t("tarifs.titre")}</title>
				<meta name="description" content={t("tarifs.titre")} />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<NavBar scroll={scroll} />
			<main className="min-h-screen">
				<section className="pt-20">
					<div className="h-96 relative">
						<div className="container z-10">
							<h1 className=" font-OpenSans absolute bottom-10 text-white font-black text-4xl uppercase title title--orangeBig">
								{t("tarifs.titre2")}
							</h1>
						</div>

						<Image
							className=" block w-full object-cover h-[100%]"
							src={introPageImg}
							alt="intro image tarifs"
						/>
					</div>
				</section>

				<section className="font-bold text-2xl container text-center py-10">
					<h2 className="text-[#79cf00]">{t("tarifs.forfaitChasse.titre")}</h2>
				</section>

				<section id="dindon">
					<ImgRightTarif
						icon={iconDinde}
						introPageImg={tarifDindonImg}
						text={textDindon}
						titre={t("tarifs.dindon.titre")}
					/>
				</section>
				<section id="chevreuil">
					<ImgRightTarifWhite
						icon={iconChevreuil}
						introPageImg={tarifChevreuilImg}
						text={textCerf}
						titre={t("tarifs.cerf.titre")}
					/>
				</section>
				<section id="sauvagine">
					<ImgRightTarif
						icon={iconSauvagine}
						introPageImg={tarifSauvagineImg}
						text={textSauvagine}
						titre={t("tarifs.sauvagine.titre")}
					/>
				</section>

				<section id="ours">
					<ImgRightTarifWhite
						icon={iconOurs}
						introPageImg={tarifOursImg}
						text={textOurs}
						titre={t("tarifs.ours.titre")}
					/>
				</section>

				<section className="font-bold text-2xl container text-center py-10">
					<h2 className="text-[#79cf00]">{t("tarifs.forfaitPeche.titre")}</h2>
				</section>
				<section id="peche">
					<ImgRightTarif
						icon={iconPeche}
						introPageImg={tarifPecheImg}
						text={textPeche}
						titre={t("tarifs.peche.titre")}
					/>
				</section>

				<section className="font-bold text-2xl container text-center py-10">
					<h2 className="text-[#79cf00]">{t("tarifs.forfaitQuad.titre")}</h2>
				</section>
				<section id="motoneige">
					<ImgRightTarif
						icon={iconQuad}
						introPageImg={tarifQuadImg}
						text={textQuad}
						titre={t("tarifs.quad.titre")}
					/>
				</section>

				<section className="container my-10">
					<div className="flex flex-row justify-between items-center flex-wrap gap-10">
						<TarifForfait2
							titre={t("tarifs.vagabond.titre")}
							texte={textForfaitVagabond}
						/>
						<TarifForfait2
							titre={t("tarifs.debarcadere.titre")}
							texte={textForfaitDebarcadaire}
						/>

						<TarifForfait2
							titre={t("tarifs.touriste.titre")}
							texte={textForfaitTouriste}
						/>
						<TarifForfait2
							titre={t("tarifs.aventurier.titre")}
							texte={textForfaitAventurier}
						/>
					</div>
				</section>

				{/* TABLEAUX */}
				<div className=" bg-slate-50 py-10" id="chalet">
					<section className="container mb-10">
						<div>
							<div className="flex flex-row justify-start items-center mb-5">
								<div className="">
									<Image
										src={iconChalet}
										alt=""
										className="w-[45px] mb-2 md:mb-0  lg:w-[35px]"
									></Image>
								</div>
								<h2 className="font-bold text-xl ml-5 uppercase ">
									{t("tarifs.chalet.titre")}
									<span className="text-sm">
										{" "}
										{t("tarifs.chalet.sousTitre")}
									</span>
								</h2>
							</div>
						</div>
						<div className="overflow-scroll md:overflow-auto">
							<table className="border-collapse border border-slate-400 w-full text-left ">
								<thead className=" bg-slate-100 text-xs md:text-sm uppercase">
									<tr>
										<th className="border border-slate-300 p-2">
											{t("tarifs.chalet.titre")}
										</th>
										<th className="border border-slate-300 p-2">
											{t("tarifs.chalet.content")}
										</th>
										<th className="border border-slate-300 p-2">
											{" "}
											{t("tarifs.chalet.content2")}
										</th>
										<th className="border border-slate-300 p-2">
											{" "}
											{t("tarifs.chalet.content3")}
										</th>
										<th className="border border-slate-300 p-2">
											{" "}
											{t("tarifs.chalet.content4")}
										</th>
									</tr>
								</thead>
								<tbody className="text-xs md:text-sm">
									<tr>
										<td className="border border-slate-300 p-2">
											{t("tarifs.chalet.titre2")} #1
										</td>
										<td className="border border-slate-300 p-2">2</td>
										<td className="border border-slate-300 p-2">2-4</td>
										<td className="border border-slate-300 p-2">170$</td>
										<td className="border border-slate-300 p-2">900$</td>
									</tr>
									<tr>
										<td className="border border-slate-300 p-2">
											{t("tarifs.chalet.titre2")} #2
										</td>
										<td className="border border-slate-300 p-2">3</td>
										<td className="border border-slate-300 p-2">5-6</td>
										<td className="border border-slate-300 p-2">190$</td>
										<td className="border border-slate-300 p-2">1100$</td>
									</tr>
									<tr>
										<td className="border border-slate-300 p-2">
											{t("tarifs.chalet.titre2")} #3
										</td>
										<td className="border border-slate-300 p-2">2</td>
										<td className="border border-slate-300 p-2">2-4</td>
										<td className="border border-slate-300 p-2">170$</td>
										<td className="border border-slate-300 p-2">900$</td>
									</tr>
									<tr>
										<td className="border border-slate-300 p-2">
											{t("tarifs.chalet.titre2")} #4{" "}
											<span> {t("tarifs.chalet.content6")}</span>
										</td>
										<td className="border border-slate-300 p-2">1</td>
										<td className="border border-slate-300 p-2">1-2</td>
										<td className="border border-slate-300 p-2">180$</td>
										<td className="border border-slate-300 p-2">1000$</td>
									</tr>
									<tr>
										<td className="border border-slate-300 p-2">
											{t("tarifs.chalet.titre2")} #5
										</td>
										<td className="border border-slate-300 p-2">3</td>
										<td className="border border-slate-300 p-2">5-8</td>
										<td className="border border-slate-300 p-2">190$</td>
										<td className="border border-slate-300 p-2">1100$</td>
									</tr>
									<tr>
										<td className="border border-slate-300 p-2">
											{t("tarifs.chalet.titre2")} #6
										</td>
										<td className="border border-slate-300 p-2">1</td>
										<td className="border border-slate-300 p-2">2-6</td>
										<td className="border border-slate-300 p-2">160$</td>
										<td className="border border-slate-300 p-2">1100$</td>
									</tr>
									<tr>
										<td className="border border-slate-300 p-2">
											{t("tarifs.chalet.titre2")} #7
										</td>
										<td className="border border-slate-300 p-2">2</td>
										<td className="border border-slate-300 p-2">2-8</td>
										<td className="border border-slate-300 p-2">170$</td>
										<td className="border border-slate-300 p-2">900$</td>
									</tr>
									<tr>
										<td className="border border-slate-300 p-2">
											{t("tarifs.chalet.titre2")} #8
										</td>
										<td className="border border-slate-300 p-2">2</td>
										<td className="border border-slate-300 p-2">2-6</td>
										<td className="border border-slate-300 p-2">170$</td>
										<td className="border border-slate-300 p-2">900$</td>
									</tr>
									<tr>
										<td className="border border-slate-300 p-2">
											{t("tarifs.chalet.titre2")} #9
										</td>
										<td className="border border-slate-300 p-2">2</td>
										<td className="border border-slate-300 p-2">2-6</td>
										<td className="border border-slate-300 p-2">170$</td>
										<td className="border border-slate-300 p-2">900$</td>
									</tr>
								</tbody>
							</table>
							<span className="text-sm mt-2 block">
								{t("tarifs.chalet.content5")}
							</span>
						</div>
					</section>

					<section className="container mb-10" id="camping">
						<div>
							<div className="flex flex-row justify-start items-center mb-5">
								<div className="">
									<Image
										src={iconCamping}
										alt=""
										className="w-[45px] mb-2 md:mb-0  lg:w-[35px]"
									></Image>
								</div>
								<h2 className="font-bold text-xl ml-5 uppercase ">
									{" "}
									{t("tarifs.camping.titre")}
								</h2>
							</div>
						</div>
						<div className="overflow-scroll md:overflow-auto">
							<table className="border-collapse border border-slate-400 w-full text-left ">
								<thead className=" bg-slate-100 text-xs md:text-sm uppercase">
									<tr>
										<th className="border border-slate-300 p-2"></th>
										<th className="border border-slate-300 p-2">
											{t("tarifs.camping.content4")}
										</th>
										<th className="border border-slate-300 p-2">
											{t("tarifs.camping.content5")}
										</th>
										<th className="border border-slate-300 p-2">
											{t("tarifs.camping.content6")}
										</th>
										<th className="border border-slate-300 p-2">
											{t("tarifs.camping.content7")}
											<span className="text-xs ml-2">
												{" "}
												{t("tarifs.camping.content8")}
											</span>
										</th>
									</tr>
								</thead>
								<tbody className="text-xs md:text-sm">
									<tr>
										<td className="border border-slate-300 p-2">
											{t("tarifs.camping.content")}
										</td>
										<td className="border border-slate-300 p-2">40$</td>
										<td className="border border-slate-300 p-2">200$</td>
										<td className="border border-slate-300 p-2">600$</td>
										<td className="border border-slate-300 p-2">2000$</td>
									</tr>
									<tr>
										<td className="border border-slate-300 p-2">
											{t("tarifs.camping.content2")}
										</td>
										<td className="border border-slate-300 p-2">60$</td>
										<td className="border border-slate-300 p-2">360$</td>
										<td className="border border-slate-300 p-2">1080$</td>
										<td className="border border-slate-300 p-2">2200$</td>
									</tr>
									<tr>
										<td className="border border-slate-300 p-2">
											{" "}
											{t("tarifs.camping.content3")}
										</td>
										<td className="border border-slate-300 p-2">60$</td>
										<td className="border border-slate-300 p-2">360$</td>
										<td className="border border-slate-300 p-2">1080$</td>
										<td className="border border-slate-300 p-2">2200$</td>
									</tr>
								</tbody>
							</table>
						</div>
					</section>
				</div>
			</main>
			<Footer />
		</div>
	)
}

export default tarifs
