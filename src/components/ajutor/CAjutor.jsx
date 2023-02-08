import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import EmailIcon from '@mui/icons-material/Email'
import InputAdornment from '@mui/material/InputAdornment'
import Button from '@mui/material/Button'

const CAjutor = () => {
  return (
    <div>
      <Box>
        <p className='font-mono text-2xl mx-20 my-5'>
          Opțiunile pe care le aveți sunt:
        </p>
        <div className='mx-28 font-mono text-lg'>
          <p className='font-bold'>CONECTARE</p>
          <div className='mx-10'>
            <p>
              Pentru a te putea conecta trebuie să ai cont pe platformă. Nu ai
              unul? Nicio problemă. Pentru a crea un cont găsești toate
              detaliile mai jos la secțiunea "CREARE CONT".
            </p>
            <p>
              Conectarea se face foarte ușor. Trebuie să apăsați butonul
              "CONECTARE", să introduceți datele cerute, în funcție de tipul de
              cont creat (fermier sau persoană fizică), iar apoi sa apasați
              butonul "INTRĂ ÎN CONT".
            </p>
          </div>
        </div>

        <div className='mx-28 my-5 font-mono text-lg'>
          <p className='font-bold'>CREARE CONT</p>
          <div className='mx-10'>
            <p>
              În momentul în care ești convins de necesitatea utilizării
              platformei te sfătuim să-ți creezi un cont. Acest lucru te ajută
              să îți păstrezi datele în siguranță pentru a-ți fi mai ușor să
              lucrezi cu ele.
            </p>
            <p>
              Tot ce trebuie să face este să apeși butonul "CREARE CONT", să
              alegi tipul de cont potrivit pentru tine (persoană fizică sau
              fermier), iar în final să-ți introduci câteva date personale care
              vor fi păstrate în siguranță. Acest lucru te ajută să te conectezi
              mult mai usor pe viitor, fără să mai fie nevoie să introduci de
              fiecare data aceste date.
            </p>
            <p>
              Odată creat contul te poți bucura de toate beneficiile platformei.
            </p>
          </div>
        </div>
        <div>
          <p className='font-mono text-2xl mx-20'>Tipurile de cont sunt:</p>
          <div className='mx-28 font-mono text-lg'>
            <p className='font-bold my-10'>FERMIER / PERSOANĂ JURIDICĂ</p>
            <div className='mx-10'>
              <p>
                In sens larg, <i>persoana juridică</i> "reprezintă" o firmă,
                institutie, asociatie, organizatie, societate comerciala.
              </p>
              <p>
                Alegeți această variantă pentru a crea un cont dacă dețineți sau
                sunteți asociat la una dintre tipurile de firme menționate mai
                jos.
              </p>
              <p>
                <i>O firmă</i> este un mod de organizare legală prin care se pot
                desfășura activități comerciale, urmate de plata unor taxe și
                impozite către stat. Cu alte cuvinte, dacă faci bani de pe urma
                unor activități pe care le desfășori în mod liber, nu ca
                angajat, trebuie neaparat să îți înființezi o firmă pentru a
                lucra legal.
              </p>
              <p className='font-bold'>
                Cele mai cunoscute tipuri de firme sunt:{' '}
              </p>
              <div className='mx-10'>
                <ul>
                  <li>PFA = Persoană fizică autorizată</li>
                  <li>II = Întreprindere individuală</li>
                  <li>IF = Întreprindere familială</li>
                  <li>SRL = Societate cu răspundere limitată</li>
                  <li>SRL-D = Societate cu răspundere limitată - debutant</li>
                  <li>SA = Societate pe acțiuni</li>
                  <li>ONG, Asociații și Fundații = oganizații non-profit</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='mx-28 font-mono text-lg'>
            <p className='font-bold my-10'>PERSOANĂ FIZICĂ</p>
            <div className='mx-10'>
              <p>
                În sens larg, <i>persoana fizică</i> este orice persoana care nu
                deține niciuna dintre tipurile de firme menționate mai sus.{' '}
              </p>
              <p>
                Alegeți această variantă de a vă crea cont dacă nu dețineti sau
                nu sunteși asociat la niciun tip de firmă mentionat mai sus.
              </p>
              <p>
                <i>Persoana fizica</i> este omul considerat in mod individual,
                ca membru al societatii, avand calitatea de subiect de drept.
                Calitatea de subiect de drept este recunoscuta si garantata
                tuturor persoanelor fizice fara nici o discriminare pe motiv de
                rasa, nationalitate, sex, religie sau grad de cultura.Persoanele
                fizice sunt oamenii, membri ai societatii, care apar in
                raporturile juridice ca entitati proprii si distincte,
                indiferent ca au calitatea de cetateni sau straini (persoane cu
                alta cetatenie sau fara cetatenie).
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <p className='font-mono text-2xl mx-20 my-10'>
            Aveți alte întrebări? Noi suntem aici să vă ajutăm!
          </p>
          <form className='flex flex-col max-w-lg mx-36'>
            <TextField
              maxWidth={400}
              type={'email'}
              variant='outlined'
              placeholder='Emailul Tău'
              autoComplete='email'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            ></TextField>
            <br />
            <TextField
              id='outlined-multiline-static'
              multiline
              rows={4}
              maxWidth={400}
              type={'text'}
              variant='outlined'
              placeholder='Mesajul'
              autoComplete='mesajul'
            ></TextField>
            <br />
          </form>
          <div className='mx-36'>
            <Button
              type='submit'
              sx={{ borderRadius: 1 }}
              variant='contained'
              color='secondary'
              fontFamily='sans-serif'
              size='large'
            >
              Trimite
            </Button>
          </div>
        </div>
      </Box>
      <br />
    </div>
  )
}

export default CAjutor
