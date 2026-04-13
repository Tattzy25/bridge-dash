import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function PoliciesPage() {
	return (
		<div className="flex flex-1 items-center justify-center p-4">
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-4xl w-full">
				<Link href="/bridgit-ai/policies/privacy-policy" className="block transition-transform hover:scale-[1.02]">
					<Card className="h-full">
						<CardHeader>
							<CardTitle>Privacy Policy</CardTitle>
							<CardDescription>How we handle your data.</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-sm text-muted-foreground">
								Your privacy is important to us. We only collect the necessary information to provide you with the best experience.
							</p>
						</CardContent>
					</Card>
				</Link>
				
				<Link href="/bridgit-ai/policies/terms-of-service" className="block transition-transform hover:scale-[1.02]">
					<Card className="h-full">
						<CardHeader>
							<CardTitle>Terms of Service</CardTitle>
							<CardDescription>Rules and guidelines.</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-sm text-muted-foreground">
								By using our service, you agree to follow our guidelines and ensure a respectful environment for everyone.
							</p>
						</CardContent>
					</Card>
				</Link>
			</div>
		</div>
	);
}
