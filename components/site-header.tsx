"use client";

import { IconSettings } from "@tabler/icons-react";
import Link from "next/link";
import { KbdInputGroup } from "@/components/kbd-search";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-10 flex h-(--header-height) shrink-0 items-center gap-2 border-b bg-background transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
			<div className="flex w-full items-center gap-2 px-3 sm:gap-3 sm:px-4 lg:gap-2 lg:px-6">
				<SidebarTrigger className="-ml-1 h-10 w-10 sm:h-9 sm:w-9" />
				<Separator
					className="mx-1 data-[orientation=vertical]:h-5 sm:mx-2 sm:data-[orientation=vertical]:h-4"
					orientation="vertical"
				/>
				<div className="flex flex-1 justify-center px-4 min-w-0">
					<KbdInputGroup />
				</div>
				<div className="flex items-center gap-1 sm:gap-2">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button size="icon" variant="outline">
								<IconSettings className="h-[1.2rem] w-[1.2rem]" />
								<span className="sr-only">Settings</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuItem asChild>
								<Link href="/bridgit-ai/settings">Settings</Link>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<Link href="/bridgit-ai/policies">Policies</Link>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
					<ModeToggle />
				</div>
			</div>
		</header>
	);
}
