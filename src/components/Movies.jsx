import { useState, useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { useContext } from "react";
import context from "../context/Context";
import axios from "axios";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";
const Movies = () => {
  const a = useContext(context);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const getdoc = async () => {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/api/getmovies");
      setData(response.data);

      setLoading(false);
    };
    getdoc();
  }, [a.istoken]);

  return (
    <div className="mt-7 grid p-3 lg:grid-cols-4 justify-items-center gap-4">
      {loading ? (
        <div className="flex items-center justify-center w-screen h-[80vh]">
          <InfinitySpin width="200" color="#4fa94d" />
        </div>
      ) : (
        data.map((e, i) => {
          return (
            <Link key={i} to={`/detail/${e._id}`}>
              <div className="p-4 w-full shadow-2xl  mx-auto hover:-translate-y-2 transition-all duration-500">
                <img
                  className="h-72 mt-5   min-w-full object-contain"
                  src={e.image}
                  alt="loading"
                />
                <div className="mt-2">
                  <p>
                    <span className="mr-2">Title:</span>
                    {e.title}
                  </p>
                  <p>
                    <span className="mr-2">Year:</span>
                    {e.year}
                  </p>
                  <div className="flex items-center">
                    <span className="mr-2">Ratings:</span>
                    <ReactStars
                      count={5}
                      size={20}
                      value={e.rating / e.rated}
                      edit={false}
                      color="#ffd700"
                    />
                  </div>
                </div>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
};

export default Movies;
