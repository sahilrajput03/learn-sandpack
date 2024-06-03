import { SandpackCodeEditor, SandpackFileExplorer, SandpackLayout, SandpackPreview, SandpackProvider } from "@codesandbox/sandpack-react";
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
    helloWorld = "Hello India 123!";
    clickFunction(){
        alert(this.helloWorld);
    }
}           
    `.trim(),
    '/src/app/app.component.html': `
    <div><button (click)='clickFunction()'>Click Me</button></div>
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
            <SandpackFileExplorer />
          <SandpackCodeEditor showTabs />
          <SandpackPreview showOpenInCodeSandbox={false} showRefreshButton={true} />
        </SandpackLayout>

        </SandpackProvider>
  )  
}