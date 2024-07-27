"use client";
import React, { useState, useEffect } from 'react';
import Homescreen from '@/components/component/homescreen';
import POSPage from '@/components/component/pos';
import Head from 'next/head'

export default function Home() {
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  function homeclick() {
    setCurrentView('home'); // Set the view to 'home'
    window.scrollTo(0, 0); // Scroll to the top
  }

  function renderComponent(view: string) {
    switch (view) {
      case 'home':
        return <Homescreen setCurrentView={setCurrentView} />;
      case 'about':
        return <POSPage setCurrentView={setCurrentView} />;
      // Add more cases as needed
      default:
        return <Homescreen setCurrentView={setCurrentView} />;
    }
  }

  return (
 
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
         <Head>
        <title>Noriel Gecolea</title>
      </Head>
      <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button onClick={homeclick} className="flex items-center gap-2">
            <CodeIcon className="h-6 w-6" />
            <span className="font-bold">Noriel Fernando Gecolea</span>
          </button>
          <nav className="hidden space-x-4 md:flex">
            <button onClick={() => setCurrentView('about')} className="hover:text-primary">About</button>
            <button onClick={() => setCurrentView('projects')} className="hover:text-primary">Projects</button>
            <button onClick={() => setCurrentView('skills')} className="hover:text-primary">Skills</button>
            <button onClick={() => setCurrentView('contact')} className="hover:text-primary">Contact</button>
          </nav>
          <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 md:hidden">
            Menu
          </button>
        </div>
      </header>

      <main>
        {renderComponent(currentView)}
      </main>
    </div>
  );
}

function CodeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
