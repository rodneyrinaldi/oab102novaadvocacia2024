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
            <Image src={Logo} alt="" height="52" width="52" />
          </h1>
          <h1>AUTORIZAÇÃO ONLINE</h1>
        </div>
      </header>

      <main>
        <div className={styles.blocks}>
          <div>
            <Image src={Image1} alt="" />
          </div>

          <div className={styles.block3}>
            <h3>Praticidade</h3>
            <h4>atendimento, assinatura e pagamento online.</h4>
            <p>
              <Link href="/moreinfo">
                <button>mais informações</button>
              </Link>
            </p>
          </div>

          <div>
            <Image src={Image2} alt="" />
          </div>

          <div className={styles.block2}>
            <h3>Segurança</h3>
            <h4>Docs assinados na núvem com biometria.</h4>
            <p>
              <Link href="/textme">
                <button>mais informações</button>
              </Link>
            </p>
          </div>

          <div>
            <Image src={Image3} alt="" />
          </div>
          <div className={styles.block1}>
            <h3>Economia</h3>
            <h4>Sem limitações de atendimentos.</h4>
            <p>
              <Link href="/viewplans">
                <button>mais informações</button>
              </Link>
            </p>
          </div>

          <div>
            <Image src={Image4} alt="" />
          </div>
          <div className={styles.block2}>
            <h3>Atuação</h3>
            <h4>Configurável para múltiplas áreas.</h4>
            <p>
              <Link href="/textme">
                <button>mais informações</button>
              </Link>
            </p>
          </div>

          <div>
            <Image src={Image5} alt="" />
          </div>
          <div className={styles.block3}>
            <h3>Planos</h3>
            <h4>Iindividuais, escritórios e empresarial.</h4>
            <p>
              <Link href="/moreinfo">
                <button>mais informações</button>
              </Link>
            </p>
          </div>

          <div>
            <Image src={Image6} alt="" />
          </div>
          <div className={styles.block1}>
            <h3>Gestão</h3>
            <h4>De autorizações, pagamentos e clientes.</h4>
            <p>
              <Link href="/viewplans">
                <button>mais informações</button>
              </Link>
            </p>
          </div>
        </div>
      </main>

      <footer>
        <div className={styles.footer}>
          <div>
            <a>autorizacao.adv.br</a>
          </div>
          <div>
            <a>dev.rodneyrinaldi.com</a>
          </div>
          <div>
            <a>adv.rodneyrinaldi.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
