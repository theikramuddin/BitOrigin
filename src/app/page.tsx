
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Twitter, Send, BookCopy, Cpu } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link href={href} className="text-lg hover:text-primary transition-colors">
    {children}
  </Link>
);

const DexScreenerEmbed = () => (
  <div>
    <style jsx>{`
      #dexscreener-embed {
        position: relative;
        width: 100%;
        padding-bottom: 125%;
      }
      @media(min-width:1400px) {
        #dexscreener-embed {
          padding-bottom: 65%;
        }
      }
      #dexscreener-embed iframe {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border: 0;
      }
    `}</style>
    <div id="dexscreener-embed">
      <iframe src="https://dexscreener.com/ethereum/0xdf12f1C62b24eB92302D89D96C343b90F77a67a2?embed=1&loadChartSettings=0&info=0&chartLeftToolbar=0&chartDefaultOnMobile=1&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"></iframe>
    </div>
  </div>
);

const SplashScreen = ({ onEnter, visible }: { onEnter: () => void, visible: boolean }) => {
  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="text-center p-4">
        <div className="max-w-xs mx-auto md:max-w-md">
          <Image
            src="https://res.cloudinary.com/ds0ifdrhk/image/upload/v1753192883/ChatGPT_Image_Jul_22_2025_06_36_42_PM_y9lmbf.png"
            alt="BTOG"
            data-ai-hint="doge hammer"
            width={500}
            height={500}
            className="mb-8 rounded-lg w-full h-auto animate-pulse"
            priority
          />
        </div>
        <p className="mb-4 text-lg text-foreground">Doge Treasury Much Wow!</p>
        <Button onClick={onEnter} size="lg" className="text-lg py-6 bg-secondary hover:bg-secondary/80 text-secondary-foreground font-body">
          ENTER
        </Button>
      </div>
    </div>
  );
};


