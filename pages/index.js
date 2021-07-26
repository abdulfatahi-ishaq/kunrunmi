import Head from "next/head";
import Image from "next/image";
import { Fireworks } from "fireworks-js/dist/react";

export default function Home() {
  const options = {
    speed: 5,
  };
  const style = {
    left: 0,
    top: 0,
    width: "100vw",
    height: "100vh",
    position: "relative",
  };
  return (
    <div>
      <Head>
        <title>Oladapo Kunrunmi</title>
        <meta name="description" content="Oladapo Kunrunmi Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Fireworks options={options} style={style}>
        <main>
          <Image src="/images/dapo1.jpeg" alt="Image" width={250} height={250}/>
          <h2>Happy Birthday</h2>
          <h1>Mr. Oladapo Kunrunmi</h1>
          <h2>Wishing you many happy returns </h2>
        </main>
      </Fireworks>
    </div>
  );
}