import styled from "styled-components";
import { Container, Description } from "./General";

export const TechContainer = styled(Container)`
    text-align: center;
`;

export const TechImage = styled.img.attrs({
  alt: 'technology',
})`
    max-width: 375px;
    margin: 0 auto;
    display: block;
`;

export const TechTabGroup = styled.div`
    margin: 44px 0 36px;
`;

export const TechLabel = styled.label`
    margin-right: 56px;
    position: relative;
    font-family: var(--family-2), serif;
    font-size: 16px;
    
    &::after {
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        border: 1px solid rgba(255, 255, 255, 0.25);
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
        z-index: 1;
    }

    &:nth-child(6) {
        margin-right: 0;
    }
`;

export const TechLabelInner = styled.span`
    position: relative;
    z-index: 10;
`;

export const TechInput = styled.input.attrs({
  type: 'radio',
  name: 'technology'
})`
    display: none;

    &:checked + ${TechLabel} {
        color: var(--color-dark);
    }
    
    &:checked + ${TechLabel }::after {
        background-color: var(--color-white);
    }
`;

export const TechTerminology = styled.span`
    font-family: var(--family-3), sans-serif;
    font-size: 14px;
    letter-spacing: 0.17em;
    color: var(--color-light-blue);
    text-transform: uppercase;
    margin-bottom: 10px;
    display: inline-block;
`;

export const TechTitle = styled.h1`
    font-family: var(--family-2), serif;
    margin-bottom: 16px;
    font-size: 24px;
`;

export const TechDescription = styled(Description)`
    max-width: 458px;
    margin: 0 auto;
`;
