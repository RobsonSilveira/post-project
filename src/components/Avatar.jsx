import styles from "./Avatar.module.css";

export function Avatar({ hasBorder = false, src, ...props }) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
}
