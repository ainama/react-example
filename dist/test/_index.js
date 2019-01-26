import React from 'react';
import MarkdownDocs from '../dist/docs/markdownDocs';
import markdown from './index.md';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

class Demo1 extends React.Component {
  render() {
    return (
      <h1>Hello, world!</h1>
    );
  }
};

export default class SimplePage extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    let components = [ Demo1 ];
    return (
      <MarkdownDocs markdown = { markdown } components = { components } />
    );
  }
}
