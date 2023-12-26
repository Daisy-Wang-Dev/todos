import {render,screen} from '@testing-library/react';
import Header from './Header';

describe(Header, ()=>{
    beforeAll(() => {
        jest.useFakeTimers();
        jest.setSystemTime(new Date('17 Aug 2020 02:12:00 GMT').getTime())
      });

      afterAll(() => {
        jest.useRealTimers();
      });

      test('renders current date', () => {
        render(<Header />);

        expect(screen.getByText("2020/8/17")).toBeInTheDocument();
        expect(screen.getByText(/Monday/i)).toBeInTheDocument();

    })    

})
