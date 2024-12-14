import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import POE2 from '../../assets/images/POE2.jpg'
import Kingdom from '../../assets/images/Kingdom.jpg'
import Persona from '../../assets/images/P5R.jpg'
import Ultrakill from '../../assets/images/Ultrakill.jpg'
import resident from '../../assets/images/resident.png'
import Diablo from '../../assets/images/diablo.png'
import StarWars from '../../assets/images/star_wars.png'
import Zelda from '../../assets/images/zelda.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'ARPG',
    description:
      'O Path of Exile 2 é um RPG de Ação da nova geração criado pela Grinding Gear Games. Ele se passa anos após o Path of Exile original, você retornará ao mundo de Wraeclast para tentar dar um fim à corrupção que está se espalhando.',
    title: 'Path Of Exile II',
    system: 'Windows',
    infos: ['10%', 'R$ 80,50'],
    image: POE2
  },
  {
    id: 2,
    category: 'Tower Defense',
    description:
      'Viaje, explore e reconstrua o seu reino nas ilhas misteriosas e tranquilas deste jogo de microestratégia atmosférico. Recolha moedas para desbloquear novas tecnologias ou construir suas defesas. Noite após noite, a sós ou com amigos, enfrente ondas de monstros da Ganância.',
    title: 'Kingdom Two Crowns',
    system: 'Windows',
    infos: ['75%', 'R$ 14,99'],
    image: Kingdom
  },
  {
    id: 3,
    category: 'RPG',
    description:
      'Vista a máscara, junte-se aos Phantom Thieves of Hearts, arme grandes assaltos, infiltre-se nas mentes dos corruptos e faça eles mudarem de atitude!',
    title: 'Persona 5 Royal ',
    system: 'Windows',
    infos: ['10%', 'R$ 249,90'],
    image: Persona
  },
  {
    id: 4,
    category: 'FPS',
    description:
      'ULTRAKILL is a fast-paced ultraviolent retro FPS combining the skill-based style scoring from character action games with unadulterated carnage inspired by the best shooters of the 90s. Rip apart your foes with varied destructive weapons and shower in their blood to regain your health.',
    title: 'Ultrakill',
    system: 'Windows',
    infos: ['10%', 'R$ 73,99'],
    image: Ultrakill
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Survival Horror',
    description:
      'Sobrevivência é apenas o começo. Seis anos se passaram desde o desastre biológico em Raccoon City. Leon S. Kennedy, um dos sobreviventes, segue o rastro da raptada filha do presidente até uma vila europeia isolada, onde há algo terrivelmente errado com os habitantes.',
    title: 'Resident Evil 4',
    system: 'PS5',
    infos: ['13/12'],
    image: resident
  },
  {
    id: 6,
    category: 'ARPG',
    description:
      'Junte-se à luta por Santuário no Diablo® IV, a aventura suprema de RPG de ação. Vivencie a campanha aclamada pela crítica e os novos conteúdos de temporada.',
    title: 'Diablo® IV',
    system: 'Linux',
    infos: ['16/12'],
    image: Diablo
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'Esqueça tudo que você sabe sobre os jogos da série The Legend of Zelda. Entre em um mundo de descobertas, exploração e aventura em The Legend of Zelda: Breath of the Wild, o novo jogo da famosa série que veio para romper barreiras. ',
    title: 'The Legend of Zelda™: Breath of the Wild',
    system: 'Nintendo Switch',
    infos: ['20/12'],
    image: Zelda
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'A história de Cal Kestis continua em STAR WARS Jedi: Survivor™, uma aventura em terceira pessoa na galáxia.',
    title: 'STAR WARS Jedi: Survivor™',
    system: 'Windows',
    infos: ['30/12'],
    image: StarWars
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
