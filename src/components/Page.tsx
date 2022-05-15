import { styled } from '@mui/system';
import React from 'react';
import Footer from '~/components/footer/Footer';
import Menu from '~/components/menu/Menu';

interface IPage {
    children: React.ReactNode;
    title: string;
    background?: string;
}

const Main = styled('main')<{ background?: string }>(({ background, theme }) => ({
    flexGrow: 1,
    backgroundColor: background && theme.palette.mode === 'light' ? background : 'inherit',
}));

const Page: React.FC<IPage> = ({ children, title, background }) => {
    React.useEffect(() => {
        document.title = title;
    });

    return (
        <>
            <Menu />
            {/* <Main background={background}> */}
            {children}
            {/*</Main>*/}
            <Footer />
        </>
    );
};

export default Page;
