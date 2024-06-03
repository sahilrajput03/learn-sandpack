import './App.css'
import { Sandpack, SandpackCodeEditor, SandpackLayout, SandpackPreview, SandpackProvider } from '@codesandbox/sandpack-react';
import { nightOwl } from "@codesandbox/sandpack-themes";
import { ActiveFileDisplay } from './components/ActiveFileDisplay';
import CustomRefreshButton from './components/CustomRefreshButton';
import { useState } from 'react';
import { Angular1 } from './AngularSandpacks';

const IntroText = ({ toggleBasicFirst, isBasicFirst }: any) => <div>
      <h1>Learn <code>sandpack-react</code></h1>
      <p>Source: <a target='_blank' href='https://github.com/sahilrajput03/learn-sandpack'>github.com/sahilrajput03/learn-sandpack</a></p>
      <p>View code of below sandboxes: <a target='_blank' href='https://github.com/sahilrajput03/learn-sandpack/blob/main/sandpack-react-1/src/App.tsx'>Click here</a></p>
      <button onClick={toggleBasicFirst}>{isBasicFirst ? 'Show complex examples first' : 'Show basic example first'}</button>
</div>

export default function App() {
  const [isBasicFirst, setIsBasicFirst] = useState(true)
  const toggleBasicFirst = () => setIsBasicFirst(!isBasicFirst)

  const comps = [
    <Angular1 />,
    // <Basic5 />,
    // <Basic41 />,
    // <Basic4 />,
    // <Basic3 />,
    // <Basic2 />,
    // <Basic11 />,
    // <Basic1 />,
    // <Basic />,
  ]

  return (
    <div>
      {/* <IntroText toggleBasicFirst={toggleBasicFirst} isBasicFirst={isBasicFirst} /> */}

      {isBasicFirst ? comps.reverse() : comps}
    </div>
  )
}

export const Basic5 = () => {
  return (
    <>
      <h1>Basic 5 - With external dependencies</h1>
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
          // Note to Sahil: Currently it shows some error i.e, service worked not registered, please check readme file for the issue opened by a user on sandpack's official repository.
          // showConsole: true, // default - false
        }}
        files={{
          "/App.js": `
import ReactMarkdown from 'react-markdown' 
import { DateTime } from 'luxon';
import _ from 'lodash'

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

export const Basic41 = () => {
  return (
    <>
      <h1>Basic 4.1 - Static Template with custom code</h1>
      <Sandpack
        template="static"
        options={{
          editorHeight: 'auto'
        }}
        files={{
          '/index.html': `
<!DOCTYPE html>
<html>

<head>
  <title>Parcel Sandbox</title>
  <meta charset="UTF-8" />
  <link rel="stylesheet" href="/styles.css" />
</head>

<body>
  <h1>Heading 1</h1>
  <em>Emphasized text.</em>
  <mark>Highlighted text.</mark>
  <s>Striked text.</s>
  <small>Small text.</small>
  <strong>Strong or bold text.</strong>
  <sub>Subscript text.</sub>
  <sup>Superscript text.</sup>
  <div class="magic-text">I love this world!</div>

  <style>
    @keyframes colorChange {
      0% { color: red; background: black; }
      20% { color: white; background: red; }
      40% { color: blue; background: orange; }
      60% { color: white; background: pink; }
    }
    .magic-text {
      animation: colorChange 1s infinite;
    }
  </style>
</body>
  
</html>
          `.trim()
        }}
      />
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
      <h1>Basic 3 - Show Active File, with custom refresh button, Hide Default Refresh, Hide <code>Open in CodeSandbox</code> Buttons</h1>
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

export const Basic11 = () => {
  return <div>
    <h1>Basic 1.1 - Template <i>react-ts</i></h1>
    <Sandpack
      template="react-ts"
      theme={nightOwl}
      options={{
        editorHeight: 'auto'
      }}
    />
  </div>
}

export const Basic1 = () => {
  return <div>
    <h1>Basic 1 - Template <i>react</i> with custom files</h1>
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

export const Basic = () => {
  return (
    <>
      <h1>Basic - Template <i>react</i></h1>
      <Sandpack
        template="react"
        options={{
          // Show console by using `true` value (default: false)
          // showConsole: true,
          // Set editor height, (default: 300)
          editorHeight: 'auto',
          // Editor Width Percentage default: 50
          // editorWidthPercentage: 80,
        }}
      />
    </>
  )
}