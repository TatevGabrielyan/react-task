import React, { useState } from 'react';
import { Skeleton, Row, Col } from 'antd';
import * as Styled from '../Page.styled';

type SizeType = 'default' | 'small' | 'large';
type AvatarShapeType = 'circle' | 'square';

const SingleImageGrid: React.FC = () => {
  const [avatarShape, setAvatarShape] = useState<AvatarShapeType>('circle');
  const [size, setSize] = useState<SizeType>('default');
  const [block, setBlock] = useState(false);

  return (
    <Styled.CardComponent>
      <Styled.RowContainer gutter={24}>
        <Styled.TextContainer span={12}>
          <Row gutter={[0, 2]}>
            <Styled.SmallSkeletonCol>
              <Skeleton.Input size="small" block={block} active={false} />
            </Styled.SmallSkeletonCol>
            <Styled.SkeletonCol>
              <Skeleton.Input size={size} block={block} />
            </Styled.SkeletonCol>
          </Row>
          <Styled.SharingOptions>
            <Col><Skeleton.Input size={size} block={block} /></Col>
            <Col><Skeleton.Input size={size} block={block} /></Col>
            <Col><Skeleton.Input size={size} block={block} /></Col>
          </Styled.SharingOptions>
          <Skeleton.Image />
          <Styled.SkeletonContainer paragraph={{ rows: 4, width: ['122', '122', '122', '61'] }} />
           <Styled.ColumnContainer>
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
        </Styled.ColumnContainer>
        </Styled.TextContainer>
      </Styled.RowContainer>
    <Styled.LayoutTitle>
      <Styled.LeftLayoutTitle>Single image grid</Styled.LeftLayoutTitle>
    </Styled.LayoutTitle>
    </Styled.CardComponent>
  );
};

export default SingleImageGrid;