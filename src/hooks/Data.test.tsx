import { render, screen } from '@testing-library/react'
import Card from 'components/complex/card'
import { useDataUsers } from 'hooks/useDataUsers'



jest.mock('./Contenxts', () => {
    return {
        useDataUsers: jest.fn()
    }
})

describe("<useDataUsers />", () => {
    beforeEach(() => {
        (useDataUsers as jest.Mock).mockReturnValue([])
    })
    test("Verificar se há uma lista vazia no context do cartão", () => {
        render(<Card numberCard={0} expCard={''} cvv={0} index={0} brand={''} />)
        const cardCheck = screen.queryAllByRole('cardCheck')
        expect(cardCheck).toHaveLength(0)
    })
})