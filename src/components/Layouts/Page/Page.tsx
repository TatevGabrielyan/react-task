import React, { useState } from 'react';
import { Button, message } from 'antd';
import { saveAs } from 'file-saver';
import type { TabsProps } from 'antd';
import SingleImageGrid from '../../TemplateTypes/Page/SingleImage/SingleImage';
import TwoImagesGrid from '../../TemplateTypes/Page/TwoImages/TwoImages';
import SliderGrid from '../../TemplateTypes/Page/Slider/Slider';
import PageComponent from '../../PageComponent/PageContent';
import * as Styled from './Page.styled';
import convertToHTML from '../../../utils/HTMLConverter';

const PageTemplates: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('1');

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: <SingleImageGrid />,
      children: <PageComponent alignment='single' />,
    },
    {
      key: '2',
      label: <TwoImagesGrid />,
      children: <PageComponent alignment='two_images' />,
    },
    {
      key: '3',
      label: <SliderGrid />,
      children: <PageComponent alignment='slider' />,
    },
  ];

  const onChange = (key: string) => {
    setSelectedTab(key);
  };

  const handleExportHTML = () => {
    let html = '';
    if (selectedTab === '1') {
      html = convertToHTML(
        <div>
          <SingleImageGrid />
          <PageComponent alignment='single' />
        </div>
      );
    } else if (selectedTab === '2') {
      html = convertToHTML(
        <div>
          <TwoImagesGrid />
          <PageComponent alignment='two_images' />
        </div>
      );
    } else if (selectedTab === '3') {
      html = convertToHTML(
        <div>
          <SliderGrid />
          <PageComponent alignment='slider' />
        </div>
      );
    }

    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    saveAs(blob, 'exported_page_template.html');
    message.success('HTML exported successfully!');
  };

  return (
    <>
      <Styled.PageTemplate>
        <h2>Template Types</h2>
        <Styled.TabsLayout defaultActiveKey={selectedTab} items={items} onChange={onChange} tabBarGutter={20} />
      </Styled.PageTemplate>
      <Styled.ExportComponent>
        <Button onClick={handleExportHTML}>Export as HTML</Button>
      </Styled.ExportComponent>
    </>
  );
};

export default PageTemplates;
