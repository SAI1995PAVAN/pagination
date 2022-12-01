import "./App.css";
import { useState, useEffect } from "react";
import pagination from "./pagination.js";
import ProfileList from "./Components/ProfilesList/ProfileList";

function App() {
  const [loading, setLoading] = useState(true);
  const [profilesData, setProfilesData] = useState([]);
  const [profilesDisplayed, setProfilesDisplayed] = useState([]);
  const [page, setPage] = useState(0);

  const fetchProfiles = async () => {
    let url = "https://api.github.com/users/john-smilga/followers?per_page=100";
    setLoading(true);
    try {
      let response = await fetch(url);
      let data = await response.json();

      setProfilesData(pagination(data));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.response);
    }
  };

  const handlePage = (index) => {
    setPage(index);
  };

  const handleIndex = (index) => {
    if (index >= profilesData.length) {
      return 0;
    }
    if (index < 0) {
      return profilesData.length - 1;
    }
    return index;
  };

  const handlePrev = () => {
    setPage(handleIndex(page - 1));
  };

  const handleNext = () => {
    setPage(handleIndex(page + 1));
  };

  useEffect(() => {
    if (loading) return;
    setProfilesDisplayed(profilesData[page]);
  }, [loading, page, profilesData]);

  useEffect(() => {
    fetchProfiles();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>{loading ? "...Loading" : "Pagination"}</h1>
      </header>
      <div className="profile-list-component">
        <ProfileList profilesData={profilesDisplayed} />
        {!loading && (
          <section className="page-buttons">
            <button className="prev-next" onClick={handlePrev}>
              Prev
            </button>
            {profilesData.map((group, index) => {
              return (
                <button
                  onClick={() => {
                    handlePage(index);
                  }}
                  key={index}
                  className={
                    index === page ? "page-button active" : "page-button"
                  }
                >
                  {index + 1}
                </button>
              );
            })}
            <button onClick={handleNext} className="prev-next">
              Next
            </button>
          </section>
        )}
      </div>
    </div>
  );
}

export default App;
