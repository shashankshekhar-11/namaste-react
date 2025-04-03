import {render , screen} from '@testing-library/react'
import Contact from "../Contact"
import '@testing-library/jest-dom';


describe("Contact Us test cases",()=>{
    //can also use it instead of test
    test('should load contact us component', () => { 
        render(<Contact />);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    });
    test('should load button inside Contact component', () => { 
        render(<Contact />);
    
        const button = screen.getByRole("button");
    
        expect(button).toBeInTheDocument();
    });
    test('should load input name inside Contact component', () => { 
        render(<Contact />);
    
        const inputName = screen.getByPlaceholderText("name");
    
        expect(inputName).toBeInTheDocument();
    });
    
    test('should load 2 input boxinside Contact component', () => { 
        render(<Contact />);
    
        const inputBoxes= screen.getAllByRole("textbox");
    
        expect(inputBoxes.length).toBe(2);
    });
})

