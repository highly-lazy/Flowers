
import React from 'react';
import { Select } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const items = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" className='cursor-pointer'>
                Your choice
            </a>
        ),
        icon: <SmileOutlined />,
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                Also Your choice
            </a>
        ),
        icon: <SmileOutlined />,
       
    },
  
];

const { Option } = Select;

function MyDropdowns() {

    return (
      <>
        <Dropdown
          menu={{
            items,
          }}
        >
          <Space className="cursor-pointer">
            Sort By
            <DownOutlined />
          </Space>
        </Dropdown>

        <Dropdown
          menu={{
            items,
          }}
        >
          <Space className="cursor-pointer">
            Color
            <DownOutlined />
          </Space>
        </Dropdown>

        <Dropdown
          menu={{
            items,
          }}
        >
          <Space className="cursor-pointer">
            Price
            <DownOutlined />
          </Space>
        </Dropdown>

        <Dropdown
          menu={{
            items,
          }}
        >
          <Space className="cursor-pointer">
            Flower Type
            <DownOutlined />
          </Space>
        </Dropdown>

        <Dropdown
          menu={{
            items,
          }}
        >
          <Space className="cursor-pointer">
            Occasion
            <DownOutlined />
          </Space>
        </Dropdown>
      </>
    );
}

export default MyDropdowns;