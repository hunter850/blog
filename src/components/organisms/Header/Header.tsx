// import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/components/atoms/Logo";
import NavMenu from "@/components/molecules/NavMenu";
import LanguageDropdown from "@/components/molecules/LanguageDropdown";
import ThemeSwitcher from "@/components/atoms/ThemeSwitcher";
// hooks
import { useTranslations } from "next-intl";

function Header() {
    const t = useTranslations();
    return (
        <header className="sticky left-0 right-0 top-0 z-50 border-0 border-b border-solid border-gray-300 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <Logo />
                    <div className="hidden items-center space-x-4 sm:flex">
                        <NavMenu />
                        <LanguageDropdown />
                        <ThemeSwitcher />
                    </div>
                    <Sheet>
                        <SheetTrigger asChild className="sm:hidden">
                            <Button variant="outline" size="icon">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-60 sm:hidden" overlayClassName="sm:hidden">
                            <SheetHeader>
                                <SheetTitle>{t("menu")}</SheetTitle>
                            </SheetHeader>
                            <div className="mt-4">
                                <NavMenu />
                                <div className="mt-4">
                                    <LanguageDropdown />
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}

export default Header;
