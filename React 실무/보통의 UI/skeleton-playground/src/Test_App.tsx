import styled from "@emotion/styled/macro";
import React from "react";

const Base = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 12px;
    row-gap: 24px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
    border-radius: 4px;
`;

const ImageWrapper = styled.div`
    width: 100%;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Info = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
`;

const Title = styled.h4`
    margin: 0;
    padding: 0;
    font-size: 24px;
`;

const Description = styled.p`
    margin: 8px 0 0 0;
    padding: 0;
    font-size: 16px;
`;

const Item: React.FC = () => (
    <Container>
        <ImageWrapper>
            <Image src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg" />
        </ImageWrapper>
        <Info>
            <Title>Cat taking a nap</Title>
            <Description>zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz</Description>
        </Info>
    </Container>
);

export default function Test_App() {
    return (
        <Base>
            {Array.from({ length: 25 }).map(() => (
                <Item />
            ))}
        </Base>
    );
}
