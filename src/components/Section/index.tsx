import { ProductsContainer, Title } from './style'

export type Props = {
  title: string
  background: 'black' | 'gray'
  children: JSX.Element
}

const Section = ({ title, background, children }: Props) => (
  <ProductsContainer background={background}>
    <div className="container">
      <Title>{title}</Title>
      {children}
    </div>
  </ProductsContainer>
)

export default Section