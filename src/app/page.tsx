import Image from "next/image";
// import Link from "next/link"; 
import { Target, Clock, BookOpenCheck, Handshake, Volume, Lightbulb, Phone, Mail, Instagram } from "lucide-react"

const threedimageList = [
  "/assets/img/3d/cup-oppai.png",
  "/assets/img/3d/mk-pose4.jpg",
  "/assets/img/3d/strike-freedom.jpg",
  "/assets/img/istri-saiful.png",
];

const shirtDesignList = [
  '/assets/img/desainbaju/ABEKA1.png',
  '/assets/img/desainbaju/baju-espaka.png',
  '/assets/img/desainbaju/baju-kakek.png',
  '/assets/img/desainbaju/baju-kakek2.png',
]

const promotionCarousel = [
  '/assets/img/project1/1.jpg',
  '/assets/img/project1/2.jpg',
  '/assets/img/project1/3.jpg',
  '/assets/img/project1/4.jpg',
  '/assets/img/project1/5.jpg',
  '/assets/img/project1/6.jpg',
]

const publicService = [
  '/assets/img/project2/1.png',
  '/assets/img/project2/2.png',
  '/assets/img/project2/3.png',
  '/assets/img/project2/4.png',
  '/assets/img/project2/5.png',
  '/assets/img/project2/6.png',
  '/assets/img/project2/7.png',
]

