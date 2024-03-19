import { useSandpackNavigation } from "@codesandbox/sandpack-react";
import { RefreshCw } from "react-feather";

function CustomRefreshButton() {
	const { refresh } = useSandpackNavigation();
	return (
		<button aria-label="Refresh page" onClick={refresh}>
			<RefreshCw size={24} />
		</button>
	);
}

export default CustomRefreshButton