import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RegisterFormContainer = styled.div`
position: absolute;
top: 80px;
right: 118px;
width: 539px;
height: auto;
max-height: 85vh;
border-radius: 40px;
background: rgba(255, 255, 255, 0.75);
padding: 44px;
overflow: auto;
`

const RegisterFormButton = styled.button`
width: 236px;
height: 54px;
border-radius: 10px;
background: #779341;
box-shadow: 0px 4px 19px 0px rgba(119, 147, 65, 0.30);
border: 0;
align-self: flex-end;
cursor: pointer;
color: #FFF;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
`

const RegisterPreTitle = styled.p`
display: inline-block;
color: #000;
font-family: Poppins;
font-size: 21px;
font-style: normal;
font-weight: 400;
line-height: normal;
`

const RegisterText = styled.p`
position: absolute;
top: 50px;
right: 44px;
color: #8D8D8D;
font-family: Poppins;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: normal;
`

const RegisterLogInTitle = styled(Link)`
color: #779341;
font-family: Poppins;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: normal;
`

const RegisterPreTitleApp = styled.b`
color: #779341;
font-family: Poppins;
font-size: 21px;
font-style: normal;
font-weight: 600;
line-height: normal;
`

const RegisterTitle = styled.h1`
color: #000;
font-family: Poppins;
font-size: 55px;
font-style: normal;
font-weight: 500;
line-height: normal;
`

const RegisterForm = styled.form`
display: flex;
flex-direction: column;
gap: 35px;
`

const RegisterLabel = styled.label`
display: flex;
flex-direction: column;
color: #000;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
`

const RegisterInput = styled.input`
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
background: #FFF;
}
`

export {
    RegisterLogInTitle,
    RegisterText,
    RegisterPreTitleApp,
    RegisterPreTitle,
    RegisterForm,
    RegisterLabel,
    RegisterInput,
    RegisterTitle,
    RegisterFormButton,
    RegisterFormContainer
}