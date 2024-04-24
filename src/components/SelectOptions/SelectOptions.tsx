import React, { useState } from 'react';
import { Select, Button, message } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import EmailTemplates from '../Layouts/Email/Email';
import PageTemplates from '../Layouts/Page/Page';
import * as Styled from './SelectOptions.styled';
import convertToHTML from '../../utils/HTMLConverter';
// import { saveAs } from 'file-saver';

const SelectOptions: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const handleChange = (value: { value: string; label: React.ReactNode }) => {
    setSelectedValue(value.value);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen((prevOpen) => !prevOpen);
  };

  const getSuffixIcon = () => {
    return dropdownOpen ? <UpOutlined /> : <DownOutlined />;
  };

  // const handleExportHTML = () => {
  //   if (!selectedValue) {
  //     message.error('Please select a template to export.');
  //     return;
  //   }

  //   let html = '';
  //   if (selectedValue === 'email') {
  //     html = convertToHTML(<EmailTemplates />);
  //   } else if (selectedValue === 'page') {
  //     html = convertToHTML(<PageTemplates />);
  //   }

  //   const blob = new Blob([html], { type: 'text/html;charset=utf-8' });

  //   saveAs(blob, 'exported_template.html');

  //   message.success('HTML exported successfully!');
  // };

  return (
    <Styled.SelectOptions>
      <Styled.GlobalStyles />
      <Select
        labelInValue
        defaultValue={{ value: 'Select template', label: 'Select template' }}
        onChange={handleChange}
        options={[
          {
            value: 'email',
            label: 'Email signature layout',
          },
          {
            value: 'page',
            label: 'Page layout',
          },
        ]}
        suffixIcon={getSuffixIcon()}
        onDropdownVisibleChange={handleDropdownToggle}
      />
      {selectedValue === 'email' && <EmailTemplates />}
      {selectedValue === 'page' && <PageTemplates />}
      {/* {selectedValue && (
        <Styled.ExportComponent>
          <Button onClick={handleExportHTML}>Export as HTML</Button>
        </Styled.ExportComponent>
      )} */}
    </Styled.SelectOptions>
  );
};

export default SelectOptions;
