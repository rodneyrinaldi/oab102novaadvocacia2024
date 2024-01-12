import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../../../public/favicon.png";
import Whats from "../../../public/whatsapp.png";
import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";
import Image4 from "../../assets/image4.png";
import Image5 from "../../assets/image5.png";
import Image6 from "../../assets/image6.png";
import styles from "./index.module.css";

const wapp =
  "https://api.whatsapp.com/send?phone=+551131646843&text=Olá, gostaria de obter maiores informações sobre esta solução. Aguardo um retorno. Obrigado";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  const listenScrollEvent = (e) => {
    if (window.scrollY > 140) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <div className={styles.container}>
      <div className={!isScrolled ? styles.whatsapp : styles.whatsappalt}>
        <Link href={wapp} target="_blank" rel="noreferrer">
          <Image src={Whats} alt="" height="42" width="42" />
        </Link>
      </div>
      {/* <div className={styles.whatsapp}>
        <Link href={wapp} target="_blank" rel="noreferrer">
          <Image src={Whats} alt="" height="42" width="42" />
        </Link>
      </div> */}
      <header>
        <div className={styles.header}>
          <h1>
          </h1>
          <h1>Nova Advocacia</h1>
        </div>
      </header>

      <main>
        <div className={styles.blocks}>
          <div className={styles.block3}>
          </div>
          <div className={styles.block2}>
          </div>
          <div className={styles.block1}>
          </div>
          <div className={styles.block2}>
          </div>
          <div className={styles.block3}>
          </div>
          <div className={styles.block1}>
          </div>
        </div>
      </main>

      <footer>
        <div className={styles.footer}>
          <div>
            <a>aaaa.aaa.br</a>
          </div>
          <div>
            <a>bbbb.bbb.com</a>
          </div>
          <div>
            <a>cc.ccccc.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
