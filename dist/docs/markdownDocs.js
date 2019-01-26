import React from 'react';
import MarkdownElement from './markdownElement';
import { parseMarkdown } from './markdown';

export default function MarkdownDocs(props) {
  let count = 0;
  return (
    <div>
      {
        parseMarkdown(props.markdown).map((item, i) => {
          let demoRegexp = /^demo='(.*)'$/;
          let match = item.match(demoRegexp);
          if (match) {
            count ++;
            let Component = props.components[count-1];
            return <Component key = { i }></Component>;
          } else {
            return <MarkdownElement key = { i } text = { item } />
          }
        })
      }
    </div>
  );
};
