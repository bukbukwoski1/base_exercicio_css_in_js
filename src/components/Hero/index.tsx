// import styles from './Hero.module.css'
import { FormularioHero, FormDiv, HeroTitulo } from './styled'

const Hero = () => (
  <FormularioHero>
    <FormDiv className="container">
      <HeroTitulo>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitulo>
    </FormDiv>
  </FormularioHero>
)

export default Hero
