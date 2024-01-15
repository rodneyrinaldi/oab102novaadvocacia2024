import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/oab-logo.png";
import Workshops from "../../assets/workshops.jpg";
import styles from "./index.module.css";

export default function Workshoop() {
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
        <h4>OFICINAS</h4>
        {/* <Image src={Workshops} alt="" height="1080" width="1080" /> */}
        {/* <Image src={Workshops} alt="" height="540" width="540" /> */}
        <Image src={Workshops} alt="" height="320" width="320" />
      </div>

      <div className={styles.row3}>
        <Link href="/">
          <button>voltar</button>
        </Link>
      </div>
    </main>
  );
}
