import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createHashRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.tsx";
import CalendarPage from "./pages/CalendarPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import FaqPage from "./pages/FaqPage.tsx";
import ClassesProvider from "./contexts/ClassesProvider.tsx";
import ClassDetailsPage from "./pages/ClassDetailsPage.tsx";

const router = createHashRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/calendar",
		element: <CalendarPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/about",
		element: <AboutPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/faq",
		element: <FaqPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/classes/:classId",
		element: <ClassDetailsPage />,
		errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ClassesProvider>
			<RouterProvider router={router} />
		</ClassesProvider>
	</React.StrictMode>
);
