import React, { useState, useEffect } from "react";
import { marked } from "marked";
import "./App.css";

// allows break between the sentences
marked.use({
  breaks: true,
});

function App() {
  const [markdown, setMarkdown] = useState(
    // Make sure the initial state is set to be all the way to the left
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`
  );

  // inital load (componentDidMount() essentially)
  useEffect(() => {
    setMarkdown(marked.parse(markdown));
  }, [markdown]);

  //handel when the text in the box is changed
  const handleChange = (event) => {
    setMarkdown(marked.parse(event.target.value));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4">
          <div id="editor-heading">
            <h2 id="sub-heading">Editor</h2>
            <textarea id="editor" class="" onChange={handleChange}>
              {markdown}
            </textarea>
          </div>
        </div>
        <div className="col-8">
            <div id="preview-heading">
              <h2 id="sub-heading">Preview</h2>
              <div
                id="preview"
                dangerouslySetInnerHTML={{ __html: markdown }}
              ></div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
