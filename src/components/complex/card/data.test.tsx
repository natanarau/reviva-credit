import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import Card from './index';
import { useDataUsers } from '../../../hooks/useDataUsers';
import card  from './index';

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
        const listUser = screen.queryAllByRole('listUser')
        expect(listUser).toHaveLength(0)
    });

    test("Verificar se há uma lista vazia no hook dataUsers", () => {
        render(<Card numberCard={0} expCard={''} cvv={0} index={0} brand={''} />)
        
        const req = {
            body: JSON.stringify({
                
                listUser: [
                    {
                        id: "9364ca9a-a941-46e3-abae-e8f3870ebc5f",
                        name: "Leonel"
                    },
                    {
                        id: "cdd9ce2b-1b1e-4d78-8ce4-9a4380c76e22",
                        name: "Genival"
                    }
                ]
            })
        };

        const json = jest.fn();

        const status = jest.fn(() => {
            return {
                json
            }
        })

        const res = {
            status
        }

        card(req, res);
        console.log(json.mock.calls);
    });

})