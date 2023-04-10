import React from 'react'
import { styled } from '@mui/material/styles'
import { Container, Grid, IconButton, Typography } from '@mui/material'
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  GitHub,
} from '@mui/icons-material'
import { FaGoogle } from 'react-icons/fa'

const PageContainer = styled('div')({})

const Root = styled('div')({
  backgroundColor: '#f1f1f1',
})

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: 'transparent',
  border: 'none',
  boxShadow: 'none',
  margin: '0 6px',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
  },
}))

const SocialIcon = styled('span')(({ theme }) => ({
  fontSize: '28px',
  color: theme.palette.text.primary,
}))

const CopyRight = styled(Typography)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  color: theme.palette.text.primary,
  padding: '16px 0',
}))
export default function FooterHome() {
  return (
    <div className='navbar'>
      <PageContainer>
        <Root>
          <Container maxWidth='lg'>
            <Grid container justifyContent='center' spacing={2}>
              <Grid item>
                <SocialIconButton href='#'>
                  <Facebook>
                    <SocialIcon>
                      <Facebook />
                    </SocialIcon>
                  </Facebook>
                </SocialIconButton>
              </Grid>
              <Grid item>
                <SocialIconButton href='#'>
                  <Twitter>
                    <SocialIcon>
                      <Twitter />
                    </SocialIcon>
                  </Twitter>
                </SocialIconButton>
              </Grid>
              <Grid item>
                <SocialIconButton href='#'>
                  <FaGoogle>
                    <SocialIcon>
                      <FaGoogle />
                    </SocialIcon>
                  </FaGoogle>
                </SocialIconButton>
              </Grid>
              <Grid item>
                <SocialIconButton href='#'>
                  <Instagram>
                    <SocialIcon>
                      <Instagram />
                    </SocialIcon>
                  </Instagram>
                </SocialIconButton>
              </Grid>
              <Grid item>
                <SocialIconButton href='#'>
                  <LinkedIn>
                    <SocialIcon>
                      <LinkedIn />
                    </SocialIcon>
                  </LinkedIn>
                </SocialIconButton>
              </Grid>
              <Grid item>
                <SocialIconButton href='#'>
                  <GitHub>
                    <SocialIcon>
                      <GitHub />
                    </SocialIcon>
                  </GitHub>
                </SocialIconButton>
              </Grid>
            </Grid>
          </Container>
          <CopyRight variant='body2' align='center'>
            © {new Date().getFullYear()} MyWebsite.com
          </CopyRight>
        </Root>
      </PageContainer>
    </div>
  )
}
