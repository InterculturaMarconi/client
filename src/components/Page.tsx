import { styled, useTheme } from '@mui/material';
import React from 'react';
import Footer from '~/components/footer/Footer';
import Menu from '~/components/menu/Menu';

interface IPage {
    children: React.ReactNode;
    title: string;
    background?: string;
    navcolor?: string;
    footcolor?: string;
}
const Page: React.FC<IPage> = ({ children, title, background, navcolor, footcolor }) => {
    const theme = useTheme();

    React.useEffect(() => {
        document.title = title;

        if (background) {
            document.body.style.backgroundColor =
                theme.palette.mode === 'light' ? background : theme.palette.background.default;
        }
    });

    return (
        <>
            <Menu color={navcolor} />
            {children}
            <Footer color={footcolor} />
        </>
    );
};

export default Page;
