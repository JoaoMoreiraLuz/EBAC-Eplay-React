import { useState } from 'react'
import { GalleryItem } from '../../Pages/Home'
import Section from '../Section'

import Zoom from '../../assets/images/zoom.png'
import Play from '../../assets/images/play.png'
import Fechar from '../../assets/images/fechar.png'
import { Action, Item, Itens, Modal, ModalContent } from './style'

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })
  const [modalClicked, setModalClicked] = useState(false)
  const [modalUrl, setModalUrl] = useState('')

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return Zoom
    return Play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Itens>
          {items.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
                setModalClicked(true)
                setModalUrl(media.url)
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximar a mídia"
                />
              </Action>
            </Item>
          ))}
        </Itens>
      </Section>
      <Modal className={modal.isVisible ? 'visible' : ' '}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={Fechar}
              alt="Fechar"
              onClick={() => {
                closeModal()
              }}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt="" />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </ModalContent>
        <div onClick={() => closeModal()} className="overlay"></div>
      </Modal>
    </>
  )
}
export default Gallery
