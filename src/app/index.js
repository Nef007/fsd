import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "widget/header";
import ContactsPage from "page/contacts";
import TagsPage from "page/tags";
import { Notification } from "features/Notification";

function App() {
  return (
    <>
      <Notification />
      <Header />
      <main className="main-content">
        <div className="container">
          <Routes>
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/tags" element={<TagsPage />} />
            <Route path="/*" element={<Navigate replace to="/contacts" />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
