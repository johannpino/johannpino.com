import {GlobalStyle, WrapperLayout} from './style.js'

const Layout = ({children}) => (
    <>
        <GlobalStyle/>
        <WrapperLayout>
            {children}
        </WrapperLayout>
    </>
);

export default Layout;