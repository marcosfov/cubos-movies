'use client'
import { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'

import StyledComponentsRegistry from '@/lib/registry'
import theme from '@/styles/theme'

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </StyledComponentsRegistry>
    </>
  )
}

export default Providers
