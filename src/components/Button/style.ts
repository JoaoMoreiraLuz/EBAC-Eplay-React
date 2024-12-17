import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Cores } from '../../styles'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  background-color: ${(props) =>
    props.variant === 'primary' ? Cores.verde : 'transparent'};
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? Cores.verde : Cores.branca)};
  color: ${Cores.branca};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
`

export const ButtonLink = styled(Link)`
  background-color: transparent;
  border: 2px solid ${Cores.branca};
  color: ${Cores.branca};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
`
