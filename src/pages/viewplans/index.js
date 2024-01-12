import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/favicon.png";
import styles from "./index.module.css";

export default function ViewPlans() {
  return (
    <main className={styles.container}>
      <h3>
        <span>
          <Image src={Logo} alt="" height="56" width="56" />
        </span>{" "}
        Gestão
      </h3>

      <h4>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s.
      </h4>

      <p>
        <Link href="/">
          <button>voltar</button>
        </Link>
      </p>
    </main>
  );
}
