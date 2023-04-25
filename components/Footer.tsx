import { JSX } from "preact";

export function Footer(props: JSX.HTMLAttributes<HTMLElement>) {
  return (
    <footer className="w-full h-auto bg-[#161616] text-[#efeeee] p-8" style="border-top: 2px solid #efeeee;">
      <p className="w-full h-auto flex gap-4">
        <span>2K9392</span>
        <span>UO BSUIR branch "MRK" Minsk</span>
      </p>
      <p className="flex gap-4">
      <strong>By</strong>
        <a
          href="https://github.com/SwiTsoLt"
          target="__blank"
          style="border-bottom: 2px dotted deepskyblue;"
        >
          Smirnov S.A.
        </a>
      </p>
    </footer>
  );
}
