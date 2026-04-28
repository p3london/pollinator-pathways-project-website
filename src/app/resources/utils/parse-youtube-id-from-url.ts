/**
 * Given a Youtube URL, which may be in the format
 * `https://www.youtube.com/watch?v=eGa1DW_gtcY`
 * or
 * `https://youtu.be/eGa1DW_gtcY`,
 * Return the Youtube video ID, or `undefined`
 * if the URL could not be parsed.
 */
export function parseYoutubeIdFromUrl(url: string): string | undefined {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
  return match ? match[1] : undefined;
}
