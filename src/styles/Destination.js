import styled from "styled-components";
import { Description } from "./General";

export const DestinationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const DestinationImage = styled.img.attrs({
  alt: 'planet',
})`
    max-width: 170px;
    height: auto;
    display: block;
    margin-bottom: 26px;
`;

export const DestinationTabGroup = styled.div`
    margin-bottom: 20px;
`;

export const DestinationLabel = styled.label.attrs({})`
    font-family: var(--family-3);
    margin-right: 26px;
    font-size: 14px;
    text-transform: uppercase;
    color: var(--color-light-blue);
    
    &:nth-child(7) {
        margin-right: 0;
    }
`;

export const DestinationInput = styled.input.attrs({
  name: 'planet',
  type: 'radio'
})`
    display: none;
`;
export const DestinationTitle = styled.h1`
    font-family: var(--family-2);
    font-size: var(--fs-heading-3);
    text-transform: uppercase;
    margin-bottom: 15px;
`;

export const DestinationDescription = styled(Description)`
    border-bottom: 1px solid #383b4b;
    padding-bottom: 32px;
    margin-bottom: 32px;
`;

export const DestinationParameter = styled.span`
    font-family: var(--family-3);
    font-size: 14px;
    letter-spacing: 0.17em;
    text-transform: uppercase;
    color: var(--color-light-blue);
    margin-bottom: 12px;
`;

export const DestinationValue = styled.span`
    font-family: var(--family-2);
    font-size: var(--fs-subheading-1);
    text-transform: uppercase;
    margin-bottom: 32px;
`;

