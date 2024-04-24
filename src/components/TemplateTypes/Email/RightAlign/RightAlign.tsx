import React, { useState } from 'react';
import { Skeleton, Row, Col } from 'antd';
import * as Styled from '../Template.styled';

type SizeType = 'default' | 'small' | 'large';
type AvatarShapeType = 'circle' | 'square';

const RightAlign: React.FC = () => {
  const [avatarShape, setAvatarShape] = useState<AvatarShapeType>('circle');
  const [size, setSize] = useState<SizeType>('default');
  const [block, setBlock] = useState(false);

  return (
    <Styled.CardComponent>
    <Styled.RowContainer gutter={24}>
      <Styled.RightTextContainer span={12}>
        <Row gutter={[0, 2]}>
          <Styled.SkeletonCol>
            <Skeleton.Input size={size} block={block} />
          </Styled.SkeletonCol>
          <Styled.SmallSkeletonCol>
            <Skeleton.Input size="small" block={block} active={false} />
          </Styled.SmallSkeletonCol>
        </Row>
        <Styled.SkeletonContainer paragraph={{ rows: 4, width: ['122', '122', '122', '61'] }} />
      </Styled.RightTextContainer>
      <Styled.ColumnContainer>
        <Skeleton.Image />
        <Styled.RowIcons gutter={[10, 0]}>
          <Col>
            <Skeleton.Avatar size={16} shape={avatarShape} />
          </Col>
          <Col>
            <Skeleton.Avatar size={16} shape={avatarShape} />
          </Col>
          <Col>
            <Skeleton.Avatar size={16} shape={avatarShape} />
          </Col>
        </Styled.RowIcons>
      </Styled.ColumnContainer>
    </Styled.RowContainer>
  <Styled.LayoutTitle>
    <Styled.LeftLayoutTitle>Right aligned layout</Styled.LeftLayoutTitle>
  </Styled.LayoutTitle>
  </Styled.CardComponent>
  );
};

export default RightAlign;
