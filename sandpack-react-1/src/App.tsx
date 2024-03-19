import './App.css'
import { Sandpack, SandpackCodeEditor, SandpackLayout, SandpackPreview, SandpackProvider } from '@codesandbox/sandpack-react';
import { nightOwl } from "@codesandbox/sandpack-themes";
import { ActiveFileDisplay } from './components/ActiveFileDisplay';

export default function App() {
  return (
    <div>
      <Basic3 />
      <Basic2 />
      <Basic1 />
      <Basic />
      <BasicsOfSandpackReact />
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

export const Basic1 = () => {
  return <div>
    <h1>Basic 1 - Using custom files</h1>
    <Sandpack template="react" files={files} theme={nightOwl} />
  </div>
}

export const Basic2 = () => {
  return (
    <div>
      <h1>Basic 2 - Show Preview below the CodeEditor</h1>
      <SandpackProvider template="react" files={files} >
        <SandpackLayout style={{ border: '2px solid red' }}>
          <div style={{ width: '100%' }}>
            <SandpackCodeEditor />
            <SandpackPreview />
          </div>
        </SandpackLayout>
      </SandpackProvider>
    </div>
  )
}

export const Basic3 = () => {
  return (
    <div>
      <h1>Basic 3 - Show Active File</h1>
      <SandpackProvider
        template="react"
        files={{
          '/App.js': 'export default function App(){}',
          '/Button.js': 'export default function Button(){}',
          '/Card.js': 'export default function Card(){}',
        }}
      >
        <ActiveFileDisplay /> {/* This displays the active file path. */}
        <SandpackLayout style={{ border: '2px solid red' }}>
          <SandpackCodeEditor />
          <SandpackPreview />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  )
}

export const BasicsOfSandpackReact = () => {
  return <div>
    <h2> Basics of <code>sandpack-react</code> </h2>

    Docs: <a target='_blank' href='https://sandpack.codesandbox.io/docs'>https://sandpack.codesandbox.io/docs</a>

    <p>
      SandpackProvider is our main component, the one that takes a set of files and bundles them into an application. It then provides the necessary data to all child components via React context.
    </p>

    <p>
      There are lots of additional LEGO™ bricks for us to mix and match, including things like SandpackFileExplorer, SandpackConsole, and SandpackTests.
    </p>
    <p>
      For full customization, however, we need to access the underlying state. And that's where their custom hooks come in.
    </p>

    <p>
      This content is inspried from this blog - <a target='_blank' href="https://www.joshwcomeau.com/react/next-level-playground/">https://www.joshwcomeau.com/react/next-level-playground/</a>
    </p>
  </div>
}