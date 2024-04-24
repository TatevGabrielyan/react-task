import React, { useState } from 'react';
import { Button, message } from 'antd';
import { saveAs } from 'file-saver';
import type { TabsProps } from 'antd';
import LeftAlign from '../../TemplateTypes/Email/LeftAlign/LeftAlign';
import CenterAlign from '../../TemplateTypes/Email/CenterAlign/CenterAlign';
import RightAlign from '../../TemplateTypes/Email/RightAlign/RightAlign';
import CustomContent from '../../EmailComponent/EmailContent';
import * as Styled from './Email.styled';
import convertToHTML from '../../../utils/HTMLConverter'; // Import the convertToHTML function

const EmailTemplates: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('1');

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: <LeftAlign />,
      children: <CustomContent alignment='left' />,
    },
    {
      key: '2',
      label: <CenterAlign />,
      children: <CustomContent alignment='center' />,
    },
    {
      key: '3',
      label: <RightAlign />,
      children: <CustomContent alignment='right' />,
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
          <LeftAlign />
          <CustomContent alignment='left' />
        </div>
      );
    } else if (selectedTab === '2') {
      html = convertToHTML(
        <div>
          <CenterAlign />
          <CustomContent alignment='center' />
        </div>
      );
    } else if (selectedTab === '3') {
      html = convertToHTML(
        <div>
          <RightAlign />
          <CustomContent alignment='right' />
        </div>
      );
    }

    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    saveAs(blob, 'exported_template.html');
    message.success('HTML exported successfully!');
  };

  return (
    <>
      <Styled.EmailTemplate>
        <h2>Template Types</h2>
        <Styled.TabsLayout defaultActiveKey={selectedTab} items={items} onChange={onChange} tabBarGutter={20} />
      </Styled.EmailTemplate>
      <Styled.ExportComponent>
        <Button onClick={handleExportHTML}>Export as HTML</Button>
      </Styled.ExportComponent>
    </>
  );
};

export default EmailTemplates;
