import {
  ContainerFooter,
  FooterSection,
  LinksList,
  SectionTitle,
  Link
} from './style'

const CurrentYear = new Date().getFullYear()

const Footer = () => (
  <ContainerFooter>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <LinksList>
          <li>
            <Link>RPG</Link>
          </li>
          <li>
            <Link>FPS</Link>
          </li>
          <li>
            <Link>Ação</Link>
          </li>
          <li>
            <Link>Aventura</Link>
          </li>
          <li>
            <Link>Estratégia</Link>
          </li>
          <li>
            <Link>Simulação</Link>
          </li>
          <li>
            <Link>Esportes</Link>
          </li>
        </LinksList>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso Rapido</SectionTitle>
        <LinksList>
          <li>
            <Link>Novidades</Link>
          </li>
          <li>
            <Link>Promoções</Link>
          </li>
          <li>
            <Link>Em Breve</Link>
          </li>
        </LinksList>
      </FooterSection>
      <p>{CurrentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </ContainerFooter>
)

export default Footer
