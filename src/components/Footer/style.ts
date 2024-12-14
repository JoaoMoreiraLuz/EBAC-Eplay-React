import styled from 'styled-components'
import { Cores } from '../../styles'

export const ContainerFooter = styled.footer`
  background-color: ${Cores.cinza};
  padding: 32px 0;
  font-size: 14px;
`

export const SectionTitle = styled.h4`
  color: ${Cores.branca};
  font-size: 16px;
  font-weight: bold;
`

export const LinksList = styled.ul`
  display: flex;
  margin-top: 16px;
`

export const Link = styled.a`
  background-color: ${Cores.cinza};
  color: ${Cores.cinzaClaro};
  margin-right: 8px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`
