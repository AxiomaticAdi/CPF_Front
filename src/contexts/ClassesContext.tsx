// src/contexts/ClassesContext.tsx

import { createContext } from "react";

// Define the type for your context state for better type checking
interface ClassesContextType {
	classes: any[]; // Replace `any` with your class type
	isLoading: boolean;
}

// Initial state
const initialState: ClassesContextType = {
	classes: [],
	isLoading: true,
};

// Create the context
const ClassesContext = createContext<ClassesContextType>(initialState);

export default ClassesContext;