export default function Home() {
  const contractAddress = "0xdf12f1C62b24eB92302D89D96C343b90F77a67a2";
  const [showSplash, setShowSplash] = useState(true);
  
  const handleEnter = () => {
    setShowSplash(false);
  };
  
  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showSplash]);

  return (
    <div className="flex flex-col min-h-screen font-body text-lg text-foreground">
      <SplashScreen onEnter={handleEnter} visible={showSplash} />

      <div className={`transition-opacity duration-500 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
          <nav className="container mx-auto flex items-center justify-between p-4">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold font-headline text-primary">
              <Cpu className="h-8 w-8" />
              Bit Origin
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#how-to-buy">How to Buy</NavLink>
              <NavLink href="#roadmap">Roadmap</NavLink>
            </div>
            <Button asChild className="bg-primary hover:bg-primary/80 text-primary-foreground">
              <Link href="https://dexscreener.com/ethereum/0xdf12f1C62b24eB92302D89D96C343b90F77a67a2">Buy Now</Link>
            </Button>
          </nav>
        </header>

        <main className="container mx-auto px-4 pt-32 text-center">
          {/* Hero Section */}
          <section className="flex flex-col items-center justify-center py-16 md:py-24">
            <Image
              src="https://pbs.twimg.com/profile_images/1945954897297346560/oPtKWfQJ_400x400.jpg"
              alt="Bit Origin"
              data-ai-hint="logo abstract"
              width={400}
              height={400}
              className="mb-8 rounded-full border-4 border-primary shadow-[0_0_20px_theme(colors.primary)]"
              priority
            />
            <h1 className="font-headline text-7xl md:text-9xl font-bold text-primary flicker">
              Bit Origin
            </h1>
            <p className="mt-4 text-3xl md:text-4xl text-muted-foreground">
            We like the Stonks! $BTOG on ETH
            </p>
            
            <div className="mt-12 w-full max-w-md">
              <div className="flex flex-col gap-4">
                <Button asChild size="lg" variant="outline" className="text-lg py-6 border-2 border-foreground hover:bg-accent hover:text-accent-foreground">
                  <Link href="https://t.me/BTOG_entry">TELEGRAM</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg py-6 border-2 border-foreground hover:bg-accent hover:text-accent-foreground">
                  <Link href="https://x.com/Bitorigineth?s=09">X</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg py-6 border-2 border-foreground hover:bg-accent hover:text-accent-foreground">
                  <Link href="https://dexscreener.com/search?q=0xdf12f1C62b24eB92302D89D96C343b90F77a67a2">DEX</Link>
                </Button>
                <Button asChild size="lg" className="text-lg py-6">
                  <Link href="https://dexscreener.com/search?q=0xdf12f1C62b24eB92302D89D96C343b90F77a67a2">BUY Bit Origin</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Contract Address Section */}
          <section className="py-12">
              <Card className="max-w-2xl mx-auto bg-card/50 border-2 border-dashed border-primary/50">
                <CardContent className="p-4">
                  <p className="text-muted-foreground text-sm">Here Hides The Doge Treasure</p>
                  <p className="font-code text-primary text-sm md:text-lg break-all">{contractAddress}</p>
                </CardContent>
              </Card>
          </section>

          {/* About Section */}
          <section id="about" className="py-24 text-left max-w-4xl mx-auto">
            <h2 className="font-headline text-5xl text-primary mb-8 text-center">WHAT IS THE BIT ORIGIN</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-xl">
                <p>Welcome, user. Bit Origin (NASDAQ: BTOG) is an emerging growth company engaged in Crypto mining business with a diversified expansion strategy. Our mission is shaping the future of blockchain ecosystem in a sustainable way.</p>
                <p>Our mission is simple: to bring back the charm of early computing to the blockchain, creating a community-driven project that's accessible, friendly, and ready to compute its way to the moon.</p>
              </div>
              <Image
                src="https://pbs.twimg.com/media/GwENQFmWcAAfMcK?format=jpg&name=medium"
                alt="Retro computer components"
                data-ai-hint="retro computer"
                width={600}
                height={400}
                className="rounded-lg border-2 border-primary/30"
              />
            </div>
          </section>

          {/* How to Buy Section */}
          <section id="how-to-buy" className="py-24 max-w-4xl mx-auto">
            <h2 className="font-headline text-5xl text-primary mb-12 text-center">HOW DO I BUY YOUR BIT ORIGIN</h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <Card className="bg-card/50">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-accent">1. CREATE A WALLET</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Download a crypto wallet like MetaMask or Phantom. Keep your seed phrase safer than a high score on Pac-Man.</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-accent">2. GET SOME ETH</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>You'll need some ETH in your wallet to swap for Bit Origin. Get it from a centralized exchange or a friend who owes you one.</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-accent">3. SWAP FOR Bit Origin</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Go to Uniswap, paste the Bit Origin contract address, and swap your ETH. Welcome to the mainframe.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Roadmap Section */}
          <section id="roadmap" className="py-24 max-w-4xl mx-auto">
            <h2 className="font-headline text-5xl text-primary mb-12 text-center">BIT ORIGIN ROADMAP</h2>
            <div className="relative border-l-2 border-primary/50 pl-8 space-y-16">
              <div className="absolute -left-[11px] top-0 h-5 w-5 rounded-full bg-accent animate-pulse"></div>
              
              <div className="text-left">
                <h3 className="font-headline text-3xl text-accent mb-2">Phase 1: Boot Sequence</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Launch Bit Origin Token</li>
                  <li>Website V1 Launch</li>
                  <li>Community Building on X & Telegram</li>
                  <li>CoinGecko/CoinMarketCap Listing</li>
                </ul>
              </div>

              <div className="text-left">
                <h3 className="font-headline text-3xl text-accent mb-2">Phase 2: Overclock</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>First CEX Listings</li>
                  <li>Partnerships with other retro projects</li>
                  <li>Claudeputer NFT Collection Drop</li>
                  <li>10,000+ Holders</li>
                </ul>
              </div>

              <div className="text-left">
                <h3 className="font-headline text-3xl text-accent mb-2">Phase 3: Mainframe Integration</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Top Tier CEX Listings</li>
                  <li>Develop a simple retro P2E game</li>
                  <li>IRL Merch Store</li>
                  <li>Global Domination (in a friendly way)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Live Chart Section */}
          <section id="live-chart" className="py-12">
            <h2 className="font-headline text-5xl text-primary mb-8 text-center">LIVE CHART</h2>
            <Card className="max-w-4xl mx-auto bg-card/50 border-2 border-primary/50">
              <CardContent className="p-2 md:p-4">
                <DexScreenerEmbed />
              </CardContent>
            </Card>
          </section>
        </main>

        <footer className="w-full text-center py-8 mt-12 border-t border-primary/20">
          <p className="text-muted-foreground">&copy; {new Date().getFullYear()} Bit Origin. All data loaded. This coin is for entertainment purposes only.</p>
        </footer>
      </div>
    </div>
  );
}
