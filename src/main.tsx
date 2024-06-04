import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createHashRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.tsx";
import CalendarPage from "./pages/CalendarPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import FaqPage from "./pages/FaqPage.tsx";
import EventsProvider from "./contexts/EventsProvider.tsx";
import EventsPage from "./pages/EventsPage.tsx";
import BlogPage from "./pages/BlogPage.tsx";
import BlogPostDetailsPage from "./pages/BlogPostDetailsPage.tsx";
import CheckoutPage from "./pages/CheckoutPage.tsx";
import OrderSuccessPage from "./pages/OrderSuccessPage.tsx";
import EventDetailsPage from "./pages/EventDetailsPage.tsx";
import PrivacyPolicyRedirect from "./pages/legal/PrivacyPolicyRedirect.tsx";
import LegalPage from "./pages/legal/LegalPage.tsx";
import TermsOfUseRedirect from "./pages/legal/TermsRedirect.tsx";

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
		path: "/events",
		element: <EventsPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/events/:eventId",
		element: <EventDetailsPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/blog",
		element: <BlogPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/blog/:postId",
		element: <BlogPostDetailsPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/checkout/:eventId/:ticketQuantity",
		element: <CheckoutPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/order-complete",
		element: <OrderSuccessPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/legal",
		element: <LegalPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/legal/privacy",
		element: <PrivacyPolicyRedirect />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/legal/terms",
		element: <TermsOfUseRedirect />,
		errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<EventsProvider>
			<RouterProvider router={router} />
		</EventsProvider>
	</React.StrictMode>
);
