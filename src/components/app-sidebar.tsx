import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Home } from "lucide-react";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="bg-">
        <SidebarGroup>
          <SidebarGroupLabel className="text-emerald-500">
            BillarScore
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/MainMenu">
                    <Home />
                    <span>Inicio</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {/* Agrega más items aquí */}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
