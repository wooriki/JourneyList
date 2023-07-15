import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Main from "../pages/Main";
import Form from "../pages/Form";
import List from "../pages/List";
import Detail from "../pages/Detail";
import Layout from "../components/common/Layout";
import NotFound from "../pages/NotFound";

const queryClient = new QueryClient();

const Router = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Main />} />
                        <Route path="form" element={<Form />} />
                        <Route path="list" element={<List />} />
                        <Route path="list/:id" element={<Detail />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
};

export default Router;
