import styled from 'styled-components'
import { Card } from '../Product/style'
import { Cores } from '../../styles'
import { Props } from '.'

export const ProductsContainer = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? Cores.preta : Cores.cinza};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? Cores.cinza : Cores.preta};
  }

  p {
    font-size: 14px;
    line-height: 22px;
    max-width: 640px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`