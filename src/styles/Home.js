import styled from "styled-components";
import {Description, Slogan} from "./General";

export const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24px;

    @media (min-width: 768px) {
        margin-top: 66px;
    }
    @media (min-width: 1440px) {
        flex-direction: row;
        justify-content: space-between;
        margin-top: 251px;
    }
`;

export const HomeTextInner = styled.div`
    text-align: center;

    @media (min-width: 1440px) {
        margin-left: 110px;
    }
`;

export const HomeSlogan = styled(Slogan)`
    color: var(--color-light-blue);
`;

export const HomeTitle = styled.h1`
    font-family: var(--family-2);
    font-size: 80px;
    text-transform: uppercase;
    line-height: 125%;
    margin: 0 0 16px;
    
    @media (min-width: 768px) {
        font-size: var(--fs-heading-1);
        line-height: 100%;
        margin: 0 0 24px;
    }
`;

export const HomeDescription = styled(Description)`
    margin-bottom: 81px;
    max-width: 418px;

    @media (min-width: 768px) {
        margin-bottom: 156px;
    }

    @media (min-width: 1440px) {
        margin-bottom: 0;
        max-width: 450px;
    }
`;

export const HomeButton = styled.button.attrs({
  type: 'button'
})`
    font-family: var(--family-2);
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: #fff;
    border: none;
    color: var(--color-dark);
    text-transform: uppercase;
    font-size: 20px;
    letter-spacing: 0.06em;
    cursor: pointer;
    transition: box-shadow 0.75s ease-in-out;
    

    &:hover {
        box-shadow: 0 0 0 48px rgba(255, 255, 255, 0.15);
    }

    @media (min-width: 768px) {
        width: 242px;
        height: 242px;
        font-size: 32px;
        
        &:hover {
            box-shadow: 0 0 0 77px rgba(255, 255, 255, 0.15);
        }
    }

    @media (min-width: 1440px) {
        width: 270px;
        height: 270px;

        &:hover {
            box-shadow: 0 0 0 86px rgba(255, 255, 255, 0.15);
        }
    }
`;