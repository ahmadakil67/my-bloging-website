import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [bookmarked, setBookMarked] = useState([]);
  const [readingCount, setReadingCount] = useState(0);

  const handleBookMark = (blog) => {
    setBookMarked([...bookmarked, blog]);
  };

  const handleReadingTime = (time, id) => {
    const newTime = readingCount+time
    setReadingCount(newTime);
    handleRemoveFromBookmark(id)

  };

  const handleRemoveFromBookmark = (id) =>{
    const remainingBookmark = bookmarked.filter((mark) => mark.id != id);
    setBookMarked(remainingBookmark);
  }
  console.log(readingCount);
  return (
    <>
      <Navbar></Navbar>

      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          <Blogs
            handleBookMark={handleBookMark}
            handleReadingTime={handleReadingTime}
          ></Blogs>
        </div>
        <div className="right-container w-[30%] bg-amber-50">
          <h1>Reading Time: {readingCount}</h1>
          <h1>Bookmarked: {bookmarked.length}</h1>
          {bookmarked.map((marked) => 
            <p className="bg-white p-3 m-3 shadow-2xl">{marked.title}</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
