import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/oab-logo.png";
import Panel1 from "../../assets/panel1.jpeg";
import Panel2 from "../../assets/panel2.jpeg";
import Panel3 from "../../assets/panel3.jpeg";
import Panel4 from "../../assets/panel4.jpeg";
import Panel5 from "../../assets/panel5.jpeg";
import Panel6 from "../../assets/panel6.jpeg";
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
        <Image src={Panel1} alt="" height="540" width="540" />
        <Image src={Panel2} alt="" height="540" width="540" />
        <Image src={Panel3} alt="" height="540" width="540" />
        <Image src={Panel4} alt="" height="540" width="540" />
        <Image src={Panel5} alt="" height="540" width="540" />
        <Image src={Panel6} alt="" height="540" width="540" />
      </div>

      <div className={styles.row3}>
        <Link href="/">
          <button>voltar</button>
        </Link>
      </div>
    </main>
  );
}
