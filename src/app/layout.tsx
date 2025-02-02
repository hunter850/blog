import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import StyledEngineProvider from "@/providers/TailwindInjectProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/styles/theme";
import CssBaseline from "@mui/material/CssBaseline";
import "./globals.css";

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-roboto",
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${roboto.variable} antialiased`} id="root">
                <AppRouterCacheProvider options={{ key: "css" }}>
                    <StyledEngineProvider>
                        <ThemeProvider theme={theme}>
                            <CssBaseline />
                            {children}
                        </ThemeProvider>
                    </StyledEngineProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
