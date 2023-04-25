import { Head } from "$fresh/runtime.ts";
import { Footer } from "../components/Footer.tsx";
import { Navbar } from "../components/Navbar.tsx";

export default function Characters() {
  return (
    <>
      <Head>
        <title>Romance club</title>
      </Head>
      <Navbar></Navbar>
      <main className="pt-[80px] text-[#efeeee]">
        <section className="w-full h-auto min-h-[100vh] bg-[#161616]">
          <img
            src="main/characters/alex.jpg"
            alt=""
            className="w-full h-auto object-cover"
          />
          <div className="flex flex-col gap-8 p-8 text-justify">
            <p>
              <strong>Alekkandp Hilsen</strong> - the most charming and
              memorable pepconage stories "I'm Haunting You". He was one of the
              five favorites, pretending to the chain of the chief gepoine
              Agatha.
            </p>
            <h2 className="font-bold text-xl">Biography and character</h2>
            <p>
              It may seem to you that Alexander is a harmful, full of
              capriciousness and arrogance young man, but this is far from the
              case. In the process of history, the character will be revealed.
              We can recognize him from a completely different side. Alexander
              is a very gentle and sensitive nature, which is not devoid of a
              sense of justice and compassion, but he carefully hides this
              behind the mask of an ironic person. The halo of his virtue
              extends only to people close to his heart. Enter the circle of
              trust: Agatha (regardless of love or friendship between the
              couple), Sam and faithful childhood friend Rachel.
              <br />
              <br />
              Alexander appears before us in the form of an amateur detective, a
              man from childhood wanted to imitate his father, was going to
              become a policeman, but because of an accident, to which we will
              return, from childhood dreams. Despite this, Alexander continued
              to develop himself in this direction, love for logical riddles and
              highly intelligent conversations is proof of this. On this soil,
              Alexander had a rapprochement with the main character Agatha. The
              man could not pass by the mysterious murder of Aunt Annette, and
              took a direct part in the investigation of the criminal case.
              <br />
              <br />
              Alexander is engaged in the business of creating and selling
              yachts, the young man has his own shipyard, which is located in
              Sweden. There is also his home, in which his mother lives - Olivia
              Nielsen. When Alexander was little, his father Ulrik Nielsen died
              tragically. He participated in a special operation to capture
              especially dangerous criminals, when little Alexander followed
              him. The child brought paperation. At the most dangerous moment,
              Ulrik will close his son with his body, and he will die from
              multiple gunshot wounds. The boy's body will be decorated with a
              scar from a knife wound received on that very day.
              <br />
              <br />
              Alexander endowed his beloved Agatha with the gentle nickname
              Lilla Katten, which means kitten. He furiously tries to protect
              the girl from the constant troubles that just rain down on the
              head of the main character. When buying love scenes with
              Alexander, we learn about the addiction of a young man to BDSM
              attributes, which he actively uses.
            </p>
            <h2 className="font-bold text-xl">Appearance</h2>
            <p>
              Alexander has dark brown hair, thick brown eyebrows, bright blue
              eyes. You can clearly see the scar inflicted by a knife in
              childhood. In everyday life, he wears a gray unbuttoned shirt with
              a white T-shirt underneath and black trousers. It is possible to
              change the outfit to "Stylish", including a coat, scarf and
              trousers; and on “Hot”, which consists of a white shirt, a blue
              tie, trousers, a gray vest with buttons and a blue one with a
              chain. Changes skins by default, including a black shirt with a
              wingfight icon.
            </p>
          </div>
        </section>
        <section className="w-full h-auto min-h-[100vh] bg-[#161616]">
          <img
            src="main/characters/makoto.jpg"
            alt=""
            className="w-full h-auto object-cover"
          />
          <div className="flex flex-col gap-8 p-8 text-justify">
            <p>
              <strong>Samuel Makoto</strong> (real name Setsuo Makoto (Japanese:
              節男真琴) or simply Sam) is the main character of the story "I'm
              Haunting You", the secondary "Heaven's Secret". Assistant
              detective Goodman and a possible favorite of the main character.
            </p>
            <h2 className="font-bold text-xl">Biography and character</h2>
            <p>
              Samuel had previously been a street racer and even understood that
              it was illegal. But one case, when he participated in a
              competition and knocked down a child, made the guy leave it. At
              the moment, he is an assistant to detective Goodman and is
              investigating the case with the murder of Annette, but in 1x0Z it
              is recognized that he does not suspect the main character. Once in
              America for the first time, Sam got into a terrible mess because
              of three cars, twelve bottles of Molotov cocktail, two students
              and one elephant. His family still does not know that he spent the
              first three days after arriving in America in the cell.
            </p>
            <h2 className="font-bold text-xl">Appearance</h2>
            <p>
              Samuel has dark hair, brown eyes. As a rule, he wears a police
              uniform: a white shirt with a tie and blue trousers. There is an
              earring in the right ear.
            </p>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
