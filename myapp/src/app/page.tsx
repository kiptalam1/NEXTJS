import { Suspense } from "react";
import { Profile } from "./ui/profile";

export default function Page() {
	return (
		<Suspense fallback={<div>Loading profile...</div>}>
			<Profile />
		</Suspense>
	);
}
