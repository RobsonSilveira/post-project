import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/RobsonSilveira.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Robson Silveira</strong>
              <time title="08 de Agosto às 15h" dateTime="2022-08-09">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom cara, parabéns!!!!!!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={24} />
            Aplaudir<span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
