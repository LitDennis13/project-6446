import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from '../components/error-page/error-page';
import AppLayout from '../components/app-layout/app-layout';
import CalendarViewer from '../components/calendar-viewer/calendar-veiwer';

const router = createBrowserRouter([
{
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
    {
        path: "/",
        element: <CalendarViewer />
    },
    ]
}
]);

export default router;