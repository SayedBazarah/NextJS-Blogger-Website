//
import Image from "next/image";

//CSS File
import Style from "./hero.module.css";

function Hero() {
  return (
    <section className={Style.hero}>
      <div className={Style.image}>
        <Image
          src="/images/static/avatar.png"
          alt="Sayed Baiomy Avatar"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Sayed Baiomy</h1>
      <p>
        I am a top 10 web technology who run +10 companies that generate 7
        figure revenue
      </p>
    </section>
  );
}

export default Hero;
