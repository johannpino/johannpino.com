import styled, {createGlobalStyle} from 'styled-components';
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
    ${normalize}
`

export const WrapperLayout = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`