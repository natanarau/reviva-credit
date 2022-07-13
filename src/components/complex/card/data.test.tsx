import { render, screen } from '@testing-library/react';
import Card from './index';
import { useDataUsers } from '../../../hooks/useDataUsers';

jest.mock('../../../hooks/useDataUsers', () => {
    return {
        useDataUsers: jest.fn()
    }
})

describe("<useDataUsers />", () => {
    beforeEach(() => {
        (useDataUsers as jest.Mock).mockReturnValue([])
    })
    test("Verificar se há uma lista vazia no hook dataUsers", () => {
        render(<Card numberCard={0} expCard={''} cvv={0} index={0} brand={''} />)
        const ProductCart = screen.queryAllByRole('ProductCart')
        expect(ProductCart).toHaveLength(0)
    })
})