import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import HomePage from '../app/page'
import { Children } from 'react'

vi.mock('@clerk/next/js', () => {
    return {
        auth: () => new Promise((resolve) => resolve({ 
            userId: 'user_2NNEqL2nhuh94ndJqAHwEfxC' })
        ),
            ClerkProvider: ({ children }) => <div>{children}</div>,
            useUser: () => ({
                isSignedIn: true,
                user: {
                  id: 'user_2NNEqL2nrIRdJ194ndJqAHwEfxC',
                  fullName: 'Charles Harris',
                },
              }),     
          }
        })
        
        
    

    test(`Home`, async () => {
        render(await HomePage())
        expect(screen.getByText("get started")).toBeTruthy()
    })