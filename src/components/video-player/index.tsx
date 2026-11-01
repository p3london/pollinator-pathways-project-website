// Types
import { CSSProperties } from "react";
// Styles
import s from "./style.module.css";

export default function VideoPlayer({
	videoSrc,
	title,
	width = 1920,
	height = 1080,
}: {
	/* Must be an `.mp4` video file. */
	videoSrc: string;
	title: string;
	/* Intrinsic dimensions of the video, used to set its aspect ratio. */
	width?: number;
	height?: number;
}) {
	const aspectRatioStyle = {
		"--video-width": width,
		"--video-height": height,
	};
	return (
		<video
			className={s.video}
			style={aspectRatioStyle as CSSProperties}
			width={width}
			height={height}
			preload="metadata"
			playsInline
			controls
			title={title}
		>
			<source src={videoSrc} type="video/mp4" />
			Your browser does not support the video tag.
		</video>
	);
}
