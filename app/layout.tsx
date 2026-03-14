import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Zentra - Digital Marketing Agency',
  description: 'Make Your Brand Memorable',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          @font-face {
            font-family: "Boldonse";
            src: url("https://fonts.gstatic.com/s/boldonse/v1/ZgNQjPxGPbbJUZemjC35hmHmNpCO.woff2") format("woff2");
            font-style: normal;
            font-weight: 400;
            font-display: swap;
          }
          @font-face {
            font-family: "Clash Grotesk";
            src: url("https://framerusercontent.com/third-party-assets/fontshare/wf/2SAK53YLUN7RMYJU4MYLSBV6SSSJEJZB/RXS4DPGJRKOUFZMF5X5BVUGNNKJT65XZ/DJS4RYGIUYUXJQOHY5VCZPKSTXUSHTSP.woff2") format("woff2");
            font-style: normal;
            font-weight: 500;
            font-display: swap;
          }
          @font-face {
            font-family: "Clash Grotesk";
            src: url("https://framerusercontent.com/third-party-assets/fontshare/wf/P6VJ47S3OYMUC7HYSJLTK7PEIK5O2NPQ/TK62VLUWA76PMTK2XWBNDZB7QVXJGYE3/I5W5NEJGYVFUC5I4XOXVET63OE5PSVHJ.woff2") format("woff2");
            font-style: normal;
            font-weight: 700;
            font-display: swap;
          }
          @font-face {
            font-family: "Inter";
            src: url("https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2") format("woff2");
            font-style: normal;
            font-weight: 400;
            font-display: swap;
          }
          @font-face {
            font-family: "Inter";
            src: url("https://framerusercontent.com/assets/UjlFhCnUjxhNfep4oYBPqnEssyo.woff2") format("woff2");
            font-style: normal;
            font-weight: 500;
            font-display: swap;
          }
          @font-face {
            font-family: "Inter";
            src: url("https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2") format("woff2");
            font-style: normal;
            font-weight: 700;
            font-display: swap;
          }
        ` }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
