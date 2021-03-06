import { useEffect, useState } from "react";
import "./home.css";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    let result = await fetch(
      `https://api.unsplash.com/photos/random?client_id=yourapis&count=30`
    );
    result = await result.json();
    setPhoto([...photo, ...result]);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={photo.length}
        next={fetchApi}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className='photos'>
          {photo.map(item => (
            <img
              src={item.urls.regular}
              alt='img'
              className='photo'
              key={item.id}
            />
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default Home;
