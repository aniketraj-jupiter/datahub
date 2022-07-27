import React, { useState } from 'react';
import { RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import styled from 'styled-components';
import { useEntityData } from '../../app/entity/shared/EntityContext';

const STATUS_NOT_INGESTED = 'NOT_INGESTED';
const STATUS_SYNC_PROGRESS = 'SYNC_PROGRESS';

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

const Details = styled.div`
    border-bottom: 1px solid #f0f0f0;
    padding: 12px;
    display: flex;
`;

const Title = styled.span`
    font-weight: 800;
    flex: 0.5;
`;

const Value = styled.span`
    flex: 0.5;
`;

const IngestionTab = () => {
    const { entityData } = useEntityData();
    const [isLoading, setIsLoading] = useState(false);

    const handleIngestion = () => {
        // if (entityData?.name === STATUS_NOT_INGESTED && !isLoading) {
        console.log(isLoading, STATUS_NOT_INGESTED);
        setIsLoading(true);
        // TODO: integrate API to trigger ingestion
        /*
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ urn }),
        };
        fetch('/test', requestOptions)
            .then(async (response) => {
                if (!response.ok) {
                    const data = await response.json();
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
                return Promise.resolve();
            })
            .catch((error) => {
                console.log('Error : ', error);
            })
            .finally(() => setIsLoading(false));
            */
        // }
    };

    // replace with ingestion status
    const isDisabled = entityData?.name === STATUS_SYNC_PROGRESS;

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
                <Details>
                    <Title>Status : </Title>
                    <Value>{entityData?.name}</Value>
                </Details>
                <Details>
                    <Title>Timestamp : </Title>
                    <Value>{entityData?.editableProperties?.description}</Value>
                </Details>
            </SectionBody>
        </div>
    );
};

export default IngestionTab;
