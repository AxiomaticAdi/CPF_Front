import React, { useEffect } from "react";

const TermsOfUseRedirect: React.FC = () => {
	useEffect(() => {
		window.location.href = `https://www.castlepeakfarmsd.com/terms-of-use.html`;
	}, []);

	return null;
};

export default TermsOfUseRedirect;
