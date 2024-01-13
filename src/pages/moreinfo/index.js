import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/oab-logo.png";
import styles from "./index.module.css";

export default function MoreInfo() {
  return (
    <main className={styles.container}>
      <div className={styles.row1}>
        <div>
          <Image src={Logo} alt="" height="48" width="118" />
        </div>
        <div>
          <h3>Congresso Nova Advocacia</h3>
          <h3>OAB Santo Amaro</h3>
        </div>
      </div>

      <div className={styles.row2}>
        <h4>Advogado</h4>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        </p>
        <p>
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </p>
      </div>

      <div className={styles.row3}>
        <Link href="/">
          <button>voltar</button>
        </Link>
      </div>
    </main>
  );
}
