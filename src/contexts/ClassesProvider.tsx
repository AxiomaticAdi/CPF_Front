import React, { ReactNode, useState, useEffect } from "react";
import ClassesContext from "./ClassesContext";
import { CookingClass } from "../types";
import { fetchCookingClasses } from "../services/fetchClassesService";

interface ClassesProviderProps {
	children: ReactNode;
}

const ClassesProvider: React.FC<ClassesProviderProps> = ({ children }) => {
	const [cookingClasses, setCookingClasses] = useState<CookingClass[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		fetchCookingClasses().then((classes) => {
			setCookingClasses(classes);
			setIsLoading(false);
		});
	}, []);

	return (
		<ClassesContext.Provider value={{ classes: cookingClasses, isLoading }}>
			{children}
		</ClassesContext.Provider>
	);
};

export default ClassesProvider;
