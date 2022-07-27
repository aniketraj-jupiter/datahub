import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
    height: 75vh;
`;

const getFrameUrl = (tabType: string | undefined) => {
    switch (tabType) {
        case 'redash':
            return 'https://jupiter.money/';
        default:
            return '';
    }
};

const ExternalTab = (props: { properties?: { type?: string | undefined } }) => {
    const { properties } = props;

    const tabType = properties?.type;

    const iframeUrl = getFrameUrl(tabType);

    if (!iframeUrl) return null;

    return (
        <SectionContainer>
            <iframe src={iframeUrl} title="W3Schools Free Online Web Tutorials" width="100%" height="100%" />
        </SectionContainer>
    );
};

export default ExternalTab;
