import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 24px;

    @media (min-width: 768px) {
       padding: 0 39px;
    }

    @media (min-width: 1440px) {
        padding: 0 55px;
    }
`;

export const BasicFlexWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;