// Components
import PrimaryButtonLink from "@/components/primary-button-link";
import Spacer from "@/components/spacer";
import { PageTitle } from "@/components/page-title";
import VideoPlayer from "@/components/video-player";
// Styles
import s from "./map-page.module.css";
import { MapPageQuery } from "../../../tina/__generated__/types";

export default function MapPage({ data }: { data: MapPageQuery }) {
	const {
		heading,
		subheading,
		googleMapsId,
		participateHeading,
		participateSubheading,
		participateButtonText,
		participateButtonUrl,
	} = data.mapPage;

	return (
		<>
			<Spacer h="2rem" />
			<PageTitle>{heading}</PageTitle>
			{typeof subheading === "string" && subheading !== "" ? (
				<p className={s.subheading}>{subheading}</p>
			) : null}

			<Spacer h="2rem" />
			<iframe
				className={s.mapEmbed}
				src={`https://www.google.com/maps/d/embed?mid=${googleMapsId}`}
				title={heading}
				loading="lazy"
			></iframe>
			<Spacer h="4rem" />
			<div className={s.participate_contents}>
				<PageTitle e="h2" className={s.participate_heading}>
					{participateHeading}
				</PageTitle>
				{participateSubheading ? (
					<p className={s.subheading}>{participateSubheading}</p>
				) : null}
				<Spacer h="1rem" />
				<div className={s.videoContainer}>
					<VideoPlayer
						videoSrc="/map-participate-tutorial.mp4"
						width={1920}
						height={896}
						title="How to add your garden to the map"
					/>
				</div>
				<Spacer h="2rem" />
				<PrimaryButtonLink href={participateButtonUrl} target="_blank">
					{participateButtonText}
				</PrimaryButtonLink>
			</div>
			<Spacer h="6rem" />
		</>
	);
}
