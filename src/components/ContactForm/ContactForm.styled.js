import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap:16px;
  `

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 250px;
  /* margin: 0 auto; */
  text-align: left;
  `

export const InputForm = styled.input`
  /* height: 24px;
  border: 1px solid black;
  border-radius: 8px;
  padding: 2px 16px; */
  width: 451px;
height: 57px;
flex-shrink: 0;
border-radius: 9px;
border: 1px solid #ADADAD;
background: #FFF;
color: #808080;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 300;
line-height: normal;
padding: 19px 25px;
&:focus{
border: 1px solid #4285F4;
background: #FFF;}
  `

export const Button = styled.button`
width: 150px;
height: 42px;
border-radius: 10px;
background: #779341;
box-shadow: 0px 4px 19px 0px rgba(119, 147, 65, 0.30);
border: 0;
align-self: center;
cursor: pointer;
color: #FFF;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
    &:hover {
    background-color: #a756c5;
  }
  `