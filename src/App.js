import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {HeaderContextProvider} from "./common/HeaderContextProvider";
import {login} from "./store/slice/authSlice";
import Root from "./layout/Root";
import Index from "./layout/Index";
import Contents from "./packages/content/content/Contents";
import CreateContent from "./packages/content/content/Create";
import ViewContent from "./packages/content/content/View";
import './assets/css/mobile.css';
import './assets/css/tablet.css';
import './assets/css/computer.css';
function App() {

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  useEffect(() => {
    const storedUser = localStorage.getItem('loginUser');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      dispatch(login(user));
    }
  }, [dispatch]);

  return (
      <HeaderContextProvider>
        <Router>
            <Routes>
                <Route path="/" element={<Root />} >
                <Route index element={<Index />} />
                <Route path="/content" element={<Contents />} />
                <Route path="/content/create" element={<CreateContent />} />
                <Route path="/content/update/:id" element={<ViewContent />} />
            </Route>
            </Routes>
        </Router>
    </HeaderContextProvider>
  );
}

export default App;