export default function Home() {
  return (
    <main className="w-full px-4 sm:px-10 md:px-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-white flex justify-center items-start">
      <div className="flex min-h-screen max-w-screen-xl w-full flex-col items-start justify-start gap-16 md:gap-28">

        <div className="appear flex flex-col-reverse lg:flex-row w-full h-full items-start justify-start py-20 md:py-28 gap-10">
          <div className="flex items-start justify-start w-full h-full">
            <div className="w-full max-w-2xl h-full flex flex-col items-start text-start lg:items-start lg:text-left justify-start gap-3">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold w-full">I&apos;m Designer</h1>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold w-full text-wrap md:text-nowrap">Muhammad Saiful Akbar</h1>
              <p className="text-base md:text-lg">
                Hi! I&apos;m Saiful, a freelance motion designer based in Indonesia with extensive experience in both 2D and 3D graphic design. I specialize in creating visually engaging posters, brochures, and logos, as well as 3D models of robot characters and other creative assets—perfect for games, animations, and product visualizations. I&apos;m passionate about delivering results that are not only detailed and attractive but also tailored to each client&apos;s unique needs. Thank you for taking the time to explore my portfolio. I look forward to the opportunity to collaborate with you!
              </p>
            </div>
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-full max-w-sm md:max-w-md aspect-square relative flex items-center justify-center rounded-full after:bg-amber-500 after:content-[''] after:absolute after:w-full after:h-full after:rounded-full after:scale-90 after:z-10 before:absolute before:content-[''] before:w-full before:h-0 before:bg-white before:z-20 before:top-0 before:dark:bg-gray-900 before:rounded-full hover:before:w-full hover:before:h-full before:transition-all before:duration-300 before:ease-in before:shadow-xl before:scale-91">
              <Image
                src="/assets/img/profile.png"
                alt="Profile Picture"
                width={500}
                height={500}
                className="w-auto h-full z-90 "
                priority 
              />
            </div>
          </div>
        </div>

        <div className="w-full h-full flex flex-col items-start gap-10 py-10 md:py-20">
          <h1 className="appear text-4xl md:text-6xl font-bold w-full text-start lg:text-left">About Me</h1>
          <div className="flex w-full h-full items-start justify-center flex-col lg:flex-row gap-12 lg:gap-4">
            <div className="w-full h-full flex flex-col items-start justify-start gap-5">
              <p className="text-base appear">
                I&apos;m Saiful, a passionate freelance motion designer and 2D/3D graphic artist based in Indonesia with a strong dedication to visual storytelling. Over the years, I&apos;ve honed my ability to craft designs that not only look visually compelling but also serve a clear purpose in communication and branding. My creative journey has led me to work on a diverse range of projects — from eye-catching posters, brochures, and logos to highly detailed 3D models of robot characters and original assets tailored for games, animated films, and product visualizations.
              </p>
              <p className="text-base appear">
                With a solid grasp of industry-standard tools such as Adobe After Effects, Blender, Illustrator, and Photoshop, I approach each project with a mix of technical skill and artistic vision. I take pride in translating ideas into visuals that resonate with the intended audience while staying true to the identity of the brand or message. Whether it&apos;s bringing dynamic motion to life or shaping immersive 3D environments, my goal is to deliver creative solutions that are both aesthetically pleasing and strategically aligned with each client&apos;s unique objectives.
              </p>
              <p className="text-base appear">
                I&apos;m always open to new challenges, collaborations, and learning opportunities that push my creativity further.
              </p>
            </div>
            <div className="w-full h-full flex flex-col items-start justify-start gap-8">
              <div className="flex w-full flex-col gap-4">
                <h1 className="appear text-2xl font-semibold">Language:</h1>
                <ul className="list-none pl-5">
                  <li className="text-xl py-1 appear">Indonesian (Native)</li>
                  <li className="text-xl py-1 appear ">English (Intermediate)</li>
                </ul>
              </div>
              <div className="flex w-full flex-col gap-4">
                <h1 className="text-2xl appear font-semibold">Tools:</h1>
                <ul className="list-none pl-5 w-full h-full grid grid-cols-2 gap-3">
                  <li className="text-xl flex flex-row items-center py-1 gap-2 appear">
                    <Image src="/assets/img/ai.png" alt="Adobe Illustrator" width={20} height={20} className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
                    <p>Illustrator</p>
                  </li>
                  <li className="text-xl flex flex-row items-center py-1 gap-2 appear">
                    <Image src="/assets/img/photoshop.png" alt="Adobe Photoshop" width={20} height={20} className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
                    <p>Photoshop</p>
                  </li>
                  <li className="text-xl flex flex-row items-center py-1 gap-2 appear">
                    <Image src="/assets/img/ae.png" alt="Adobe After Effects" width={20} height={20} className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
                    <p>After Effects</p>
                  </li>
                  <li className="text-xl flex flex-row items-center py-1 gap-2 appear">
                    <Image src="/assets/img/blender.png" alt="Blender" width={20} height={20} className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
                    <p>Blender</p>
                  </li>
                  <li className="text-xl flex flex-row items-center py-1 gap-2 appear">
                    <Image src="/assets/img/canva.png" alt="Canva" width={20} height={20} className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
                    <p>Canva</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full h-full flex-col items-start lg:items-start justify-start py-10 md:py-20 gap-8">
            <h1 className="appear text-4xl md:text-6xl font-bold text-left lg:text-left">Personal Skills</h1>
            <ul className="list-none w-full h-full gap-8 grid md:grid-cols-2 lg:grid-cols-3">
              <li className="appear flex flex-col items-start text-start lg:items-start lg:text-left justify-start gap-2">
                <div className="flex flex-row gap-3 items-start">
                  <Target />
                  <h2 className="text-2xl font-semibold">Creative & Productive</h2>
                </div>
                <p className="text-base max-w-xs">Always eager to bring unique visual ideas to life — either from client briefs or personal initiatives.</p>
              </li>
              <li className="appear flex flex-col items-start text-start lg:items-start lg:text-left justify-start gap-2">
                <div className="flex flex-row gap-3 items-start">
                  <Clock />
                  <h2 className="text-2xl font-semibold">Disciplined & On Time</h2>
                </div>
                <p className="text-base max-w-xs">Able to manage deadlines and deliver work on schedule, even when working independently.</p>
              </li>
              <li className="appear flex flex-col items-start text-start lg:items-start lg:text-left justify-start gap-2">
                <div className="flex flex-row gap-3 items-start">
                  <BookOpenCheck />
                  <h2 className="text-2xl font-semibold">Quick Learner</h2>
                </div>
                <p className="text-base max-w-xs">Open to learning new tools and styles quickly, and flexible to match different project needs.</p>
              </li>
              <li className="appear flex flex-col items-start text-start lg:items-start lg:text-left justify-start gap-2">
                <div className="flex flex-row gap-3 items-start">
                  <Volume />
                  <h2 className="text-2xl font-semibold">Good Communication</h2>
                </div>
                <p className="text-base max-w-xs">Able to communicate clearly with clients, especially when discussing revisions or feedback.</p>
              </li>
              <li className="appear flex flex-col items-start text-start lg:items-start lg:text-left justify-start gap-2">
                <div className="flex flex-row gap-3 items-start">
                  <Lightbulb />
                  <h2 className="text-2xl font-semibold">Problem Solving</h2>
                </div>
                <p className="text-base max-w-xs">Willing to find creative solutions when facing design or technical challenges.</p>
              </li>
              <li className="appear flex flex-col items-start text-start lg:items-start lg:text-left justify-start gap-2">
                <div className="flex flex-row gap-3 items-start">
                  <Handshake />
                  <h2 className="text-2xl font-semibold">Collaborative</h2>
                </div>
                <p className="text-base max-w-xs">Comfortable working alone, but also open to teamwork or creative collaboration.</p>
              </li>
            </ul>
        </div>
        
        <div className="flex w-full h-full flex-col items-start justify-start gap-12 py-10 md:py-20">
          <div className="w-full h-full flex flex-col items-start text-start lg:items-start lg:text-left justify-start gap-3">
            <h1 className="text-4xl md:text-6xl font-bold appear">Design Showcase</h1>
            <p className="text-base appear max-w-2xl">
              Dive into some of the projects I&apos;ve crafted with creativity and strategy in mind. These works represent my approach to design: thoughtful, meaningful, and visually engaging.
            </p>
          </div>
          
          <div className="w-full flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-bold appear">3D Model</h2>
            <div className="appear w-full overflow-x-auto whitespace-nowrap py-4">
              <div className="inline-flex gap-4">
                {threedimageList.map((src, i) => (
                  <Image key={i} src={src} alt={`3D Model ${i+1}`} width={500} height={250}
                    className="h-48 w-80 md:h-56 md:w-[500px] object-cover rounded-lg" />
                ))}
              </div>
            </div>
          </div>
          
          <div className="w-full flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-bold appear">Shirt Design</h2>
            <div className="appear w-full overflow-x-auto whitespace-nowrap py-4">
              <div className="inline-flex gap-4">
                {shirtDesignList.map((src, i) => (
                  <Image key={i} src={src} alt={`Shirt Design ${i+1}`} width={500} height={250}
                    className="h-48 w-80 md:h-56 md:w-[500px] object-cover rounded-lg bg-gray-200" />
                ))}
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-bold appear">Promotion Carousel</h2>
            <div className="appear w-full overflow-x-auto whitespace-nowrap py-4">
              <div className="inline-flex gap-4">
                {promotionCarousel.map((src, i) => (
                  <Image key={i} src={src} alt={`Promotion Carousel Image ${i+1}`} width={300} height={500}
                    className="h-80 md:h-96 w-auto object-cover rounded-lg" />
                ))}
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-bold appear ">Public Service Announcement</h2>
            <div className="appear w-full overflow-x-auto whitespace-nowrap py-4 ">
              <div className="inline-flex gap-4">
                {publicService.map((src, i) => (
                  <Image key={i} src={src} alt={`Public Service Image ${i+1}`} width={300} height={500}
                    className="h-80 md:h-96 w-auto object-cover rounded-lg" />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full h-full flex-col py-10 md:py-20 gap-8 items-start lg:items-start">
          <h1 className="text-4xl md:text-5xl appear font-bold text-center lg:text-left">Contact Me</h1>
          <ul className="list-none w-full h-full gap-8 flex flex-col md:flex-row md:flex-wrap items-start justify-start">
            <li className="appear flex flex-row gap-4 items-center">
              <Phone size={28} />
              <div className="flex flex-col">
                <h2 className="text-2xl font-semibold">Phone / WhatsApp</h2>
                <a href="tel:+6283102703891" className="text-base hover:text-amber-500">+62 831-0270-3891</a>
              </div>
            </li>
            <li className="appear flex flex-row gap-4 items-center">
              <Mail size={28} />
              <div className="flex flex-col">
                <h2 className="text-2xl font-semibold">Email</h2>
                <a href="mailto:saiful.akbar1103@gmail.com" className="text-base hover:text-amber-500">saifulakbar1103@gmail.com</a>
              </div>
            </li>
            <li className="appear flex flex-row gap-4 items-center">
              <Instagram size={28} />
              <div className="flex flex-col">
                <h2 className="text-2xl font-semibold">Instagram</h2>
                <a href="https://www.instagram.com/saifull_msa" className="text-base hover:text-amber-500">@saifull_msa</a>
              </div>
            </li>
          </ul>
        </div>

        <div className="footer pb-20 appear w-full justify-center flex items-center h-full text-base text-center">
            <p>&copy; {new Date().getFullYear()} Muhammad Saiful Akbar. All Rights Reserved.</p>
        </div>
      </div>
    </main>
  );
}