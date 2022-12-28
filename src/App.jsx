import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Robson Silveira" content="Um novo post" />
          <Post author="Robson Silveira" content="Um novo post" />
        </main>
      </div>
    </div>
  );
}

export default App;
