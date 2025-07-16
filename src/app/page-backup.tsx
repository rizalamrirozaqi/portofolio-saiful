import Image from "next/image";
// import Link from "next/link";
import { Target, Clock, BookOpenCheck, Handshake, Volume, Lightbulb, Phone, Mail, Instagram } from "lucide-react"

const threedimageList = [
  "/assets/img/3d/cup-oppai.png",
  "/assets/img/3d/mk-pose4.jpg",
  "/assets/img/3d/strike-freedom.jpg",
];

const shirtDesignList = [
  '/assets/img/desainbaju/ABEKA1.png',
  '/assets/img/desainbaju/baju-espaka.png',
  '/assets/img/desainbaju/baju-kakek.png',
  '/assets/img/desainbaju/baju-kakek2.png',
  '/assets/img/desainbaju/SKY.png',
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
    <main className=" w-full px-6 sm:px-10 md:px-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-white flex justify-center items-start ">
      <div className="flex min-h-screen max-w-screen-xl w-full flex-col items-center justify-start bg-white dark:bg-gray-900 text-gray-800 dark:text-white gap-20 ">

        
        <div className="appear flex flex-row w-full h-full items-center justify-center py-28">
          <div className=" flex items-center justify-center w-full h-full">
            <div className="w-full max-w-2xl h-full flex flex-col items-start justify-center gap-3">
              <h1 className="text-6xl font-bold ">I&apos;m Designer</h1>
              <h1 className="text-6xl font-bold text-nowrap">Muhammad Saiful Akbar</h1>
              <p className="text-base">
                Hi! I&apos;m Saiful, a freelance motion designer based in Indonesia with extensive experience in both 2D and 3D graphic design. I specialize in creating visually engaging posters, brochures, and logos, as well as 3D models of robot characters and other creative assets—perfect for games, animations, and product visualizations. I&apos;m passionate about delivering results that are not only detailed and attractive but also tailored to each client&apos;s unique needs. Thank you for taking the time to explore my portfolio. I look forward to the opportunity to collaborate with you!
              </p>
            </div>
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-full h-full max-w-2xl max-h-2xl aspect-square relative flex items-center justify-center rounded-full             after:bg-amber-500 after:content-[''] after:absolute after:w-full after:h-full after:rounded-full after:scale-90 after:z-10                                  before:absolute before:content-[''] before:w-full before:h-0 before:bg-white before:z-20 before:top-0 before:dark:bg-gray-900 before:rounded-full hover:before:w-full hover:before:h-full before:transition-all before:duration-300 before:ease-in before:shadow-xl before:scale-91">
              {/* <img src="/assets/img/profile.png" className="w-auto h-full drop-shadow-xl z-90"/> */}
              <Image
                src="/assets/img/profile.png"
                alt="Profile Picture"
                width={500}
                height={500}
                className="w-auto h-full z-90 "
              />
            </div>
          </div>
        </div>


        <div className="w-full h-full flex flex-col  gap-10 py-28">
          <h1 className="appear text-6xl font-bold">About Me</h1>
          <div className="flex w-full h-full items-start justify-center flex-row">
            <div className="w-full max-w-2xl h-full flex flex-col items-start justify-start gap-5 py-3">
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
            <div className="w-full h-full flex flex-col items-center justify-center">
              <div className="flex w-full h-full px-28 flex-col gap-4 py-3">
                <h1 className="appear text-2xl">Language:</h1>
                <ul className="list-none pl-5 ">
                  <li className="text-xl py-1 appear">Indonesian (Native)</li>
                  <li className="text-xl py-1 appear ">English (Intermediate)</li>
                </ul>
              </div>
              <div className="flex w-full h-full px-28 flex-col gap-4 py-3">
                <h1 className="text-2xl appear">Tools:</h1>
                <ul className="list-none pl-5 w-full h-full gap-3">
                  <li className="text-xl flex flex-row py-1 gap-2 appear">
                    <Image src="/assets/img/ai.png" alt="Adobe Illustrator" width={20} height={20} className="w-auto h-full" />
                    <p>Adobe Illustrator</p>
                  </li>
                  <li className="text-xl flex flex-row py-1 gap-2 appear">
                    <Image src="/assets/img/photoshop.png" alt="Adobe Photoshop" width={20} height={20} className="w-auto h-full" />
                    <p>Adobe Photoshop</p>
                  </li>
                  <li className="text-xl flex flex-row py-1 gap-2 appear">
                    <Image src="/assets/img/ae.png" alt="Adobe After Effects" width={20} height={20} className="w-auto h-full" />
                    <p>Adobe After Effects</p>
                  </li>
                  <li className="text-xl flex flex-row py-1 gap-2 appear">
                    <Image src="/assets/img/blender.png" alt="Blender" width={20} height={20} className="w-auto h-full" />
                    <p>Blender</p>
                  </li>
                  <li className="text-xl flex flex-row py-1 gap-2 appear">
                    <Image src="/assets/img/canva.png" alt="Canva" width={20} height={20} className="w-auto h-full" />
                    <p>Canva</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        <div className="flex w-full h-full items-start justify-start py-28">
          <div className="w-full max-w-2xl h-full flex flex-col items-start justify-center gap-4">
            <h1 className="appear text-6xl font-bold">Personal Skill</h1>
            <ul className="list-none w-full h-full gap-3 flex flex-col items-start justify-start">
              <li className="appear flex flex-col items-start justify-center">
                <div className="flex flex-row gap-3">
                  <Target />
                  <h2 className="text-2xl font-semibold">Creative and Productive</h2>
                </div>
                <p className="text-base">Always eager to bring unique visual ideas to life — either from client briefs or personal initiatives.</p>
              </li>
              <li className="appear flex flex-col items-start justify-center">
                <div className="flex flex-row gap-3">
                  <Clock />
                  <h2 className="text-2xl font-semibold">Disciplined & On Time</h2>
                </div>
                <p className="text-base">Able to manage deadlines and deliver work on schedule, even when working independently.</p>
              </li>
              <li className="appear flex flex-col items-start justify-center">
                <div className="flex flex-row gap-3">
                  <BookOpenCheck />
                  <h2 className="text-2xl font-semibold">Quick Learner & Adaptable</h2>
                </div>
                <p className="text-base">Open to learning new tools and styles quickly, and flexible to match different project needs.</p>
              </li>
              <li className="appear flex flex-col items-start justify-center">
                <div className="flex flex-row gap-3">
                  <Volume />
                  <h2 className="text-2xl font-semibold">Good Communication</h2>
                </div>
                <p className="text-base">Able to communicate clearly with clients, especially when discussing revisions or feedback.</p>
              </li>
              <li className="appear flex flex-col items-start justify-center">
                <div className="flex flex-row gap-3">
                  <Lightbulb />
                  <h2 className="text-2xl font-semibold">Basic Problem Solving</h2>
                </div>
                <p className="text-base">Willing to find creative solutions when facing design or technical challenges — through exploration or asking.</p>
              </li>
              <li className="appear flex flex-col items-start justify-center">
                <div className="flex flex-row gap-3">
                  <Handshake />
                  <h2 className="text-2xl font-semibold">Independent & Collaborative</h2>
                </div>
                <p className="text-base">Comfortable working alone, but also open to teamwork or creative collaboration.</p>
              </li>
            </ul>
          </div>
        </div>


        <div className="flex w-full h-full items-start justify-start flex-col ">
          <div className="w-full max-w-2xl h-full flex flex-col items-start justify-start gap-3 pb-3">
            <h1 className="text-6xl font-bold appear">Design Showcase</h1>
            <p className="text-base appear">
              Dive into some of the projects I&apos;ve crafted with creativity and strategy in mind. These works represent my approach to design: thoughtful, meaningful, and visually engaging.
            </p>
          </div>
          <div className="flex flex-col py-3">
            <h1 className="text-4xl font-bold appear">3D Model</h1>
            <div className="appear w-full h-full overflow-hidden rounded-lg">
                <div className="appear w-full h-full overflow-x-auto whitespace-nowrap py-4 rounded-lg">
                <div className="appear inline-flex gap-4 rounded-lg">
                  {threedimageList.map((src, i ) => (
                    <Image
                      key={i}
                      src={src}
                      alt={`Image ${i+i}`}
                      width={500}
                      height={500}
                      className="appear object-cover rounded-lg"
                      />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-3">
          <h1 className="text-4xl font-bold appear">Shirt Design</h1>
          <div className="appear w-full h-full overflow-hidden rounded-lg">
            <div className="appear w-full h-full overflow-x-auto whitespace-nowrap py-4 rounded-lg">
              <div className="appear inline-flex gap-4 rounded-lg">
                {shirtDesignList.map((src, i ) => (
                  <Image
                    key={i}
                    src={src}
                    alt={`Image ${i+i}`}
                    width={300}
                    height={300}
                    className="appear object-cover rounded-lg"
                    />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-3">
          <h1 className="text-4xl font-bold appear">Promotion Carousel</h1>
          <div className="appear w-full h-full overflow-hidden rounded-lg">
            <div className="appear w-full h-full overflow-x-auto whitespace-nowrap py-4 rounded-lg">
              <div className="appear inline-flex gap-4 rounded-lg">
                {promotionCarousel.map((src, i ) => (
                  <Image
                    key={i}
                    src={src}
                    alt={`Image ${i+i}`}
                    width={300}
                    height={500}
                    className="appear object-cover rounded-lg"
                    />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-3">
          <h1 className="text-4xl font-bold appear">Public Service Announcement</h1>
          <div className="appear w-full h-full overflow-hidden rounded-lg">
            <div className="appear w-full h-full overflow-x-auto whitespace-nowrap py-4 rounded-lg">
              <div className="appear inline-flex gap-4 rounded-lg">
                {publicService.map((src, i ) => (
                  <Image
                    key={i}
                    src={src}
                    alt={`Image ${i+i}`}
                    width={300}
                    height={500}
                    className="appear object-cover rounded-lg"
                    />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full h-full flex-col py-28 gap-8">
          <h1 className="text-4xl appear font-bold">Contact Me</h1>
          <ul className="list-none w-full h-full gap-5 flex flex-col items-start justify-start">
            <li className="appear flex flex-col items-start justify-center">
              <div className="flex flex-row gap-3">
                <Phone />
                <h2 className="text-2xl font-semibold">Creative and Productive</h2>
              </div>
              <p className="text-base">Always eager to bring unique visual ideas to life — either from client briefs or personal initiatives.</p>
            </li>
            <li className="appear flex flex-col items-start justify-center">
              <div className="flex flex-row gap-3">
                <Mail />
                <h2 className="text-2xl font-semibold">Creative and Productive</h2>
              </div>
              <p className="text-base">Always eager to bring unique visual ideas to life — either from client briefs or personal initiatives.</p>
            </li>
            <li className="appear flex flex-col items-start justify-center">
              <div className="flex flex-row gap-3">
                <Instagram />
                <h2 className="text-2xl font-semibold">Creative and Productive</h2>
              </div>
              <p className="text-base">Always eager to bring unique visual ideas to life — either from client briefs or personal initiatives.</p>
            </li>
          </ul>
        </div>

        <div className="footer pb-28"></div>
      </div>
    </main>
  );
}
