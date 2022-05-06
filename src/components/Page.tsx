import React from 'react';

interface IPage {
    children: React.ReactNode;
    title: string;
}

const Page: React.FC<IPage> = ({ children, title }) => {
    React.useEffect(() => {
        document.title = title;
    });

    return <main>{children}</main>;
};

export default Page;
