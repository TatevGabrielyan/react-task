import React, { useState } from 'react';
import { Skeleton, Row, Col } from 'antd';
import * as Styled from '../Page.styled';

type SizeType = 'default' | 'small' | 'large';
type AvatarShapeType = 'circle' | 'square';

const SliderGrid: React.FC = () => {
  const [avatarShape, setAvatarShape] = useState<AvatarShapeType>('circle');
  const [size, setSize] = useState<SizeType>('default');
  const [block, setBlock] = useState(false);

  return (
    <Styled.SliderComponent>
      <Styled.RowContainerSlider gutter={24}>
        <Styled.Slider gutter={[0, 10]}>
          <Col flex="28px">
          <Row gutter={[0, 10]}>
            <Col span={24} >
              <Skeleton.Image />
            </Col>
            <Col span={24} >
              <Skeleton.Image />
            </Col>
            <Col span={24} >
              <Skeleton.Image />
            </Col>
            <Col span={24} >
              <Skeleton.Image />
            </Col>
          </Row>
          </Col>
          <Styled.MainSliderImage flex="137px">
             <Skeleton.Image />
          </Styled.MainSliderImage>
          <Styled.TwoImageContainer flex="122px">
            <Styled.SecondImage block={block} />
            <Styled.SkeletonContainerSecond paragraph={{ rows: 3, width: ['122', '122', '122', '61'] }} />
            <Styled.ButtonRow gutter={[10, 0]}>
              <Col><Skeleton.Button  block={block} /></Col>
              <Col><Skeleton.Button  block={block} /></Col>
            </Styled.ButtonRow>
            <Styled.BulletPointListWrapper>
              <ul>
                <Styled.BulletPointListItem>
                  <Skeleton paragraph={{ rows: 1, width: ['110'] }} />
                </Styled.BulletPointListItem>
                <Styled.BulletPointListItem>
                  <Skeleton paragraph={{ rows: 1, width: ['110'] }} />
                </Styled.BulletPointListItem>
                <Styled.BulletPointListItem>
                  <Skeleton paragraph={{ rows: 1, width: ['110'] }} />
                </Styled.BulletPointListItem>
                <Styled.BulletPointListItem>
                  <Skeleton paragraph={{ rows: 1, width: ['110'] }} />
                </Styled.BulletPointListItem>
              </ul>
            </Styled.BulletPointListWrapper>
          </Styled.TwoImageContainer>
        </Styled.Slider>
      </Styled.RowContainerSlider>
    <Styled.LayoutTitle>
      <Styled.LeftLayoutTitle>Slider grid</Styled.LeftLayoutTitle>
    </Styled.LayoutTitle>
    </Styled.SliderComponent>
  );
};

export default SliderGrid;