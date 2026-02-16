// Importa os estilos CSS específicos do componente Header
import styles from './Header.module.css';

// Importa a imagem do logo que está na pasta assets
import igniteLogo from '../assets/ignite-logo.svg';

// Define e exporta o componente funcional Header
export function Header() {
  return (
    // Elemento semântico <header> com a classe de estilo aplicada
    <header className={styles.header}>
      
      {/* Exibe a imagem do logo */}
      {/* "src" recebe o arquivo importado e "alt" descreve a imagem para acessibilidade */}
      <img src={igniteLogo} alt="Logotipo do Ignite" />
      
    </header>
  );
}
