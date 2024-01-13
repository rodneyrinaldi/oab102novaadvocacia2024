import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/oab-logo.png";
import styles from "./index.module.css";

export default function Info() {
  return (
    <main className={styles.container}>
      <div className={styles.row1}>
        <div>
            <Image src={Logo} alt="" width="180" height="60" />
        </div>
        <div>
          <h3>Congresso Nova Advocacia</h3>
          <h4>OAB Santo Amaro</h4>
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
