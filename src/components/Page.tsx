import { styled } from '@mui/system';
import React from 'react';
import Footer from '~/components/footer/Footer';
import Navbar from '~/components/Navbar';

interface IPage {
    children: React.ReactNode;
    title: string;
    background?: string;
}

const Main = styled('main')<{ background?: string }>(({ background }) => ({
    backgroundColor: background ?? 'white',
}));

const Page: React.FC<IPage> = ({ children, title, background }) => {
    React.useEffect(() => {
        document.title = title;
    });

    return (
        <>
            <Navbar />
            <Main background={background}>{children}</Main>
            <Footer />
        </>
    );
};

export default Page;
