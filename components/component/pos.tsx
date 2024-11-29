import { useState, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import Image from "next/image";
interface POSPageProps {

  setCurrentView: (view: string) => void; // Add this to update view
}

function POSPage({ setCurrentView }: POSPageProps) {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const router = useRouter();
  function scrolltop() {
    window.scrollTo(0, 0);
  }


  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">

      <section id="about" className=" py-20 fade-in  ">












        <div className="flex items-center justify-center">
        <Image
            src='/maintenance3.png'
            width={175}
            height={175}
            alt=""
            className="h-auto w-auto object-cover fade-in-up"
          />
          <CodeIcon2 className="h-20 w-auto fade-in-up" />


        </div>


        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">











          <h1 className="text-primary-foreground text-5xl font-bold text-center no-select fade-in-up">

            I&aposll be back soon!<br /> </h1>



          <h2 className="text-primary-foreground text-2xl text-center no-select"><br />
            Sorry for the inconvenience but I&aposm performing some maintenance on this page at the moment. If you need to you can always  <button
              onClick={() => setCurrentView('contact')}
              className="font-bold  text-3xl text-primary contactmelink"

            >
              CONTACT ME
            </button>, otherwise I&aposll be back online shortly!
            <br /> -- Noriel Gecolea

          </h2>








        </div>





      </section>



      <main className="flex-1">

      </main>
      <footer className="bg-muted py-8">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CodeIcon className="h-6 w-6" />
              <span className="font-bold">Noriel Fernando Gecolea</span>
            </div>
            <div className="circle-container  ">
              <div className="">

              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link href="https://www.linkedin.com/in/norielgecolea/" className="text-muted-foreground hover:text-primary" prefetch={false}>
                <LinkedinIcon className="h-6 w-6" />
              </Link>
              <Link href="https://www.instagram.com/norrsss__/" className="text-muted-foreground hover:text-primary" prefetch={false}>
                <InstagramIcon className="h-6 w-6" />
              </Link>

              <Link href="https://www.facebook.com/NorielGecolea/" className="text-muted-foreground hover:text-primary" prefetch={false}>
                <FacebookIcon className="h-6 w-6" />
              </Link>

            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


export default POSPage;



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
  )
}

function CodeIcon2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="150"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />

      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}





function DownloadIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}
function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M18 2h-3a6 6 0 0 0-6 6v3H6v4h3v11h4v-11h3.5l.5-4h-4V8a1 1 0 0 1 1-1h2z" />
    </svg>
  );
}



function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.5a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0z" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}


function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


