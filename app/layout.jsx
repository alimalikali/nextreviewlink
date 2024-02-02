import { orbitron } from '../app/fonts'
import './globals.css'

export const metadata= {
    title: {
        default:'indie gamer',
        template: '%s | indie gamer'
    }
  };
export default function RootLayout({children}){
    
    return(
        <html lang="en">
            <body className="mx-10">
                <header >[header]</header>
                <h1 className={`text-4xl font-extrabold ${orbitron.className}`}>My name is Ali </h1>
                <main>{children}</main>
                <footer > [footer]</footer>
            </body>

        </html>
    )
    
}