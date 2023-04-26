import { Footer } from "../components/Footer.tsx";
import { Navbar } from "../components/Navbar.tsx";


export default function Stats() {
    return (
        <>
            <Navbar></Navbar>
            <main className="relative flex flex-col w-full h-auto">
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
            </main>
            <Footer></Footer>
        </>
    )