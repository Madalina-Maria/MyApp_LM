import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
const HomeCarousel = () => {
  return (
    <Carousel autoPlay autoFocus interval={1500}>
      <div>
        <img
          className='max-w-4xl object-cover'
          src='https://usabilitygeek.com/wp-content/uploads/2019/02/psychology-web-design-00-lead.jpg'
          alt='poza1'
        />
        <br />
        <br />
        <p className='font-mono text-2xl'>
          Îți administrezi ferma mai ușor ca niciodată cu un simplu click
        </p>
        <br />
        <br />
      </div>
      <div>
        <img
          className='max-w-4xl object-cover'
          src='https://www.sfat.eu/wp-content/uploads/2020/12/9.Submasura-6.3-1.png'
          alt='poza2'
        />
        <br />
        <br />
        <p className='font-mono text-2xl'>
          Vrei să vinzi sau să cumperi ceva în domeniul agriculturii? Le găsești
          pe toate aici
        </p>
      </div>
      <div>
        <img
          className='max-w-5xl object-cover'
          src='https://thumbs.dreamstime.com/b/la-personne-est-entre-deux-choix-29484037.jpg'
          alt='poza3'
        />
        <br />
        <br />
        <p className='font-mono text-3xl'>Nu ești convins încă? Îți oferim: </p>
      </div>
      <div>
        <img
          className='max-w-3xl object-cover'
          src='https://medijobs.ro/wp-content/uploads/2019/10/resurse-umane-blog-.png'
          alt='poza4'
        />
        <br />
        <br />
        <p className='font-mono text-2xl'>
          1. Administrare terenuri / fermă (servicii personale, resurse,
          servicii oferite oamenilor, evidență angajați, statistici)
        </p>
      </div>
      <div>
        <img
          className='max-w-2xl object-cover'
          src='https://agro-tv.ro/wp-content/uploads/2021/02/money-2724241_640.jpg'
          alt='poza5'
        />
        <br />
        <br />
        <p className='font-mono text-2xl'>
          2. Licitații (vinzi sau cumperi produse și servicii la cel mai bun
          preț, în cele mai avantajoase condiții, simplu și rapid)
        </p>
      </div>

      <div>
        <img
          className='max-w-2xl object-cover'
          src='https://guiadelempresario.com/wp-content/uploads/2021/03/Portada-de-oferta.png'
          alt='poza6'
        />
        <br />
        <br />
        <p className='font-mono text-2xl'>
          3. Oferte (găsești o gamă variată de oferte din care poți alege ce se
          potrivește nevoilor tale)
        </p>
      </div>

      <div>
        <img
          className='max-w-lg object-cover'
          src='http://retrofit.ro/wp-content/uploads/2015/05/06-300x300.jpg'
          alt='poza7'
        />
        <br />
        <br />
        <p className='font-mono text-2xl'>
          4. Cereri (cauți ceva anume? Crează o cerere pe platformă!)
        </p>
      </div>

      <div>
        <img
          className='max-w-2xl object-cover'
          src='https://ecoferma.ro/wp-content/uploads/2020/11/farming-in-hand.jpg'
          alt='poza8'
        />
        <br />
        <br />
        <p className='font-mono text-3xl'>
          Dacă nu ai un cont, dar vrei unul, apasă CREAZĂ CONT
        </p>
      </div>
      <div>
        <img
          className='max-w-3xl object-cover'
          src='https://www.revista-ferma.ro/pictures/imagini-articole/foto-1-tehnologii-agricole_b.jpg'
          alt='poza9'
        />
        <br />
        <br />
        <p className='font-mono text-3xl'>Dacă ai cont doar CONECTEAZĂ-TE</p>
      </div>
      <div>
        <img
          className='max-w-3xl object-cover'
          src='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3493447.jpg'
          alt='poza10'
        />
        <br />
        <br />
        <p className='font-mono text-3xl'>
          Nu știi ce să alegi? Noi suntem aici să te ajutăm. Apasa AJUTOR
        </p>
      </div>
    </Carousel>
  )
}

export default HomeCarousel
