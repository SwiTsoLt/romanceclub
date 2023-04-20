import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div>
        <img src="main/main_bg.jpg" alt="" class="w-auto h-screen object-cover" />
      </div>
    </>
  );
}
