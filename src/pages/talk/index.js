import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/oab-logo.png";
import Agenda from "../../assets/cronograma.png";
import styles from "./index.module.css";

export default function Talk() {
  return (
    <main className={styles.container}>
      <div className={styles.row1}>
        <div>
            <Image src={Logo} alt="" height="60" width="180" />
        </div>
        <div>
          <h3>Congresso Nova Advocacia</h3>
          <h4>OAB Santo Amaro</h4>
        </div>
      </div>

      <div className={styles.row2}>
        <h4>PALESTRAS</h4>
        <div className={styles.agenda1}><Image src={Agenda} alt="" height="446" width="330" /></div>
        <div className={styles.agenda2}><Image src={Agenda} alt="" height="893" width="660" /></div>
      </div>

      <div className={styles.row3}>
        <Link href="/">
          <button>voltar</button>
        </Link>
      </div>
    </main>
  );
}
