
import styled from 'styled-components';

interface IInput {
   inputError?: boolean;
}

export const Container = styled.form `
   display: flex; 
   top: 400px;
   padding-left: 800px;
   flex-direction: column;
   position: absolute;
  width: 2800px;
   height: 700px;
   margin: 0px auto ;
   background: white;
    
    box-shadow:
        0pt 0px 5px white,
        0px 0px 5px 0px white ;
    border-radius: 5px;
    padding-bottom: 5px;
   `;

export const TextP = styled.p `
  margin-top: 30px;
  display:flex;
   flex-direction: column;
   max-width: 400px;
   margin-left: 40px;
   margin-bottom: 15px;
   

`;
export const H3 = styled.h3 `
  margin-top: 30px;
  display:flex;
   flex-direction: column;
   max-width: 400px;
   margin-left: 40px;
   margin-bottom: 15px;
   

`;
export const FirstForm = styled.label `
  margin-top: 30px;
  display:flex;
   flex-direction: column;
   max-width: 400px;
   margin-left: 40px;
   margin-bottom: 15px;
   

`;

export const FormControl = styled.label `
   display:flex;
   flex-direction: column;
   max-width: 400px;
   margin-left: 40px;
   margin-bottom: 15px;
   `;

export const Label = styled.span `
    font-size: 14px;
    margin-bottom: 10px;
`;

export const Input = styled.input<IInput> `
   height: 40px;
   padding: 0 20px;
   border-color: ${({ theme, inputError }) => inputError ? theme.colors.red : theme.colors.SkyBlue};
   transition: border 0.3s;
   border: 2px solid SkyBlue;
   outline: none;
   

   &:hover,
   &:focus {
      outline: none;
   }
  `;

export const InputError1 = styled.span `
position: relative;
   font-size: 14px;
   color: ${({ theme }) => theme.colors.red};
   top: -25px;
  margin-top: 6px;
` ; 
export const Button = styled.button `
   width: 400px;
   font-size: 14px;
   font-weight: bold;
   margin-bottom: 10px;
   height: 40px;
   background-color: lightgreen;
   border-radius: 32px;
   margin-top: 5px;
   margin-left: -70px;
   border-color: white  ;

`;
export const InputError = styled.span `
   font-size: 14px;
   color: ${({ theme }) => theme.colors.red};
   margin-top: 10px;

` ; 
export const TextDiv = styled.div `
   font-size: 16px;
   font-weight: bold;
   margin-left: -790px;
   margin-top: 5px;
   margin-bottom: 10px;
   font-size: 12px;

` ; 
export const TextLabel = styled.label `
   font-size: 16px;
   font-weight: bold;
   margin-left: 40px;
   margin-top: 5px;
   margin-bottom: 10px;
`;