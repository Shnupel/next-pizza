import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import HeadComponent from "@/app/head";
import Header from "@/components/layout/Header";
import "@/styles/_variables.scss";
import "@/styles/_global.scss";

const geistSans = Geist({
	variable: "--font-geist-sans", subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono", subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Next pizza", description: "Generated by me",
};

export const viewport: Viewport = {
	colorScheme: "light"
}

export default function RootLayout({ children }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<HeadComponent/>
			<body className={ `${ geistSans.variable } ${ geistMono.variable }` }>
				<main>
					<div className="wrapper">
						<Header />
						{ children }
					</div>
				</main>
			</body>
		</html>
	);
}
