import { useMediaQuery } from 'react-responsive'

export function useMediaValues() {
	const isPortrait = useMediaQuery({ orientation: 'portrait' });
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
	const isMobile = useMediaQuery({ maxWidth: 767 });	
  
	return {
		isMobile,
		isTablet,
		isPortrait
	};
}



