import React from 'react';
import ObjectiveBanner from '~/components/objective/ObjectiveBanner';
import { useImage } from '~/hooks/Image';

const Test: React.FC = () => {
    return <ObjectiveBanner title="Scopriamo l'obiettivo" img={useImage('obb14/img3obb14.png')} />;
};

export default Test;
