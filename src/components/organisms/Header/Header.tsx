// import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from "@/components/ui/sheet";
import Logo from "@/components/atoms/Logo";
import NavMenu from "@/components/molecules/NavMenu";
import LanguageDropdown from "@/components/molecules/LanguageDropdown";
import ThemeSwitcher from "@/components/atoms/ThemeSwitcher";
// hooks
import { useTranslations } from "next-intl";

function Header() {
    const t = useTranslations();
    return (
        <header className="sticky left-0 right-0 top-0 z-50 border-0 border-b border-solid border-gray-300 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/90">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <Logo />
                    <div className="hidden items-center space-x-4 md:flex">
                        <NavMenu />
                        <LanguageDropdown />
                        <ThemeSwitcher />
                    </div>
                    <div className="flex items-center space-x-2 md:hidden">
                        <ThemeSwitcher />
                        <Sheet>
                            <SheetTrigger asChild className="transition-none md:hidden">
                                <Button variant="outline" size="icon">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="right"
                                className="w-60 md:hidden"
                                overlayClassName="md:hidden"
                                closeButtonClassName="focus:ring-0 focus:ring-ring focus:ring-offset-0"
                            >
                                <SheetHeader>
                                    <SheetTitle>{t("menu")}</SheetTitle>
                                    <SheetDescription className="sr-only">{t("menu")}</SheetDescription>
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
            </div>
        </header>
    );
}

export default Header;
