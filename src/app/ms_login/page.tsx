import MsLoginPage from "@/components/pages/MsLoginPage";
import { Roboto } from "next/font/google";
const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-roboto",
});

function MsLogin(): React.JSX.Element {
    return (
        <html>
            <body className={`${roboto.variable} antialiased`} id="root">
                <MsLoginPage />
            </body>
        </html>
    );
}

export default MsLogin;
