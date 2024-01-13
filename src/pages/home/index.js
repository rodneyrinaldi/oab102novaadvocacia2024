import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Whats from "../../../public/whatsapp.png";
import Logo from "../../assets/oab-logo.png";
import Image1 from "../../assets/image1.png";
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
            <Image src={Logo} alt="" height="48" width="118" />
          </h1>
          <h1>Congresso Nova Advocacia</h1>
        </div>
      </header>

      <main>
        <div className={styles.blocks}>          
          <div className={styles.block1}>
            <div>             
              <Link href="https://www.sympla.com.br/evento/congresso-da-nova-advocacia-e-do-academico-de-direito-encontro-geral-das-comissoes-oab-santo-amaro/2237926?referrer=com.google.android.googlequicksearchbox">
                <Image src={Image1} alt="" width={450}  height={450} />
              </Link>
            </div>
          </div>
          <div className={styles.block2}>
            <h3>CONGRESSO</h3>
            <p>
              <Link href="/moreinfo">
                <button>Palestras</button>
              </Link>
            </p>
            <p>
              <Link href="/moreinfo">
                <button>Oficinas</button>
              </Link>
            </p>
            <p>
              <Link href="/moreinfo">
                <button>unidades móveis</button>
              </Link>
            </p>
            <p>
              <Link href="/moreinfo">
                <button>mais informações</button>
              </Link>
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>  
        <div>    
          <a>https://www.oab-stoamaro.com.br/</a>
        </div>
        <div>
          <a>https://www.aasp.org.br/</a>
        </div>
        <div>
          <a>https://italo.com.br/</a>
        </div>
      </footer>
    </div>
  );
}
