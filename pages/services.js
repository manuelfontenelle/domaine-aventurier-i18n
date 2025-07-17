import React from "react"
import Head from "next/head"
import Image from "next/image"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import ImgLeft from "@/components/ImgLeft"
import ImgRight from "@/components/ImgRight"
import introPageImg from "@/public/intro_services.jpg"
import pecheImg from "@/public/service_peche.jpg"
import chasseImg from "@/public/service_chasse.jpg"
import chaletImg from "@/public/service_chalet.jpg"
import campingImg from "@/public/service_camping.jpg"
import vttImg from "@/public/service_vtt.jpg"
import iconPeche from "@/public/icones/fishing_orange.png"
import iconChasse from "@/public/icones/hunt_orange.png"
import iconChalet from "@/public/icones/bed_orange.png"
import iconCamping from "@/public/icones/camping_orange.png"
import iconQuad from "@/public/icones/quad_orange.png"
import { useEffect, useState } from "react"

import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["services", "nav"])),
			// Will be passed to the page component as props
		},
	}
}

const services = () => {
	const { t } = useTranslation("services")
	//////////////////////////////////////
	//////////////////////////////////////
	const textPeche = (
		<p>
			{t("services.peche.content")}
			<br />
			<br />
			{t("services.peche.content2")}
		</p>
	)
	const textChasse = (
		<p>
			{t("services.chasse.content")}
			<br />
			<br /> {t("services.chasse.content2")}
			<br />
			<br />
			{t("services.chasse.content3")}
			<br />
			<br />
			{t("services.chasse.content4")}
		</p>
	)

	const textChalet = (
		<div>
			<p>
				{t("services.chalet.content")}
				<br />
				<br /> {t("services.chalet.content2")}
			</p>

			<ul>
				<li> {t("services.chalet.content3")}</li>
				<li> {t("services.chalet.content4")}</li>
			</ul>
		</div>
	)

	const textCamping = (
		<p>
			{t("services.camping.content")}
			<br />
			<br />
			{t("services.camping.content2")}
		</p>
	)

	const textQuad = (
		<p>
			{t("services.quad.content")} <br />
			<br />
			{t("services.quad.content2")}
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
				<title>Domaine Aventurier - Services</title>
				<meta name="robots" content="noindex" />
				<meta name="description" content="Domaine Aventurier - Services" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<NavBar scroll={scroll} />
			<main className="min-h-screen">
				<section className="pt-20">
					<div className="h-96 relative">
						<div className="container z-10">
							<h1 className=" font-OpenSans absolute bottom-10 text-white font-black text-4xl uppercase title title--orangeBig">
								{t("services.titre")}
							</h1>
						</div>

						<Image
							className=" block w-full object-cover h-[100%]"
							src={introPageImg}
							alt="intro image contact"
						/>
					</div>
				</section>

				<ImgRight
					icon={iconPeche}
					introPageImg={pecheImg}
					text={textPeche}
					titre={t("services.peche.titre")}
				/>
				<ImgLeft
					icon={iconChasse}
					introPageImg={chasseImg}
					text={textChasse}
					titre={t("services.chasse.titre")}
				/>
				<ImgRight
					icon={iconChalet}
					introPageImg={chaletImg}
					text={textChalet}
					titre={t("services.chalet.titre")}
				/>
				<ImgLeft
					icon={iconCamping}
					introPageImg={campingImg}
					text={textCamping}
					titre={t("services.camping.titre")}
					sousTitre={t("services.camping.sousTitre")}
				/>
				<ImgRight
					icon={iconQuad}
					introPageImg={vttImg}
					text={textQuad}
					titre={t("services.quad.titre")}
				/>
			</main>
			<Footer />
		</div>
	)
}

export default services
