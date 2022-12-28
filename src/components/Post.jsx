import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/RobsonSilveira.png" hasBorder />
          <div className={styles.authorInfo}>
            <strong>Robson Silveira</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="8 de agosto as 10:30h" dateTime="2022-08-08">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Bom dia galera!</p>
        <p>Muito foco no trabalho e nos estudos, o futuro é logo ali...</p>

        <p>
          <span>Confere lá</span>
          <br />
          <a
            href="https://www.linkedin.com/in/robson-silveira-42328974/"
            target="blank"
          >
            #meu#linkedin
          </a>
          <br />
          <a href="https://github.com/RobsonSilveira" target="blank">
            #meu#github
          </a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
