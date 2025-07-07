
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import meImage from '@/components/component/image/me.webp';
import React, { useState, useEffect, CSSProperties, useRef } from 'react';
import PropTypes from 'prop-types';
import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";


interface CustomCSSProperties extends CSSProperties {
  '--i'?: number;
}


interface FullScreenImageModalProps {
  src: string;
  isOpen: boolean;
  onClose: () => void;
}
const FullScreenImageModal: React.FC<FullScreenImageModalProps> = ({ src, isOpen, onClose }) => {
  const [showModal, setShowModal] = useState(isOpen);
  const [fadeClass, setFadeClass] = useState(isOpen ? 'fade-in' : '');

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      setFadeClass('fade-in');
      document.body.style.overflow = 'hidden'; // Lock scroll
    } else {
      setFadeClass('fade-out');
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  useEffect(() => {
    if (fadeClass === 'fade-out') {
      const timer = setTimeout(() => setShowModal(false), 300); // Match the duration of the fade-out animation (300ms)
      return () => clearTimeout(timer);

    }
  }, [fadeClass]);



  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 ${fadeClass}`}
      style={{ display: showModal ? 'flex' : 'none' }}
      onClick={onClose} // Clicking outside the image closes the modal
    >
      {showModal && (
        <div
          className="relative max-w-full max-h-full"
          onClick={(e) => e.stopPropagation()} // Prevents closing when clicking on the image
        >
          <img
            src={src}
            alt="Full Screen"
            className="fullscreen-image cursor-pointer"
          />
          <button
            className="absolute top-4 right-4 text-white text-3xl bg-black bg-opacity-50 rounded-full p-1 hover:bg-opacity-75"
            onClick={onClose} // Closes the modal when clicked
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
}

FullScreenImageModal.propTypes = {
  src: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
interface HomescreenProps {
  currentView: string;
  setCurrentView: (view: string) => void; // Add this to update view
}

function Homescreen({ currentView, setCurrentView }: HomescreenProps) {
  const [modalData, setModalData] = useState({ isOpen: false, src: '' });

  const handleImageClick = (src: string) => {
    setModalData({ isOpen: true, src });
  };

  const handleCloseModal = () => {
    setModalData((prevData) => ({ ...prevData, isOpen: false }));
  };

  const cardData = [
    { src: "/certs/Coursera Bulding a Calculator-1.webp", title: "Building a Calculator" },
    { src: "/certs/csnet.webp", title: "C# for .NET Developers" },
    { src: "/certs/Coursera C++ Data Structures-1.webp", title: "C++ Data Structures" },
    { src: "/certs/Coursera Crash Course on Python-1.webp", title: "Crash Course on Python" },
    { src: "/certs/Coursera Foundation of Computer Science-1.webp", title: "Foundation of Computer Science" },
    { src: "/certs/Coursera Foundation of User Experience Design-1.webp", title: "Foundation of User Experience Design" },
    { src: "/certs/Coursera Introduction to Iot-1.webp", title: "Introduction to Iot" },
    { src: "/certs/Coursera Introduction to visual basic programming-1.webp", title: "Introduction to Visual Basic Programming" },
    { src: "/certs/Coursera Technical Support Fundamental-1.webp", title: "Technical Support Fundamental Google" },
    { src: "/certs/Coursera Technical Support IBM-1.webp", title: "Technical Support IBM" },
    { src: "/certs/ENGINEER TAYO WEBINAR-1.webp", title: "ENGINEER TAYO WEBINAR" },
    { src: "/certs/Communicati-certificate-1.webp", title: "Networking Essentials CISCO" },
    { src: "/certs/Intro to Packet -certificate-1.webp", title: "Introduction to Packet Tracer" },
    { src: "/certs/ISITE NATIONAL COMPETITION WEBINAR.webp", title: "ISITE NATIONAL COMPETITION" },
    { src: "/certs/LYCO WEBINAR.webp", title: "\"The Journey from Code to Career\"" },
    { src: "/certs/Coursera 3TNWU5TDT8U8-1.webp", title: "Foundation of Cybersecurity" }
  ];


  const aboutRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);

    // Scroll to the 'about' section if the current view is 'about'
    if (currentView === 'about' && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    else if (currentView === 'projects' && projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    else if (currentView === 'skills' && skillRef.current) {
      skillRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    else if (currentView === 'contact' && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentView]);


  const router = useRouter();

  const handleRedirect = () => {
    router.push('/posss');
  };
  const words = ["Frontend Developer", "Backend Developer", "Fullstack Developer", "Computer Engineer"];
  return (




    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground }">





      <main className="flex-1">
        <section ref={aboutRef} id="about" className="bg-muted py-20 fade-in grain ">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex items-center justify-center emphasis-animation ">
                <div className="circle-container  ">
                  <div className="">
                    <Image
                      src='/meformal.png'
                      width={300}
                      height={300}
                      alt=""
                      className="h-80 w-80 rounded-full object-cover fade-in-up   "
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-1">

                <h1 className="text-5xl font-bold  no-select"><p className="text-lg text-muted-foreground no-select">Hi, my name is </p>Noriel Gecolea <span className="cursor"></span></h1>
                <div className="horizontal-line"></div>
                <h3 className="text-1xl font-bold  no-select "><FlipWords words={words} />  <span className=""></span></h3>


                <p className="text-lg text-muted-foreground no-select py-5">


                  I am a graduating computer engineering student with a passion for programming and
                  building innovative, user-friendly applications. With experience in a
                  variety of technologies, I am always eager to expand my knowledge and
                  skills. Additionally, I enjoy music production and working on electronics
                  projects in my spare time.
                </p>

                <h2 className="text-2xl font-bold flex items-center justify-center "></h2>
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = "/Noriel Gecolea_CV.pdf"; // Update with your file path
                      link.download = "Noriel Gecolea_CV.pdf"; // Optional: Specify the downloaded file name
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

        <section ref={projectRef} id="projects" className="py-20 fade-in1 hiddenov wrapper">

          <div className=" container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">

            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">Featured Software Projects</h2>
                <p className="text-muted-foreground">Here are some of my recent projects.</p>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">



























                <Card className=" no-select bg-cardd flex flex-col h-full transition-transform transform hover:scale-105 hover:shadow-lg">
                  <CardHeader className="flex items-center justify-center relative">
                    {/* Placeholder background */}


                    <Image
                      src="/POS.png"
                      width={400}
                      height={225}
                      alt=""
                      className="rounded-t-md object-cover py-5 no-select relative z-10"

                    />
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <h3 className="text-xl font-bold no-select" >Simple Point of Sales System (POS)</h3>
                    <p className="text-muted-foreground no-select" >
                      The Simple Point of Sales (POS) System is an intuitive and efficient application designed for managing retail transactions.
                      Developed using VB.NET and MySQL, this software offers a user-friendly interface
                      for processing sales, tracking inventory, and generating reports.
                      Ideal for small to medium-sized businesses.
                    </p>
                    <div className="flex gap-2 no-select">
                      <Badge variant="secondary">VB.net</Badge>
                      <Badge variant="secondary">MySQL</Badge>

                    </div>
                  </CardContent>
                  <CardFooter className="mt-auto flex justify-end">
                    <button onClick={() => setCurrentView('pos')}
                      className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"

                    >
                      <ArrowRightIcon className="mr-2 h-4 w-4" />
                      View Project
                    </button>
                  </CardFooter>
                </Card>
                <Card className=" no-select bg-cardd flex flex-col h-full transition-transform transform hover:scale-105 hover:shadow-lg">
                  <CardHeader className="flex items-center justify-center ">

                    <Image
                      src="/quicktrack.webp"
                      width={400}
                      height={225}
                      alt="Project 2"
                      className="rounded-t-md object-cover py-5 no-select z-10"
                    />
                  </CardHeader>
                  <CardContent className="space-y-2 ">
                    <h3 className="text-xl font-bold no-select">QuickTrack: Smart QR Attendance System</h3>
                    <p className="text-muted-foreground no-select">QuickTrack is a C#.NET and
                      MySQL-based attendance management system that uses QR codes for fast,
                      accurate attendance tracking. It simplifies the attendance process with real-time data
                      syncing and easy-to-use interfaces, making manual tracking obsolete.</p>
                    <div className="flex gap-2 no-select">
                      <Badge variant="secondary">C#.net</Badge>
                      <Badge variant="secondary">MySQL</Badge>

                    </div>
                  </CardContent>
                  <CardFooter className="mt-auto flex justify-end">
                    <button onClick={() => setCurrentView('pos')}
                      className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"

                    >
                      <ArrowRightIcon className="mr-2 h-4 w-4" />
                      View Project
                    </button>
                  </CardFooter>
                </Card>
                <Card className="bg-cardd no-select flex flex-col h-full transition-transform transform hover:scale-105 hover:shadow-lg">
                  <CardHeader className="flex items-center justify-center">
                    <Image
                      src="/LSPU.webp"
                      width={400}
                      height={225}
                      alt="Project 3"
                      className="rounded-t-md object-cover py-5 no-select"
                    />
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <h3 className="text-xl font-bold no-select">LSPU: Training Request Portal</h3>
                    <p className="text-muted-foreground no-select">The LSPU Training Request Portal is a
                      web-based platform that streamlines the process for schools to request
                      access to LSPU Los Banos’ facilities for training sessions. Through the portal,
                      users can easily submit requests, track their status, and manage their bookings.
                      This intuitive system enhances efficiency and transparency,
                      ensuring a smooth and organized process for all participating schools.</p>
                    <div className="flex gap-2 no-select">
                      <Badge variant="secondary">Html CSS JS</Badge>
                      <Badge variant="secondary">PHP</Badge>
                      <Badge variant="secondary">MySQL</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="mt-auto flex justify-end">
                    <button onClick={() => setCurrentView('pos')}
                      className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"

                    >
                      <ArrowRightIcon className="mr-2 h-4 w-4" />
                      View Project
                    </button>

                  </CardFooter>
                </Card>
                <Card className=" bg-cardd flex flex-col h-full transition-transform transform hover:scale-105 hover:shadow-lg">
                  <CardHeader className="flex items-center justify-center">
                    <Image
                      src="/LSPU2.webp"
                      width={400}
                      height={225}
                      alt="Project 1"
                      className="rounded-t-md object-cover  py-5 no-select"
                    />
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <h3 className="text-xl font-bold no-select">LSPU: Inventory Management System</h3>
                    <p className="text-muted-foreground">
                      This Inventory Management System is a comprehensive solution built with
                      HTML, CSS, JavaScript, PHP, and MySQL. It tracks inventory details,
                      including product worth, and identifies whether items are donated or
                      purchased. Designed for internal use specifically for LSPU Sta Cruz, it ensures efficient inventory
                      tracking and management without involving sales.</p>
                    <div className="flex gap-2 no-select">
                      <Badge variant="secondary">Html CSS JS</Badge>
                      <Badge variant="secondary">PHP</Badge>
                      <Badge variant="secondary">MySQL</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="mt-auto flex justify-end">
                    <button onClick={() => setCurrentView('pos')}
                      className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"

                    >
                      <ArrowRightIcon className="mr-2 h-4 w-4" />
                      View Project
                    </button>
                  </CardFooter>
                </Card>

                <Card className=" bg-cardd flex flex-col h-full transition-transform transform hover:scale-105 hover:shadow-lg">
                  <CardHeader className="flex items-center justify-center">
                    <Image
                      src="/cashiering.webp"
                      width={400}
                      height={225}
                      alt="Project 1"
                      className="rounded-t-md object-cover  py-5"
                    />
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <h3 className="text-xl font-bold no-select">Cashiering System Project</h3>
                    <p className="text-muted-foreground no-select">
                      Jerlibee&apos;s cashiering system is designed for efficiency and user-friendliness, featuring an intuitive interface for seamless ordering. The system highlights the brand&apos;s fresh and juicy chicken meals, perfectly
                      paired with mouth-watering sides. Customers can easily navigate through the menu,
                      view their cart, and complete orders, ensuring a satisfying experience from start
                      to finish.
                    </p>
                    <div className="flex gap-2 no-select">
                      <Badge variant="secondary">Html CSS JS</Badge>
                      <Badge variant="secondary">node.js</Badge>
                      <Badge variant="secondary">MySQL</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="mt-auto flex justify-end">
                    <button onClick={() => setCurrentView('pos')}
                      className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"

                    >
                      <ArrowRightIcon className="mr-2 h-4 w-4" />
                      View Project
                    </button>
                  </CardFooter>
                </Card>

                <Card className="bg-cardd flex flex-col h-full transition-transform transform hover:scale-105 hover:shadow-lg">
                  <CardHeader className="flex items-center justify-center">
                    <Image
                      src="/tictactoe.webp"
                      width={400}
                      height={225}
                      alt="Project 1"
                      className="rounded-t-md object-cover  py-5"
                    />
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <h3 className="text-xl font-bold no-select">TICTACTOE Game</h3>
                    <p className="text-muted-foreground no-select">
                      C#.NET-based Tic-Tac-Toe game that integrates with a MySQL database to track and
                      display high scores. This engaging game offers players a fun experience
                      while maintaining a competitive edge with a real-time high score leaderboard.
                      Simple yet addictive, TicTacChamp combines classic gameplay with modern technology
                      to keep track of top players.</p>
                    <div className="flex gap-2 no-select">
                      <Badge variant="secondary">C#.net</Badge>

                      <Badge variant="secondary">MySQL</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="mt-auto flex justify-end">
                    <button onClick={() => setCurrentView('pos')}
                      className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"

                    >
                      <ArrowRightIcon className="mr-2 h-4 w-4" />
                      View Project
                    </button>
                  </CardFooter>
                </Card>



                <Card className="bg-cardd flex flex-col h-full transition-transform transform hover:scale-105 hover:shadow-lg">
                  <CardHeader className="flex items-center justify-center">
                    <Image
                      src="/textsnip.jpg"
                      width={400}
                      height={225}
                      alt="Project 1"
                      className="rounded-t-md object-cover  py-5"
                    />
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <h3 className="text-xl font-bold no-select">TextSnip</h3>
                    <p className="text-muted-foreground no-select">
                      TextSnip is a web-based application that allows users to upload images and instantly extract text using Optical Character Recognition (OCR).
                      It offers a fast, intuitive solution for converting screenshots, scanned documents, and photos into editable text.
                    </p>
                    <div className="flex gap-2 no-select">
                      <Badge variant="secondary">ReactJs</Badge>

                      
                    </div>
                  </CardContent>
                  <CardFooter className="mt-auto flex justify-end">


                    



                    <a href="http://textsnip.norielgecolea.com/"
                      className="cursor-pointer inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"

                    >
                      <ArrowRightIcon className="mr-2 h-4 w-4" />
                      View Project
                    </a>
                  </CardFooter>
                </Card>





              </div>


              <div className="space-y-2">
                <h2 className="text-3xl font-bold no-select">Featured Software and Hardware Projects</h2>
                <p className="text-muted-foreground no-select">Here are some of my recent projects.</p>
              </div>
              <div className=" grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">


                <Card className="bg-cardd no-select flex flex-col h-full transition-transform transform hover:scale-105 hover:shadow-lg">
                  <CardHeader className="flex items-center justify-center no-select">
                    <Image
                      src="/INVENTRACK.jpg"
                      width={400}
                      height={225}
                      alt="Project 1"
                      className="rounded-t-md object-cover  py-5 no-select"
                    />
                  </CardHeader>


                  <CardContent className="space-y-2">
                    <h3 className="text-xl font-bold no-select">Inventrack</h3>
                    <p className="text-muted-foreground no-select">
                      INVENTRACK is an innovative IoT-based smart shelving system
                      designed to streamline inventory management for businesses.
                      Equipped with a combination of weight sensors and item counters,
                      INVENTRACK provides real-time tracking of stock levels. The system
                      monitors the quantity of items on each shelf, automatically
                      detecting when stock levels are low based on both weight and item
                      count.</p>
                    <div className="flex gap-2 no-select">
                      <Badge variant="secondary">ESP32</Badge>
                      <Badge variant="secondary">SQL</Badge>
                      <Badge variant="secondary">Html CSS JS</Badge>

                    </div>
                  </CardContent>
                  <CardFooter className="mt-auto flex justify-end">
                    <button onClick={() => setCurrentView('pos')}
                      className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"

                    >
                      <ArrowRightIcon className="mr-2 h-4 w-4" />
                      View Project
                    </button>
                  </CardFooter>
                </Card>

                <Card className="bg-cardd no-select flex flex-col h-full transition-transform transform hover:scale-105 hover:shadow-lg">
                  <CardHeader className="flex items-center justify-center no-select">
                    <Image
                      src="/sumobot.webp"
                      width={400}
                      height={225}
                      alt="Project 1"
                      className="rounded-t-md object-cover  py-5 no-select"
                    />
                  </CardHeader>


                  <CardContent className="space-y-2">
                    <h3 className="text-xl font-bold no-select">Sumobot</h3>
                    <p className="text-muted-foreground no-select">
                      Sumobot is an autonomous robot designed for competitive sumo wrestling matches.
                      Equipped with front-facing sensors, it detects and pushes opponents,
                      while its infrared sensors ensure it stays within the boundaries of the arena.
                      Sumobot combines strategic movement and robust design to dominate the ring,
                      offering an exciting and interactive robotics experience.</p>
                    <div className="flex gap-2 no-select">
                      <Badge variant="secondary">Arduino</Badge>
                      <Badge variant="secondary">C#</Badge>

                    </div>
                  </CardContent>
                  <CardFooter className="mt-auto flex justify-end">
                    <button onClick={() => setCurrentView('pos')}
                      className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"

                    >
                      <ArrowRightIcon className="mr-2 h-4 w-4" />
                      View Project
                    </button>
                  </CardFooter>
                </Card>

                <Card className="bg-cardd flex flex-col h-full transition-transform transform hover:scale-105 hover:shadow-lg">
                  <CardHeader className="flex items-center justify-center">
                    <Image
                      src="/smartfan.webp"
                      width={400}
                      height={225}
                      alt="Project 1"
                      className="rounded-t-md object-cover  py-5"
                    />
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <h3 className="text-xl font-bold no-select" >IoT Smart Exhaust Fan Control System</h3>
                    <p className="text-muted-foreground no-select">
                      The Smart Exhaust Fan Control System intelligently manages an external fan based on data
                      from integrated smoke and temperature sensors. Connected to a Firebase database,
                      it allows real-time monitoring and manual control via a dedicated app.
                      This system ensures optimal air quality and safety, providing users with
                      convenient access to sensor readings and fan operation.</p>
                    <div className="flex gap-2 no-select">
                      <Badge variant="secondary">ESP32</Badge>
                      <Badge variant="secondary">C#</Badge>
                      <Badge variant="secondary">Firebase</Badge>
                      <Badge variant="secondary">Html CSS JS</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="mt-auto flex justify-end">
                    <button onClick={() => setCurrentView('pos')}
                      className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"

                    >
                      <ArrowRightIcon className="mr-2 h-4 w-4" />
                      View Project
                    </button>
                  </CardFooter>
                </Card>

                <Card className="bg-cardd flex flex-col h-full transition-transform transform hover:scale-105 hover:shadow-lg">
                  <CardHeader className="flex items-center justify-center">
                    <Image
                      src="/ROBOT.webp"
                      width={400}
                      height={225}
                      alt="Project 1"
                      className="rounded-t-md object-cover"
                    />
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <h3 className="text-xl font-bold no-select">IoT Robot With Arm</h3>
                    <p className="text-muted-foreground no-select">
                      The IoT Robot with Arm is an advanced robotic system designed for a
                      variety of applications. Equipped with a versatile robotic arm, this
                      robot features multiple degrees of freedom, allowing for precise and
                      complex movements. It includes various sensors such as ultrasonic and
                      infrared, enabling it to navigate and interact with its environment
                      effectively. Users can control and monitor the robot through a dedicated
                      app, providing seamless integration and ease of use. This combination of
                      advanced robotics and IoT connectivity makes it ideal for tasks in
                      automation, research, and education.
                    </p>
                    <div className="flex gap-2 no-select">
                      <Badge variant="secondary">Html CSS JS</Badge>
                      <Badge variant="secondary">PHP</Badge>
                      <Badge variant="secondary">MySQL</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="mt-auto flex justify-end">
                    <button onClick={() => setCurrentView('pos')}
                      className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"

                    >
                      <ArrowRightIcon className="mr-2 h-4 w-4" />
                      View Project
                    </button>
                  </CardFooter>
                </Card>






                <Card className="bg-cardd flex flex-col h-full transition-transform transform hover:scale-105 hover:shadow-lg">
                  <CardHeader className="flex items-center justify-center">
                    <Image
                      src="/watervending.webp"
                      width={400}
                      height={225}
                      alt="Project 1"
                      className="rounded-t-md object-cover  py-5"
                    />
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <h3 className="text-xl font-bold no-select">Coin Base Water Refilling System</h3>
                    <p className="text-muted-foreground no-select">
                      The Coin Base Water Refilling System is an automated water dispensing
                      unit designed using Arduino. It allows users v  to refill their water
                      containers by inserting a coin into the machine.
                      The Arduino microcontroller manages the systems operations,
                      including coin validation, water dispensing. When a valid coin is detected, the Arduino activates
                      a water pump to dispense the required amount of water. This system
                      ensures a convenient and efficient refilling process, with an emphasis
                      on user-friendliness and reliability.
                    </p>
                    <div className="flex gap-2 no-select">
                      <Badge variant="secondary">Arduino</Badge>
                      <Badge variant="secondary">C#</Badge>

                    </div>
                  </CardContent>
                  <CardFooter className="mt-auto flex justify-end">
                    <button onClick={() => setCurrentView('pos')}
                      className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"

                    >
                      <ArrowRightIcon className="mr-2 h-4 w-4" />
                      View Project
                    </button>
                  </CardFooter>
                </Card>





              </div>

            </div>
          </div>
        </section>




        <section ref={skillRef} id="skills" className="bg-muted py-20 grain">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-5">


              <div className="space-y-2">
                <h2 className="text-3xl font-bold">Featured Skills</h2>
                <p className="text-muted-foreground">Here are some of the skills I&apos;m proficient with:</p>
              </div>

              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                <div className="space-y-2">
                  <CodeIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Front-end</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>React</li>

                    <li>HTML/CSS/JavaScript</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <ServerIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Back-end</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>Node.js</li>
                    <li>Python</li>

                    <li>PHP</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <DatabaseIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Databases</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>FireBase</li>
                    <li>MySQL</li>

                  </ul>
                </div>
                <div className="space-y-2">
                  <PenToolIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Hardware and Tools</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>Arduino</li>
                    <li>VS</li>

                  </ul>

                </div>
                <div className="space-y-9"></div>

              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">Featured Certificates</h2>
                <p className="text-muted-foreground">Here are some of my certifications</p>
              </div>









              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                {cardData.map((card, index) => (
                  <div
                    key={index}
                    className="no-select bg-cardd flex flex-col h-full transition-transform transform hover:scale-105 hover:shadow-lg"
                  >
                    {/* Image Container */}
                    <div className="flex-1 flex items-center justify-center">
                      <Image
                        src={card.src}
                        width={600}
                        height={225}
                        alt={card.title}
                        className=" object-cover cursor-pointer"
                        onClick={() => handleImageClick(card.src)}
                      />
                    </div>

                    <div className="mt-auto flex  justify-center">
                      <h3 className="text-muted-foreground text-center items-center justify-center">{card.title}</h3>
                    </div>
                  </div>
                ))}
              </div>


            </div>

          </div>

          <FullScreenImageModal src={modalData.src} isOpen={modalData.isOpen} onClose={handleCloseModal} />





        </section>
        <section ref={contactRef} id="contact" className="py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">Contact Me</h2>
                <p className="text-muted-foreground">
                  Feel free to reach out if you have any questions or would like to collaborate.
                </p>
              </div>
              <form className="space-y-4" action="https://api.web3forms.com/submit" method="POST">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Input type="hidden" name="access_key" value="1fc4e8af-b7fb-4bd9-95c6-5bac74d5e7b0" />
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input name="name" id="name" type="text" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input name="email" id="email" type="email" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea name="message" id="message" rows={5} required />
                </div>
                <Input type="hidden" name="redirect" value="https://www.norielgecolea.com" />
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-8">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CodeIcon className="h-6 w-6" />
              <div>
                <span className="font-bold">Noriel Fernando Gecolea</span>

              </div>
            </div>
            <div className="text-sm text-muted-foreground">© NORIELGECOLEA 2024 - 2025</div>
            <div className="flex items-center gap-4">
              <Link href="https://www.linkedin.com/in/norielgecolea/" className="text-muted-foreground hover:text-primary" prefetch={false}>
                <LinkedinIcon className="h-6 w-6 wiggle" />
              </Link>
              <Link href="https://www.instagram.com/norrsss__/" className="text-muted-foreground hover:text-primary" prefetch={false}>
                <InstagramIcon className="h-6 w-6 wiggle" />
              </Link>
              <Link href="https://www.facebook.com/NorielGecolea/" className="text-muted-foreground hover:text-primary" prefetch={false}>
                <FacebookIcon className="h-6 w-6 wiggle" />
              </Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}


export default Homescreen;
function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
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
  )
}


function DatabaseIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
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


function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
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
function ThreadsLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12a8 8 0 0 1 8-8M4 12a8 8 0 0 0 8 8M12 4a8 8 0 0 1 8 8M12 4a8 8 0 0 0 8 8M12 12a8 8 0 0 1 8 8M12 12a8 8 0 0 0 8 8" />
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


function PenToolIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" />
      <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" />
      <path d="m2.3 2.3 7.286 7.286" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  )
}


function ServerIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  )
}


function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function XIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}