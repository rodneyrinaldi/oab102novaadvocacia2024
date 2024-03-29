import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Whats from "../../../public/whatsapp.png";
import Sign from "../../../public/signup.png";
import Logo from "../../assets/oab-logo.png";
import Image1 from "../../assets/image1.png";
import styles from "./index.module.css";

const wapp =
  "https://api.whatsapp.com/send?phone=+5511952230742&text=Olá, gostaria de obter maiores informações sobre este evento. Aguardo um retorno. Obrigado";

const sign =
"https://www.sympla.com.br/evento/congresso-da-nova-advocacia-e-do-academico-de-direito-encontro-geral-das-comissoes-oab-santo-amaro/2237926?referrer=com.google.android.googlequicksearchbox";
  
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
      <div className={!isScrolled ? styles.booking : styles.bookingalt}>
        <Link href={sign} target="_blank" rel="noreferrer">
          <Image src={Sign} alt="" height="42" width="42" />
        </Link>
      </div>
      {/* <div className={styles.whatsapp}>
        <Link href={wapp} target="_blank" rel="noreferrer">
          <Image src={Whats} alt="" height="42" width="42" />
        </Link>
      </div> */}
      <header>
        <div className={styles.header}>
          <div>
            <Image src={Logo} alt="" height="60" width="180" />
          </div>
          <h1>Congresso Nova Advocacia</h1>
        </div>
      </header>

      <main>
        <div className={styles.blocks}>          
          <div className={styles.block1}>
            <div className={styles.img1}>            
              <Link href="https://www.sympla.com.br/evento/congresso-da-nova-advocacia-e-do-academico-de-direito-encontro-geral-das-comissoes-oab-santo-amaro/2237926?referrer=com.google.android.googlequicksearchbox">
                <Image src={Image1} alt="" width={400}  height={400} />
              </Link>
            </div>
          </div>
          <div className={styles.block2}>
            <h3>CONGRESSO</h3>
            <p>
              <Link href="/talk">
                <button>Palestras</button>
              </Link>
            </p>
            <p>
              <Link href="/speakers">
                <button>Palestrantes</button>
              </Link>
            </p>
            <p>
              <Link href="/workshops">
                <button>oficinas</button>
              </Link>
            </p>
            <p>
              <Link href="/info">
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
