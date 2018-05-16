import * as React from 'react';
import { Input } from 'antd';

export interface SearchPersonsBarProps {
  searchPerson: (value: string) => any;
}

export default class SearchPersonsBar extends React.Component<SearchPersonsBarProps> {

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.searchPerson(event.target.value);
  }

  render() {
    return (
      <div style={{ width: 200, margin: '30px 0' }}>
        <Input onChange={this.handleChange} />
      </div>
    )
  }
}