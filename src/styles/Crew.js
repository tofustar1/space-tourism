import styled from "styled-components";
import {Description, devices as device} from "./General";

export const CrewInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (${device.tablet}) {
        margin-top: 40px;
    }

    @media (${device.desktop}) {
        margin-top: 76px;
    }
`;

export const CrewImageWrapper = styled.div`
    border-bottom: 1px solid #383b4b;
    margin: 32px 0;
    align-self: stretch;
    
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
    max-width: 226px;
    height: auto;
    display: block;
    margin: 0 auto;
    
    @media (${device.tablet}) {
        max-width: 480px;
    }
`;

export const CrewTabGroup = styled.div`
    margin-bottom: 32px;

    @media (${device.tablet}) {
        order: 1;
        margin: 40px 0;
    }
`;

export const CrewLabel = styled.label`
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #979797;
    border-radius: 50%;
    margin-right: 16px;
    cursor: pointer;
    
    &:nth-child(8) {
        margin-right: 0;
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
`;

export const CrewPosition = styled.h2`
    font-family: var(--family-2), serif;
    opacity: 0.5;
    margin-bottom: 8px;
    font-size: 16px;

    @media (${device.tablet}) {
        font-size: 24px;
    }
`;

export const CrewName = styled.h1`
    font-family: var(--family-2), serif;
    margin-bottom: 16px;
    font-size: 24px;

    @media (${device.tablet}) {
        font-size: 40px;
    }
`;

export const CrewDescription = styled(Description)`
    max-width: 592px;
`;