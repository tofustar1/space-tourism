import styled from "styled-components";
import { Description, devices as device } from "./General";

export const DestWrapper = styled.div`
    
    @media (${device.tablet}) {
        margin-top: 40px;
    }
    
    @media (${device.desktop}) {
        display: flex;
        margin-left: 110px;
        justify-content: space-between;
        align-items: flex-end;
        margin-top: 76px;
    }
`;

export const DestInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (${device.desktop}) {
        align-items: start;
    }
`;

export const DestImage = styled.img.attrs({
  alt: 'planet',
})`
    max-width: 170px;
    height: auto;
    display: block;
    margin-bottom: 26px;

    @media (${device.tablet}) {
        margin-bottom: 53px;
        max-width: 300px;
    }

    @media (${device.desktop}) {
        margin: 0 0 0 65px;
        max-width: 445px;
    }
`;

export const DestTabGroup = styled.div`
    margin-bottom: 20px;

    @media (${device.tablet}) {
        margin-bottom: 32px;
    }

    @media (${device.desktop}) {
        margin-bottom: 44px;
    }
`;

export const DestLabel = styled.label.attrs({})`
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

    @media (${device.tablet}) {
        font-size: 16px;
    }
`;

export const DestInput = styled.input.attrs({
  name: 'planet',
  type: 'radio'
})`
    display: none;

    &:checked + ${DestLabel} {
        color: var(--color-white);
        border-bottom: 3px solid #fff;
    }
    
    &:hover + ${DestLabel} {
        border-bottom: 3px solid #8C8D93;
    }
`;

export const DestTitle = styled.h1`
    font-family: var(--family-2), serif;
    font-size: var(--fs-heading-3);
    margin-bottom: 15px;

    @media (${device.tablet}) {
        font-size: 80px;
        margin-bottom: 22px;
    }

    @media (${device.desktop}) {
        font-size: var(--fs-heading-2);
        margin-bottom: 28px;
    } 
`;

export const DestDescription = styled(Description)`
    border-bottom: 1px solid #383b4b;
    padding-bottom: 32px;
    margin-bottom: 32px;
    max-width: 573px;
    
    @media (${device.tablet}) {
        padding-bottom: 49px;
    }

    @media (${device.desktop}) {
        max-width: 444px;
        padding-bottom: 54px;
    }
`;

export const DestInfoBlock = styled.div`

    @media (${device.tablet}) {
        display: flex;
        align-self: stretch;
        justify-content: space-evenly;
    }

    @media (${device.desktop}) {
        align-self: start;
        justify-content: start;
    }
`;

export const DestInfoElement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (${device.desktop}) {
        align-items: start;
        margin-right: 80px;
    }
`;

export const DestParametr = styled.span`
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

    @media (${device.tablet}) {
        margin: 0;
    }
`;

