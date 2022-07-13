import '@testing-library/jest-dom';
import { fireEvent, render, screen } from "@testing-library/react";
import Progress from "./index";


describe("<LimitCard/>", () => {
  test("verifica se o valor inserido aparece na tela ", () => {
    const { container, rerender } = render(<Progress progress={0} />);
    expect(container.firstChild).toHaveStyle(`--limitedUsed: 0`);
    
    // rerender(<Progress progress={3} />)
    // expect(getByTestId('limitUsed')).toHaveProperty('progress', 3);
  });

  
});