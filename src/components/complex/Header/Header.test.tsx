import { render } from '@testing-library/react';
import Header from './index';


describe("Header", () => {
  it("renders a Heade", () => {
    render(<Header />);

    //const { listUser } = useDataUsers()
    //const dataUser = listUser && listUser.find(e => e)
    // const { getByText } = render(<Header />);
    // expect(getByText('Olá')).toBeInTheDocument();
  });
});