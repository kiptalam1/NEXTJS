import { Suspense } from "react";
import { getArtist, getAlbums } from "@/app/lib/data";

export default async function Page({
	params,
}: {
	params: Promise<{ username: string }>;
}) {
	const { username } = await params;
	// Get artist information
	const artist = await getArtist(username);
	const albums = await getAlbums(username);

	const [artist, albums] = await Promise.all([artistData, albumsData]);
	return (
		<>
			<h1>{artist.name}</h1>
			<Albums list={albums} />
		</>
	);
}

async function Playlists({ artistID }: { artistID: string }) {
	// Use the artist ID to fetch playlists
	const playlists = await getArtistPlaylists(artistID);

	return (
		<ul>
			{playlists.map((playlist) => (
				<li key={playlist.id}>{playlist.name}</li>
			))}
		</ul>
	);
}
