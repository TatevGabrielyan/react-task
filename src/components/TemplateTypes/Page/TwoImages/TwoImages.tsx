import React, { useState } from 'react';
import { Skeleton, Row, Col } from 'antd';
import * as Styled from '../Page.styled';

type SizeType = 'default' | 'small' | 'large';
type AvatarShapeType = 'circle' | 'square';

const TwoImagesGrid: React.FC = () => {
  const [avatarShape, setAvatarShape] = useState<AvatarShapeType>('circle');
  const [size, setSize] = useState<SizeType>('default');
  const [block, setBlock] = useState(false);

  return (
    <Styled.CenterCardComponent>
      <Styled.SkeletonImage>
        <Skeleton.Image />
      </Styled.SkeletonImage>
      <Styled.RowContainer>
        <Styled.TwoImageContainer>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12} lg={12} xl={10}>
                  <Styled.RowIcons gutter={[10, 0]}>
                    <Col>
                      <Skeleton.Avatar size={20} shape={avatarShape} />
                    </Col>
                    <Col>
                      <Skeleton.Avatar size={20} shape={avatarShape} />
                    </Col>
                    <Col>
                      <Skeleton.Avatar size={20} shape={avatarShape} />
                    </Col>
                  </Styled.RowIcons>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={14}>
                  <Styled.SecondImage block={block} />
                  <Styled.SharingOptionsSecond>
                    <Col><Skeleton.Input size={size} block={block} /></Col>
                    <Col><Skeleton.Input size={size} block={block} /></Col>
                    <Col><Skeleton.Input size={size} block={block} /></Col>
                  </Styled.SharingOptionsSecond>
                  <Styled.SkeletonContainerSecond paragraph={{ rows: 3, width: ['122', '122', '122', '61'] }} />
                  <Styled.ImageBlock>
                      <Skeleton.Image />
                  </Styled.ImageBlock>
                  <Styled.SkeletonContainerSecond paragraph={{ rows: 3, width: ['122', '122', '122', '61'] }} />
            </Col>
          </Row>
        </Styled.TwoImageContainer>
      </Styled.RowContainer>
    <Styled.LayoutTitle>
      <Styled.LeftLayoutTitle>2 images grid</Styled.LeftLayoutTitle>
    </Styled.LayoutTitle>
    </Styled.CenterCardComponent>
  );
};

export default TwoImagesGrid;