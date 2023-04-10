import { v4 as uuidv4 } from 'uuid'
import Card from './Card'
import Carousel from './Carousel'
import './HomeCarousel.css'

const HomeCarousel = () => {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card
          imagen='https://usabilitygeek.com/wp-content/uploads/2019/02/psychology-web-design-00-lead.jpg'
          text=' Îți administrezi ferma mai ușor ca niciodată cu un simplu click'
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen='https://www.sfat.eu/wp-content/uploads/2020/12/9.Submasura-6.3-1.png'
          text=' Vrei să vinzi sau să cumperi ceva în domeniul agriculturii? Le
              găsești pe toate aici'
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen='https://thumbs.dreamstime.com/b/la-personne-est-entre-deux-choix-29484037.jpg'
          text='Nu ești convins încă? Îți oferim:'
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen='https://medijobs.ro/wp-content/uploads/2019/10/resurse-umane-blog-.png'
          text=' 1. Administrare terenuri / fermă (servicii personale, resurse,
              servicii oferite oamenilor, evidență angajați, statistici)'
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen='https://agro-tv.ro/wp-content/uploads/2021/02/money-2724241_640.jpg'
          text=' 2. Licitații (vinzi sau cumperi produse și servicii la cel mai bun
              preț, în cele mai avantajoase condiții, simplu și rapid)'
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen='https://guiadelempresario.com/wp-content/uploads/2021/03/Portada-de-oferta.png'
          text='  3. Oferte (găsești o gamă variată de oferte din care poți alege ce
              se potrivește nevoilor tale)'
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen='https://www.primaria-lumina.ro/wp-content/uploads/2021/01/10-free-online-form-builders-to-collect-submissions-1-1024x743.jpg'
          text=' 4. Cereri (cauți ceva anume? Crează o cerere pe platformă!)'
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen='https://ecoferma.ro/wp-content/uploads/2020/11/farming-in-hand.jpg'
          text=' Dacă nu ai un cont, dar vrei unul, apasă CREAZĂ CONT'
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen='https://www.revista-ferma.ro/pictures/imagini-articole/foto-1-tehnologii-agricole_b.jpg'
          text='Dacă ai cont doar CONECTEAZĂ-TE'
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3493447.jpg'
          text='Nu știi ce să alegi? Noi suntem aici să te ajutăm. Apasa AJUTOR'
        />
      ),
    },
  ]

  return (
    <div className='App'>
      <Carousel
        cards={cards}
        height='500px'
        width='100%'
        margin='0 auto'
        offset={2}
        showArrows={false}
      />
    </div>
  )
}
export default HomeCarousel
