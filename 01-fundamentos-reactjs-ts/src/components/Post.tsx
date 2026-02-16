// Funções para formatar datas
import { format, formatDistanceToNow } from 'date-fns';
// Localização em português
import { ptBR } from 'date-fns/locale';

// Tipos de eventos do React + useState
import { type ChangeEvent, type FormEvent, type InvalidEvent, useState } from 'react';

// Componentes filhos
import { Avatar } from './Avatar';
import { Comment } from './Comment';

// Estilos CSS module
import styles from './Post.module.css';


// ===== Tipagens =====

// Autor do post
interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

// Conteúdo do post (parágrafo ou link)
interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

// Estrutura completa do Post
export interface PostType {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

// Props recebidas pelo componente
interface PostProps {
  post: PostType;
}


// ===== Componente =====
export function Post({ post }: PostProps) {

  // Lista de comentários (estado)
  const [comments, setComments] = useState([
    'Post muito bacana, hein?!'
  ]);

  // Texto do novo comentário
  const [newCommentText, setNewCommentText] = useState('');


  // Data formatada completa
  const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  // Tempo relativo (ex: "há 2 horas")
  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true
  });


  // ===== Criar comentário =====
  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault(); // evita reload da página

    setComments([...comments, newCommentText]); // adiciona comentário
    setNewCommentText(''); // limpa textarea
  }


  // Atualiza texto digitado
  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity(''); // limpa erro
    setNewCommentText(event.target.value);
  }

  // Mensagem de erro se estiver vazio
  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.currentTarget.setCustomValidity('Esse campo é obrigatório!');
  }


  // ===== Deletar comentário =====
  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeletedOne);
  }


  // Verifica se textarea está vazio
  const isNewCommentEmpty = newCommentText.length === 0;


  // ===== Render =====
  return (
    <article className={styles.post}>

      {/* Cabeçalho do post */}
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        {/* Data do post */}
        <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>


      {/* Conteúdo do post */}
      <div className={styles.content}>
        {post.content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>;
          }
        })}
      </div>


      {/* Formulário de comentário */}
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>


      {/* Lista de comentários */}
      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
