import React, { useEffect } from "react";

const PrivacyPolicyRedirect: React.FC = () => {
	useEffect(() => {
		window.location.href = `https://www.castlepeakfarmsd.com/privacy-policy.html`;
	}, []);

	return null;
};

export default PrivacyPolicyRedirect;
