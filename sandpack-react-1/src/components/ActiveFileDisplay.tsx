import { useSandpack } from "@codesandbox/sandpack-react";

export function ActiveFileDisplay() {
	const { sandpack } = useSandpack();

	return (
		<h1>Active file: {sandpack.activeFile}</h1>
	);
}