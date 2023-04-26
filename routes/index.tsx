import { Head } from "$fresh/runtime.ts";
import { Footer } from "../components/Footer.tsx";
import { Navbar } from "../components/Navbar.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Romance club</title>
      </Head>
      <div>
        <Navbar></Navbar>
        <header className="w-auto h-screen">
          <img
            src="main/main_bg.jpg"
            alt=""
            className="absolute w-full h-full object-cover object-center brightness-10"
            style="z-index:-1;"
          />
          <div className="w-full h-full story_logo grid place-items-center bg-[#00000099]">
            <img
              src="main/story_logo.png"
              alt=""
              className="absolute w-full h-auto"
            />
          </div>
        </header>
        <main className="w-full h-auto">
          <section className="w-full min-h-[100vh] h-auto bg-[#69100a] flex justify-center">
            <div className="w-full h-auto flex justify-items-center items-center p-8">
              <div className="w-full h-auto flex flex-col gap-8 justify-items-center items-center">
                <img
                  src="main/story_logo_2.jpg"
                  alt=""
                  className="rounded-[50%] object-cover w-[300px] h-auto"
                  style="aspect-ratio:1/1;"
                />
                <h1 className="text-3xl font-bold">About story</h1>
                <p className="text-justify">
                  The world of the main character suddenlу collapses. She loses
                  the onlу person she cares about - her aunt Annette. A woman
                  dies under strange circumstances. Our heroine will have to trу
                  on manу different roles: a murder suspect, a detective's
                  assistant, a victim of an unknown attacker, a business ladу
                  starting up and just a beloved woman.
                </p>
              </div>
            </div>
          </section>
          {/* <section className="w-full h-[30vh] grid grid-cols-3 grid-flow-col">
            <img
              src="main/story_logo_4.jpg"
              alt=""
              className="h-full object-cover"
              style="filter:brightness(.7);"
            />
            <img
              src="main/story_logo_5.jpg"
              alt=""
              className="h-full object-cover"
              style="filter:brightness(.7);"
            />
          </section> */}
          <section className="relative w-full h-screen flex flex-col gap-4 justify-center items-center">
            <img
              src="main/story_logo_3.jpg"
              alt=""
              className="w-full h-full object-cover object-top absolute"
              style="filter:brightness(.5); z-index:-1;"
            />
            <div
              className="w-auto h-auto flex flex-col gap-2 bg-[#ffffff16] p-8 rounded-lg text-[#efeeee]"
              style="backdrop-filter: blur(4px);"
            >
              <h1 className="font-bold text-3xl">General information</h1>
              <div></div>
              <div className="flex">
                <strong>Genre</strong>
                <p>: Detective</p>
              </div>
              <div className="flex">
                <strong>Ordinal number of story</strong>
                <p>: 8</p>
              </div>
              <div className="flex">
                <strong>Story status</strong>
                <p>: End</p>
              </div>
              <div className="flex">
                <strong>Number of seasons</strong>
                <p>: З</p>
              </div>
              <div className="flex">
                <strong>Main character</strong>
                <p>: Girl</p>
              </div>
            </div>
          </section>
          <section className="relative flex flex-col w-full h-auto">
            <img
              src="main/story_logo_4.jpg"
              alt=""
              className="w-full h-full object-cover object-top absolute"
              style="filter:brightness(.5); z-index:-1;"
            />
            <div className="text-center font-bold text-3xl text-[#efeeee] p-8 pb-0">
              Stats
            </div>
            <p className="text-justify text-[#efeeee] p-8">
              💡Logic - following this path, means under itself the
              subordination of feelings to the mind, and the guidance of "bare
              facts" in the analysis of this or that situation. The main
              character will react to what is happening and solve problems more
              intelligently and meaningfully. This path is most often chosen
              during the passage of this story.
              <br />
              <br />
              👁️ Intuition - following this path, means understanding the truth
              without relying on logical grounds. The main character will rely
              on her "sixth sense". Balance: equal accumulation of stat 💡Logic
              and 👁️ Intuition is possible, but it implies taking all paid
              choices in order to take the final choice for stat by Zx11, and
              constantly eniya. If you are limited in the game currency and do
              not want to bother with calculations, then it is better to stick
              to the accumulation of only one stat.
              <br />
              <br />
              👍Authority is a reputation stat that influences the course of
              history and the attitude of the characters to the main character.
              Businessman points - a stat that appears at the beginning of the
              2nd season and affects the restoration of the family home.
              <br />
              <br />
              😇Mercy / 👿Bitterness - a stat that will appear at the end of the
              2nd season, it will determine the worldview of the main character
              and affect the survival of the characters in the finale. 😇Mercy -
              along this path, the heroine is distinguished by benevolence and
              altruism towards others. This will contribute to the survival of
              her friends and relatives in the finale. 👿 Violence - along this
              path, the main character is rude and ruthless to those around her.
              The predominance of this path can make the finale of your story
              more tragic.
            </p>
          </section>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
}
