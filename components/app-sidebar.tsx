"use client";

import {
	IconInnerShadowTop,
	IconListDetails,
	IconSparkles,
	IconTypography,
} from "@tabler/icons-react";
import type * as React from "react";

import { NavMain } from "@/components/nav-main";
import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
	navMain: [
		{
			title: "Tattty AI",
			url: "/tattty",
			icon: IconSparkles,
		},
		{
			title: "Inspirations",
			url: "/tattty/gallery",
			icon: IconListDetails,
		},
		{
			title: "Imagine Fonts",
			url: "/tattty/fonts",
			icon: IconTypography,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="offcanvas" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							asChild
							className="data-[slot=sidebar-menu-button]:p-1.5!"
						>
							<a href="/tattty/quick-ideas">
								<IconInnerShadowTop className="size-5!" />
								<span className="font-semibold text-lg">Tattty AI</span>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				<div className="h-8" />
			</SidebarContent>
		</Sidebar>
	);
}
