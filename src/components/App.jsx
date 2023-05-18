import MainPage from "pages/MainPage/MainPage";
import { Route,Routes } from "react-router-dom";
import RegisterPage from "pages/RegisterPage/RegisterPage";
import LoginPage from "pages/LoginPage/LoginPage";
import NewsPage from "pages/NewsPage/NewsPage";
import NoticesPage from "pages/NoticesPage/NoticesPage";
import OurFriendsPage from "pages/OurFriendsPage/OurFriendsPage";
import UserPage from "pages/UserPage/UserPage";
import NoticesCategoriesList from "./NoticesCategoriesList/NoticesCategoriesList";
import { SharedLayout } from "./SharedLayout";


export const App = () => {
  return (
      
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        
        <Route path="news" element={<NewsPage />}/>
        <Route path="notices" element={<NoticesPage />}/>
        <Route path="friends" element={<OurFriendsPage/>}/>
        <Route path="main" element={<MainPage />}/>
        <Route path="register" element={<RegisterPage />}/>
        <Route path="login" element={<LoginPage />}/>
        <Route path="user" element={<UserPage />}/>
        <Route path="/notices/:categoryName" element={<NoticesPage />}>
          <Route path="/notices/sell" element={<NoticesCategoriesList />} />
          <Route path="/notices/lost-found" element={<NoticesCategoriesList />} />
          <Route path="/notices/for-free" element={<NoticesCategoriesList />} />
        </Route>

     

      </Route>
    </Routes>
  )
    
  
};
