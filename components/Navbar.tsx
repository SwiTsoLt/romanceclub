import { JSX } from "preact";
import { useEffect } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Navbar(props: JSX.HTMLAttributes<HTMLElement>) {

  return (
    <>
      <nav
        className="fixed flex p-3 bg-[#161616] w-full h-[80px]"
        style="z-index:9999; border-bottom: 2px solid #efeeee;"
      >
        <div className="logo">
          <a href="https://club-romance.ru/" target="__blank">
            <img
              src="/main/site_logo.jpg"
              className="w-[60px] h-[60px] object-cover rounded-[50%]"
              style="aspect-ratio:1/1; max-width: none;"
              alt=""
            />
          </a>
        </div>
        <div className="links w-[100%] h-full flex gap-8 justify-center items-center text-[#efeeee]">
            <a href="/">Home</a>
            <a href="/characters">Characters</a>
        </div>
      </nav>
    </>
  );
}
