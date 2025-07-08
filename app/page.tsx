"use client";
import React, { useState, useEffect } from 'react';
import Homescreen from '@/components/component/homescreen';
import POSPage from '@/components/component/pos';
import InventrackPage from '@/components/component/inventrack';

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
        return <Homescreen currentView={currentView} setCurrentView={setCurrentView} />;
      case 'about':
        return <Homescreen currentView={currentView} setCurrentView={setCurrentView} />;
      case 'pos':
        return <POSPage setCurrentView={setCurrentView} />;
      case 'inventrack':
        return <InventrackPage setCurrentView={setCurrentView} />;
      default:
        return <Homescreen currentView={currentView} setCurrentView={setCurrentView} />;
    }
  }
  return (

    

    <div className="flex min-h-[100dvh] flex-col bg-background/80 text-foreground">
      <Head>
        <title>Noriel Gecolea</title>
         <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3738297787059683"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button onClick={homeclick} className="flex items-center gap-2">
            <CodeIcon className="h-6 w-6" />

            <span className="font-bold text-lg">Noriel Fernando Gecolea</span>
          </button>

          <nav className="hidden space-x-4 md:flex text-lg">
            <button onClick={() => setCurrentView('about')} className="hover:text-primary">About</button>
            <button onClick={() => setCurrentView('projects')} className="hover:text-primary">Projects</button>
            <button onClick={() => setCurrentView('skills')} className="hover:text-primary">Skills and Certificates</button>
            <button onClick={() => setCurrentView('contact')} className="hover:text-primary">Contact</button>
          </nav>
          <button onClick={() => { menubartoggle(); }} className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 md:hidden">
            Menu
          </button>
        </div>
        <div id="menubar" className="hidden transition-opacity">
          <ul  className="text-2xl font-bold ml-3 ">
            <li className="my-3"><button onClick={() => { menubarhide(); setCurrentView('about'); }} className="hover:text-primary">About</button></li>
            <li className="my-3"> <button onClick={() =>{ menubarhide(); setCurrentView('projects');}} className="hover:text-primary">Projects</button></li>
            <li className="my-3"><button onClick={() =>{ menubarhide(); setCurrentView('skills');}} className="hover:text-primary">Skills and Certificates</button></li>
            <li className="my-3"><button onClick={() =>{ menubarhide(); setCurrentView('contact');}} className="hover:text-primary">Contact</button></li>
          </ul>
        </div>
      </header>

      <main>
        {renderComponent(currentView)}
      </main>
    </div>
  );
}
function menubarhide(){
  const element = document.getElementById("menubar");
if (element) {
  element.classList.add("hidden");
}

}

function menubartoggle(){
  const element = document.getElementById("menubar");
if (element) {
  element.classList.toggle("hidden");
}


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
