import styled from 'styled-components';

export const devices = {
  tablet: `min-width: 768px`,
  desktop: `min-width: 1440px`,
};

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

export const Slogan = styled.span`
    font-family: var(--family-3), sans-serif;
    display: inline-block;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 0.17em;
    margin-bottom: 32px;
    
    @media (${devices.tablet}) {
        margin-bottom: 60px;
        font-size: 20px;
        align-self: start;
    }

    @media (${devices.desktop}) {
        font-size: var(--fs-subheading-1);
        margin-bottom: 97px;
    }
`;

export const NumberOfTheSlogan = styled.span`
    font-weight: var(--fw-bold);
    margin-right: 18px;
    opacity: 0.25;
`;

export const Description = styled.p`
    font-size: 15px;
    line-height: 167%;
    color: var(--color-light-blue);
    text-align: center;

    @media (${devices.tablet}) {
        font-size: 16px;
        line-height: 175%;
    }

    @media (${devices.desktop}) {
        font-size: 18px;
        line-height: 178%;
        text-align: left;
    }
`;