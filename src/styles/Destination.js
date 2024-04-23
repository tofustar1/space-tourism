import styled from "styled-components";
import { Description } from "./General";

export const DWrapper = styled.div`
    
    @media (min-width: 768px) {
        margin-top: 40px;
    }
    
    @media (min-width: 1440px) {
        display: flex;
        margin-left: 110px;
        justify-content: space-between;
        align-items: flex-end;
        margin-top: 76px;
    }
`;

export const DInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1440px) {
        align-items: start;
    }
`;

export const DImage = styled.img.attrs({
  alt: 'planet',
})`
    max-width: 170px;
    height: auto;
    display: block;
    margin-bottom: 26px;

    @media (min-width: 768px) {
        margin-bottom: 53px;
        max-width: 300px;
    }

    @media (min-width: 1440px) {
        margin: 0 0 0 65px;
        max-width: 445px;
    }
`;

export const DTabGroup = styled.div`
    margin-bottom: 20px;

    @media (min-width: 768px) {
        margin-bottom: 32px;
    }

    @media (min-width: 1440px) {
        margin-bottom: 44px;
    }
`;

export const DLabel = styled.label.attrs({})`
    font-family: var(--family-3), sans-serif;
    margin-right: 26px;
    font-size: 14px;
    text-transform: uppercase;
    color: var(--color-light-blue);
    cursor: pointer;
    padding-bottom: 8px;

    &:nth-child(8) {
        margin-right: 0;
    }

    @media (min-width: 768px) {
        font-size: 16px;
    }
`;

export const DInput = styled.input.attrs({
  name: 'planet',
  type: 'radio'
})`
    display: none;

    &:checked + ${DLabel} {
        color: var(--color-white);
        border-bottom: 3px solid #fff;
    }
    
    &:hover + ${DLabel} {
        border-bottom: 3px solid #8C8D93;
    }
`;
export const DTitle = styled.h1`
    font-family: var(--family-2), serif;
    font-size: var(--fs-heading-3);
    margin-bottom: 15px;

    @media (min-width: 768px) {
        font-size: 80px;
        margin-bottom: 22px;
    }

    @media (min-width: 1440px) {
        font-size: var(--fs-heading-2);
        margin-bottom: 28px;
    } 
`;

export const DDescription = styled(Description)`
    border-bottom: 1px solid #383b4b;
    padding-bottom: 32px;
    margin-bottom: 32px;
    max-width: 573px;
    

    @media (min-width: 768px) {
        padding-bottom: 49px;
    }

    @media (min-width: 1440px) {
        max-width: 444px;
        padding-bottom: 54px;
    }
`;

export const DInfoBlock = styled.div`

    @media (min-width: 768px) {
        display: flex;
        align-self: stretch;
        justify-content: space-evenly;
    }

    @media (min-width: 1440px) {
        align-self: start;
        justify-content: start;
    }
`;

export const DInfoElement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1440px) {
        align-items: start;
        margin-right: 80px;
    }
`;

export const DParameter = styled.span`
    font-family: var(--family-3), sans-serif;
    font-size: 14px;
    letter-spacing: 0.17em;
    text-transform: uppercase;
    color: var(--color-light-blue);
    margin-bottom: 12px;
`;

export const DValue = styled.span`
    font-family: var(--family-2), serif;
    font-size: var(--fs-subheading-1);
    text-transform: uppercase;
    margin-bottom: 32px;

    @media (min-width: 768px) {
        margin: 0;
    }
`;

