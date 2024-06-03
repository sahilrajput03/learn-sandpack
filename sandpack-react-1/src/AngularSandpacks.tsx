import { SandpackCodeEditor, SandpackLayout, SandpackPreview, SandpackProvider } from "@codesandbox/sandpack-react";
import { ActiveFileDisplay } from "./components/ActiveFileDisplay";

export const Angular1 = () => {
  const files = {
    '/src/app/app.component.ts': `

import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  helloWorld = "Hello India!";
}           
    `.trim()
  }
  
  return (
    <SandpackProvider
      files={files} 
      theme="light" 
      template="angular"
    >
        <ActiveFileDisplay /> {/* This displays the active file path. */}
        <SandpackLayout >
          <SandpackCodeEditor showTabs />
          <SandpackPreview showOpenInCodeSandbox={false} showRefreshButton={true} />
        </SandpackLayout>

        </SandpackProvider>
  )  
}