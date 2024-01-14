import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/oab-logo.png";
import Speakers from "../../assets/speakers.png";
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
        <h4>PALESTRANTES</h4>
        {/* <Image src={Speakers} alt="" height="3549" width="2292" /> */}
        {/* <Image src={Speakers} alt="" height="993" width="641" /> */}
        <Image src={Speakers} alt="" height="496" width="320" />
      </div>

      <div className={styles.row3}>
        <Link href="/">
          <button>voltar</button>
        </Link>
      </div>
    </main>
  );
}
