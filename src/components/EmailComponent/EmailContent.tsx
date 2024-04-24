import React from 'react';
import { Row, Col } from 'antd';
import { data } from '../../constants/data';
import instaIcon from '../../assets/images/Frame.svg';
import xIcon from '../../assets/images/Vector (1).svg';
import fbIcon from '../../assets/images/Frame (1).svg';
import * as Styled from './EmailContent.styled';

interface SharedContentProps {
  alignment: 'left' | 'center' | 'right';
}

const CustomContent: React.FC<SharedContentProps> = ({ alignment }) => {
  const renderContent = () => {
    switch (alignment) {
      case 'left':
        return (
          <Styled.LeftRowContainer gutter={24}>
            <Styled.InfoCol>
              {data.avatars.map((avatar) => (
                <Col key={avatar.key}>
                  <Styled.ImageContainer src={avatar.image} alt="Avatar" />
                </Col>
              ))}
              <Styled.IconRow gutter={[10, 0]}>
              <Styled.SocialIcons>
                    <img src={fbIcon} alt="fb icon" />
              </Styled.SocialIcons>
              <Styled.SocialIcons>
                    <Styled.XIcon src={xIcon} alt="x icon" />
              </Styled.SocialIcons>
              <Styled.SocialIcons>
                    <img src={instaIcon} alt="insta icon" />
              </Styled.SocialIcons>
              </Styled.IconRow>
            </Styled.InfoCol>
            <Styled.DataCol span={12}>
              <Row gutter={16}>
                <Col span={24}>
                  <Styled.Name>{data.name}</Styled.Name>
                </Col>
                <Col span={24}>
                  <Styled.Title>{data.title}</Styled.Title>
                </Col>
              </Row>
              <Styled.Description>{data.desc}</Styled.Description>
            </Styled.DataCol>
          </Styled.LeftRowContainer>
        );
      case 'center':
        return (
          <Styled.CenterRowContainer gutter={24}>
            {data.avatars.map((avatar) => (
              <Styled.AvatarCol span={24} key={avatar.key}>
                <Styled.ImageContainer src={avatar.image} alt="Avatar" />
              </Styled.AvatarCol>
            ))}
            <Styled.CenterIconRow gutter={[10, 0]}>
            <Styled.SocialIcons>
                    <img src={fbIcon} alt="fb icon" />
              </Styled.SocialIcons>
              <Styled.SocialIcons>
                    <Styled.XIcon src={xIcon} alt="x icon" />
              </Styled.SocialIcons>
              <Styled.SocialIcons>
                    <img src={instaIcon} alt="insta icon" />
              </Styled.SocialIcons>
            </Styled.CenterIconRow>
            <Col span={24}>
              <Styled.CenterRow gutter={16}>
                <Col>
                  <Row gutter={16}>
                    <Col span={24}>
                      <Styled.Name>{data.name}</Styled.Name>
                    </Col>
                    <Col span={24}>
                      <Styled.Title>{data.title}</Styled.Title>
                    </Col>
                  </Row>
                  <Styled.Description>{data.desc}</Styled.Description>
                </Col>
              </Styled.CenterRow>
            </Col>
          </Styled.CenterRowContainer>
        );
      case 'right':
        return (
          <Styled.LeftRowContainer gutter={24}>
            <Styled.RightDataCol>
              <Row gutter={16}>
                <Col span={24}>
                  <Styled.Name>{data.name}</Styled.Name>
                </Col>
                <Col span={24}>
                  <Styled.Title>{data.title}</Styled.Title>
                </Col>
              </Row>
              <Styled.Description>{data.desc}</Styled.Description>
            </Styled.RightDataCol>
            <Styled.InfoCol>
              {data.avatars.map((avatar) => (
                <Col key={avatar.key}>
                  <Styled.ImageContainer src={avatar.image} alt="Avatar" />
                </Col>
              ))}
              <Styled.IconRow gutter={[10, 0]}>
              <Styled.SocialIcons>
                    <img src={fbIcon} alt="fb icon" />
              </Styled.SocialIcons>
              <Styled.SocialIcons>
                    <Styled.XIcon src={xIcon} alt="x icon" />
              </Styled.SocialIcons>
              <Styled.SocialIcons>
                    <img src={instaIcon} alt="insta icon" />
              </Styled.SocialIcons>
              </Styled.IconRow>
            </Styled.InfoCol>
          </Styled.LeftRowContainer>
        );
      default:
        return null;
    }
  };

  return <div>{renderContent()}</div>;
};

export default CustomContent;
