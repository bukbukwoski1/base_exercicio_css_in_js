import styled from 'styled-components'

export const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;

  @media (max-width: 768px) {
    display: block;
  }
`

export const Campo = styled.input`
  padding: 0 16px;
  outline-color: var(--cor-principal);

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    border-radius: 8px;
    padding: 15px;
  }
`

export const BotaoPesquisa = styled.button`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;

  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    margin-top: 16px;
    border-radius: 8px;
    display: block;
  }
`
