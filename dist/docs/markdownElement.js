import React from 'react';
import marked from 'marked';

export default function MarkdownElement(props) {
  return (
    <div dangerouslySetInnerHTML = {{ __html: marked(props.text) }}></div>
  );
};
