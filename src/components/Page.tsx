import { CssBaseline } from '@mui/material';
import React from 'react';

interface IPage {
    children: React.ReactNode;
    title: string;
}

const Page: React.FC<IPage> = ({ children, title }) => {
    React.useEffect(() => {
        document.title = title;
    });

    return (
        <main>
            <CssBaseline />
            {children}
        </main>
    );
};

export default Page;
