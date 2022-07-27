import React, { useEffect, useState } from 'react';
import { RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import styled from 'styled-components';

const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    height: 46px;
    border-bottom: 1px solid #e9e9e9;
    padding: 7px 16px;
    box-shadow: 0px 2px 6px 0px #0000000d;
    align-items: center;
`;

const SectionBody = styled.div`
    padding: 20px;
`;

const TIMEOUT_VALUE = 2000;

const IngestionTab = () => {
    const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
    const [ingestionProgress, setIngestionProgress] = useState({ progress: 0 });
    const [ingestionDetails, setIngestionDetails] = useState({ ingestionStatus: '', timeStamp: '' });

    useEffect(() => {
        const currentTimerId = setTimeout(() => {
            setIngestionProgress({
                progress: ingestionProgress?.progress + 20,
            });
        }, TIMEOUT_VALUE);
        setTimerId(currentTimerId);

        return () => {
            clearTimeout(currentTimerId);
        };
    }, [ingestionProgress?.progress]);

    useEffect(() => {
        setIngestionDetails({ ingestionStatus: 'PENDING', timeStamp: '' });
    }, []);

    const handleIngestion = () => {
        // Dummy handler here
        if (timerId) {
            clearInterval(timerId);
        }
        setIngestionDetails({ ingestionStatus: 'STARTED', timeStamp: '' });
        // API to trigger ingestion
    };

    const { ingestionStatus, timeStamp } = ingestionDetails;

    const isDisabled = ingestionStatus === 'STARTED';

    return (
        <div>
            <SectionHeader>
                <span>Ingestion Details</span>
                <Button onClick={handleIngestion} disabled={isDisabled}>
                    Ingest
                    <RightOutlined style={{ fontSize: 12 }} />
                </Button>
            </SectionHeader>
            <SectionBody>
                <div>Status : {ingestionStatus}</div>
                <div>Progress : {ingestionProgress?.progress}</div>
                <div>Timestamp : {timeStamp}</div>
            </SectionBody>
        </div>
    );
};

export default IngestionTab;
