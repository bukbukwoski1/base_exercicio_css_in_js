import styled from 'styled-components'

export const ContainerVaga = styled.div`
  border: 1px solid var(--cor-principal);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;
`
export const TituloVaga = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const LinkVaga = styled.a`
  border-color: var(--cor-secundaria);
  backgorund-color: var(--cor-principal);
  color: var(--cor-principal);
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    background-color: var(--cor-principal);
    color: var(--cor-secundaria);
  }
`
