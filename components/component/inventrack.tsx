import { useState, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import Image from "next/image";
interface InventrackPageProps {

  setCurrentView: (view: string) => void; // Add this to update view
}

function InventrackPage({ setCurrentView }: InventrackPageProps) {
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

      <section id="about" className="bg-dark py-20 fade-in  ">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-1">
            <div className="flex items-center justify-center  emphasis-animation gap-8 md:grid-cols-1  ">
              <Image
                src="/inventrack/1.jpg"
                width={400}
                height={225}
                alt="Project 1"
                className="image-radius"
              />

              <Image
                src="/INVENTRACK.jpg"
                width={600}
                height={225}
                alt="Project 1"
                className="image-radius"
              />

              <Image
                src="/inventrack/2.png"
                width={400}
                height={225}
                alt="Project 1"
                className="image-radius"
              />
            </div>
            <div className="space-y-1 ">

              <h1 className="text-primary-foreground text-5xl font-bold text-center no-select">Inventrack  </h1>
              <div className="horizontal-line"></div>



              <p className="text-lg text-primary-foreground no-select py-5">


                INVENTRACK is an innovative IoT-based smart shelving system
                designed to streamline inventory management for businesses.
                Equipped with a combination of weight sensors and item counters,
                INVENTRACK provides real-time tracking of stock levels. The system
                monitors the quantity of items on each shelf, automatically
                detecting when stock levels are low based on both weight and item
                count.

              </p>

              <h2 className="text-2xl font-bold flex items-center justify-center "></h2>
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/Resume_Noriel-Gecolea.pdf"; // Update with your file path
                    link.download = "Resume_Noriel-Gecolea.pdf"; // Optional: Specify the downloaded file name
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <DownloadIcon className="mr-2 h-4 w-4" />
                  Download my Curriculum Vitae
                </button>

                <button
                  onClick={() => setCurrentView('contact')}
                  className="inline-flex items-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"

                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
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


export default InventrackPage;



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


