import './App.css'
import { Sandpack, SandpackCodeEditor, SandpackLayout, SandpackPreview, SandpackProvider } from '@codesandbox/sandpack-react';
import { nightOwl } from "@codesandbox/sandpack-themes";
import { ActiveFileDisplay } from './components/ActiveFileDisplay';
import CustomRefreshButton from './components/CustomRefreshButton';

export default function App() {
  return (
    <div>
      <h1>Learn <code>sandpack-react</code></h1>
      <p>Source: <a target='_blank' href='https://github.com/sahilrajput03/learn-sandpack'>github.com/sahilrajput03/learn-sandpack</a></p>

      <Basic5 />
      <Basic4 />
      <Basic3 />
      <Basic2 />
      <Basic1 />
      <Basic />
    </div>
  )
}

export const Basic5 = () => {
  return (
    <>
      <h1>Basic 5 - Using external dependencies</h1>
      <p> Docs: <a target='_blank' href="https://sandpack.codesandbox.io/docs/getting-started/usage#dependencies">Click here</a> </p>
      <p>Below sandpack instance shows use of <code>showLineNumbers</code>, <code>showInlineErrors</code>, <code>wrapContent</code>, <code>editorHeight</code>, <code>editorWidthPercentage</code>, <code>showTabs</code> and <code>showConsole</code>.</p>
      <Sandpack
        template="react"
        options={{
          // NOTE: Below props can be passed to <SandpackCodeEditor /> component as well!
          showLineNumbers: true, // default - false
          // Note: Value of `showInlineErrors` only updates in sandpack if we completely refresh the page using browser refresh or ctrl+r or F5 key
          showInlineErrors: true, // default - false (Note: When this option is `true` then the *line* in code editor is shown *red* at which the error is e.g., `cannot access property of undefined`)
          wrapContent: true, // default - false
          editorHeight: 'auto', // default - 300
          // Note: Value of `editorWidthPercentage` only updates in sandpack if we completely refresh the page using browser refresh or ctrl+r or F5 key
          editorWidthPercentage: 60, // default - 50
          showTabs: true, // By defautl tabs are only shown if there are more than 1 file
          showConsole: true, // default - false
        }}
        files={{
          "/App.js": `
import ReactMarkdown from 'react-markdown' 
import { DateTime } from 'luxon';
var _ = require('lodash');

export default function App() {
  return (
    <div>
      <h1>Learn Luxon</h1>
      {DateTime.now().toJSDate().toISOString()}
      
      <h1>Learn React Markdown</h1>
      <ReactMarkdown>
        I love **markdown** because its *amazing*!
      </ReactMarkdown>

      <h1>Learn Loadsh</h1>
      {_.sortBy([3, 1, 2])}
    </div>
  )
}`.trim()
        }}
        theme={nightOwl}
        customSetup={{
          dependencies: {
            "react-markdown": "latest",
            "luxon": "latest",
            "lodash": "latest",
          }
        }} />
    </>
  )
}

export const Basic4 = () => {
  return (
    <>
      <h1>Basic 4 - Static Template</h1>
      <Sandpack
        template="static"
        options={{
          editorHeight: 'auto'
        }}
      />
    </>
  )
}

export const Basic3 = () => {
  // When we use <SandpackProvider/> we need to use use `editorHeight` like that:
  const editorHeight = 'auto'
  return (
    <div>
      <h1>Basic 3 - Show Active File, Using custom refresh button, Hide Default Refresh, Hide <code>Open in CodeSandbox</code> Buttons</h1>
      <SandpackProvider
        template="react"
        files={{
          '/App.js': `export default function App(){
  return <div>Hello world</div>
}`,
          '/Button.js': 'export default function Button(){}',
          '/Card.js': 'export default function Card(){}',
        }}
      >
        <ActiveFileDisplay /> {/* This displays the active file path. */}
        <SandpackLayout style={{ border: '1px solid red' }}>
          <CustomRefreshButton />
          <SandpackCodeEditor style={{ height: editorHeight }} />
          {/* Hide the default buttons */}
          <SandpackPreview showOpenInCodeSandbox={false} showRefreshButton={false} style={{ height: editorHeight }} />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  )
}

export const Basic = () => {
  return (
    <>
      <h1>Basic</h1>
      <Sandpack
        template="react"
        options={{
          // showConsole: true, // default: false
          editorHeight: 'auto'
        }}
      />
    </>
  )
}

// React template uses `create-react-app`, with a root /index.js, an /App.js, and a /public/index.html.
// we can overwrite any of these files with the `files` prop:
const files = {
  // File 1
  '/App.js': `
import './index.css';
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h1>Good day!</h1>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}
export default App;
`.trim(),
  // File 2
  '/index.css': `
h1 {
  color: tomato;
}
`.trim(),
};

export const Basic2 = () => {
  return (
    <div>
      <h1>Basic 2 - Show Preview below the CodeEditor</h1>
      <SandpackProvider template="react" files={files} >
        <SandpackLayout style={{ border: '1px solid red' }}>
          <div style={{ width: '100%' }}>
            <SandpackCodeEditor />
            <SandpackPreview />
          </div>
        </SandpackLayout>
      </SandpackProvider>
    </div>
  )
}

export const Basic1 = () => {
  return <div>
    <h1>Basic 1 - Using custom files</h1>
    <Sandpack
      template="react"
      files={files}
      theme={nightOwl}
      options={{
        editorHeight: 'auto'
      }}
    />
  </div>
}
