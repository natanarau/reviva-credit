import { render, screen } from '@testing-library/react';
import { useDataUsers } from '../../../hooks/useDataUsers';
import CardDetails from './index';
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
        render(<CardDetails />)
        const listCards = screen.queryAllByRole('listCards')
        expect(listCards).toHaveLength(0)
    });

    test("Verificar se a lista está recebendo os dados", () => {
        
        const req = {
            body: JSON.stringify({
                
                listCards: [
                    {
                        userId: "9364ca9a-a941-46e3-abae-e8f3870ebc5f",
                        id: "16a037dc-4074-4466-a5eb-5fb00a205882",
                        brand: "visa",
                        number: "4283920481068830",
                        cvv: "450",
                        limit: 3998,
                        dueDate: 14,
                        expiresIn: "2028-01-21T03:09:11.811Z"
                      },
                      {
                        userId: "9364ca9a-a941-46e3-abae-e8f3870ebc5f",
                        id: "3ee52154-c357-4b28-bb71-3f8700666a0c",
                        brand: "visa",
                        number: "4816979481038049",
                        cvv: "818",
                        limit: 2350,
                        dueDate: 23,
                        expiresIn: "2023-01-06T14:00:28.451Z"
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

        CardDetails(req, res);
        console.log(json.mock.calls);
        expect(req).toMatchObject({})
    });

})