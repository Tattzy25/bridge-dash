"use client";

import {
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
			title: "Bridgit-AI",
			url: "/bridgit-ai",
			icon: IconSparkles,
		},
		{
			title: "Skills",
			url: "/bridgit-ai/skills",
			icon: IconListDetails,
		},
		{
			title: "MCP Bridgebox",
			url: "/bridgit-ai/mcp-bridgebox",
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
							className="data-[slot=sidebar-menu-button]:p-0! h-auto"
						>
							<a href="/" className="flex w-full items-center justify-center">
								<img 
									src="https://cdn.shopify.com/s/files/1/0649/4155/5787/files/bridgit_ai_logo.png?v=1775759916" 
									alt="Bridgit AI Logo" 
									className="h-[100px] w-auto object-contain"
								/>
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
