import styled from "styled-components";
import { Description, devices as device } from "./General";

export const CrewInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (${device.tablet}) {
        margin-top: 40px;
    }

    @media (${device.desktop}) {
        display: block;
        margin: 76px 0 0 110px;
    }
`;

export const CrewImageWrapper = styled.div`
    border-bottom: 1px solid #383b4b;
    margin: 32px 0;
    align-self: stretch;
    order: 1;
    
    @media (${device.tablet}) {
        order: 2;
        border: none;
        margin: 0;
    }

    @media (${device.desktop}) {
        float: right;
    }
`;

export const CrewImage = styled.img.attrs({
  alt: 'crew',
})`
    height: 226px;
    display: block;
    margin: 0 auto;
    
    @media (${device.tablet}) {
        height: 532px;
    }

    @media (${device.desktop}) {
        height: auto;
    }
`;

export const CrewTabGroup = styled.div`
    margin-bottom: 32px;
    order: 2;

    @media (${device.tablet}) {
        margin: 40px 0;
        order: 0;
    }
`;

export const CrewLabel = styled.label`
    display: inline-block;
    width: 10px;
    height: 10px;
    background: rgba(255, 255, 255, 0.17);
    border-radius: 50%;
    margin-right: 16px;
    cursor: pointer;
    
    &:nth-child(8) {
        margin-right: 0;
    }

    @media (${device.desktop}) {
        width: 15px;
        height: 15px;
        margin-right: 24px;
    }
`;

export const CrewInput = styled.input.attrs({
  type: 'radio',
  name: 'crew'
})`
    display: none;
    
    &:checked + ${CrewLabel} {
        background: var(--color-white);
    }

    &:hover + ${CrewLabel} {
        background: rgba(255, 255, 255, 0.5);
    }
`;

export const CrewPosition = styled.h2`
    font-family: var(--family-2), serif;
    opacity: 0.5;
    margin-bottom: 8px;
    font-size: 16px;
    order: 3;

    @media (${device.tablet}) {
        font-size: 24px;
        order: 0;
    }

    @media (${device.desktop}) {
        font-size: var(--fs-heading-4);
        margin: 57px 0 15px;
    }
`;

export const CrewName = styled.h1`
    font-family: var(--family-2), serif;
    margin-bottom: 16px;
    font-size: 24px;
    order: 4;

    @media (${device.tablet}) {
        font-size: 40px;
        order: 0;
    }

    @media (${device.desktop}) {
        font-size: var(--fs-heading-3);
        margin-bottom: 27px;
    }
`;

export const CrewDescription = styled(Description)`
    max-width: 592px;
    order: 4;

    @media (${device.tablet}) {
        order: 0;
    }

    @media (${device.desktop}) {
        margin-bottom: 120px;
        max-width: 444px;
    }
`;