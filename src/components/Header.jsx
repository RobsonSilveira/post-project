import styles from "./Header.module.css";
import IgniteLogo from "../Assets/ignite-logo.svg";
export function Header() {
  return (
    <header className={styles.header}>
      <img src={IgniteLogo} alt="Ignite logo" />
      <strong>Ignite Feed</strong>
    </header>
  );
}
