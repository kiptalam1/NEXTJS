import { cacheLife } from "next/cache";

export async function getArtist(username: string) {
	"use cache";
	cacheLife("hours");
	const res = await fetch(`https://api.example.com/artist/${username}`);
	return res.json();
}

export async function getAlbums(username: string) {
	const res = await fetch(`https://api.example.com/artist/${username}/albums`);
	return res.json();
}
