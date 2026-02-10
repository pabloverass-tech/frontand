import { Header } from "./components/Header"
import { Post}  from "./Post"

import styles from './App.module.css'

import './global.css'

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}></div> 
        <aside>
          sidebar
        </aside>
        <main>
           <Post
          autor="Pablo Veras"
          content="Lorem psum dolor sit amet consectetur adipisicing elit. Odio, dicta quod. Cum dignissimos quia quibusdam natus, non neque blanditiis ea, adipisci error consectetur consequuntur asperiores et eum modi. Aperiam, dolor."
          />
          <Post
            autor="Pablo Veras 2"
            content="2 Lorem psum dolor sit amet consectetur adipisicing elit. Odio, dicta quod. Cum dignissimos quia quibusdam natus, non neque blanditiis ea, adipisci error consectetur consequuntur asperiores et eum modi. Aperiam, dolor."
          />

        </main>
    </div>
  )
}

export default App

