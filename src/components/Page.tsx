import React from 'react';
import Footer from '~/components/footer/Footer';
import Navbar from '~/components/Navbar';

interface IPage {
    children: React.ReactNode;
    title: string;
}

const Page: React.FC<IPage> = ({ children, title }) => {
    React.useEffect(() => {
        document.title = title;
    });

    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Page;
