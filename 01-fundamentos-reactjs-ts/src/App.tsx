// Importa os componentes que serão usados na tela principal
import { Header } from './components/Header';
import { Post, type PostType } from './components/Post'
import { Sidebar } from './components/Sidebar';

// Importa os estilos CSS do layout da aplicação
import styles from './App.module.css';

// Importa estilos globais do projeto
import './global.css';

// Lista de posts que serão exibidos na tela
// O tipo PostType garante a estrutura correta de cada post
const posts: PostType[] = [
  {
    id: 1, // Identificador único do post
    author: {
      avatarUrl: 'https://github.com/diego3g.png', // Foto do autor
      name: 'Diego Fernandes', // Nome do autor
      role: 'CTO @Rocketseat' // Cargo do autor
    },
    content: [
      // Conteúdo do post dividido por tipo
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    // Data de publicação do post
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
];

// Componente principal da aplicação
export function App() {
  return (
    <div>
      {/* Cabeçalho da aplicação */}
      <Header />

      {/* Container principal com estilos */}
      <div className={styles.wrapper}>
        
        {/* Barra lateral */}
        <Sidebar />

        {/* Área principal onde ficam os posts */}
        <main>
          {/* Percorre a lista de posts e renderiza um componente Post para cada item */}
          {posts.map(post => {
            return (
              <Post
                key={post.id} // Chave única para o React identificar cada item
                post={post}   // Envia os dados do post como propriedade
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
