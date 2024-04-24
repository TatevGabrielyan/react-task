import React from 'react';
import { Row, Col } from 'antd'; 
import { cardData } from '../../constants/data';
import dateIcon from '../../assets/images/Frame (2).svg';
import viewIcon from '../../assets/images/Frame (3).svg';
import ImageGallery from "react-image-gallery";
import mainImage from '../../assets/images/Avatar.jpeg';
import "react-image-gallery/styles/css/image-gallery.css";
import * as Styled from './PageContent.styled';

interface SharedContentProps {
  alignment: 'single' | 'two_images' | 'slider';
}

const images = [
  {
    original: mainImage,
    thumbnail: mainImage,
    originalHeight: 620,
    originalWidth: 466,
    thumbnailWidth: 108,
    thumbnailHeight: 116,
  },
  {
    original: mainImage,
    thumbnail: mainImage,
    originalHeight: 620,
    originalWidth: 466,
    thumbnailWidth: 108,
    thumbnailHeight: 116,
  },
  {
    original: mainImage,
    thumbnail: mainImage,
    originalHeight: 620,
    originalWidth: 466,
    thumbnailWidth: 108,
    thumbnailHeight: 116,
  },
  {
    original: mainImage,
    thumbnail: mainImage,
    originalHeight: 620,
    originalWidth: 466,
    thumbnailWidth: 108,
    thumbnailHeight: 116,
  },
];

const PageComponent: React.FC<SharedContentProps> = ({ alignment }) => {

  const renderContent = () => {
    switch (alignment) {
      case 'single':
        return (
          <Styled.CardComponent>
            <div>
              <Styled.CategoryName>{cardData.category}</Styled.CategoryName>
              <Styled.CategoryTitle>{cardData.title}</Styled.CategoryTitle>
              <Styled.ShareRow>
                <Col><p>{cardData.author}</p></Col>
                <Col>
                  <Styled.DataRow>  
                    <Styled.ImageCol><img src={dateIcon} alt="date" /></Styled.ImageCol>
                    <Col><p>{cardData.date}</p></Col>
                  </Styled.DataRow>
                </Col>
                <Col>
                  <Styled.DataRow gutter={[16, 0]}>  
                    <Styled.ImageCol><img src={viewIcon} alt="view" /></Styled.ImageCol>
                    <Col><p>{cardData.viewCount}</p></Col>
                  </Styled.DataRow>
                </Col>
              </Styled.ShareRow>
              <Styled.CardImage src={cardData.image} alt="card_img" />
              <Styled.Description>{cardData.description}</Styled.Description>
              <Row gutter={[10, 0]}>
                <Styled.ShareText>Share</Styled.ShareText>
                {cardData.icons.map((icon) => (
                  <Styled.IconCol key={icon.key}>
                    <img src={icon.image} alt="icon" />
                  </Styled.IconCol>
                ))}
              </Row>
            </div>
          </Styled.CardComponent>
        );
      case 'two_images':
        return (
          <Styled.TwoGridComponent>
             <Styled.TwoGridImage src={cardData.image} alt="card_img" />
             <Styled.RowContainer>
              <Col xs={24} sm={24} md={12} lg={12} xl={6}>
                <Row gutter={[10, 0]}>
                  <Styled.ShareText>Share</Styled.ShareText>
                  {cardData.icons.map((icon) => (
                    <Styled.IconCol key={icon.key}>
                      <img src={icon.image} alt="icon" />
                    </Styled.IconCol>
                  ))}
                </Row>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={18}>
                    <Styled.TwoGridTitle>{cardData.title}</Styled.TwoGridTitle>
                    <div>
                      <Styled.DataRow>  
                        <Styled.ImageCol><img src={dateIcon} alt="date" /></Styled.ImageCol>
                        <Col><p>{cardData.date}</p></Col>
                      </Styled.DataRow>
                      <Styled.TwoGridDesc>{cardData.description}</Styled.TwoGridDesc>
                      <Styled.SecondGridImage src={cardData.image} alt="logo" />
                      <Styled.TwoGridDesc>{cardData.description}</Styled.TwoGridDesc>
                    </div>
              </Col>
             </Styled.RowContainer>
          </Styled.TwoGridComponent>
        );
      case 'slider':
        return (
            <Styled.SliderGridComponent>
              <Row>
              <Styled.ThumbnailImageCol span={11}>
                <ImageGallery 
                  items={images} 
                  thumbnailPosition='left' 
                  showFullscreenButton={false} 
                  useBrowserFullscreen ={false}
                  showPlayButton={false}
                  showNav={false}
                />
              </Styled.ThumbnailImageCol>
              <Styled.DataCol span={10}>
                <div>
                  <Styled.CategoryName>{cardData.category}</Styled.CategoryName>
                  <Styled.CategoryTitle>{cardData.title}</Styled.CategoryTitle>
                  <Styled.SliderDescription>{cardData.description}</Styled.SliderDescription>
                </div>
              <Row gutter={[16, 0]}>
                <Col><Styled.ButtonFirst>Button</Styled.ButtonFirst></Col>
                <Col><Styled.ButtonSecond>Button</Styled.ButtonSecond></Col>
              </Row>
              <Styled.SliderUl>
                <li>Lorem ipsum 1</li>
                <li>Lorem ipsum 2</li>
                <li>Lorem ipsum 3</li>
                <li>Lorem ipsum 4</li>
              </Styled.SliderUl>
              </Styled.DataCol>
              </Row>
            </Styled.SliderGridComponent>
        );
      default:
        return null;
    }
  };

  return <div>{renderContent()}</div>;
};

export default PageComponent;
