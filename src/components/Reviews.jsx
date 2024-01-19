import { useEffect, useState } from "react";
import ReactStars from "react-stars";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import { TailSpin, ThreeDots } from "react-loader-spinner";
const Reviews = ({ id, prevRating, userRated }) => {
  const [star, setStar] = useState(0);
  const [loading, setLoading] = useState(false);
  const [thought, setThought] = useState();
  const [data, setData] = useState([]);
  const [added, setAdded] = useState(0);
  const [reviewLoading, setReviewLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      setReviewLoading(true);
      setData([]);
      const response = await axios.get(
        `http://localhost:3000/api/getreview/${id}`
      );
      setData([...data, response.data]);
      console.log(response.data);
      // (await querySnapshot).forEach((doc) => {
      //   setData((prev) => [...prev, doc.data()]);
      // });
      setReviewLoading(false);
    }
    getData();
  }, [added]);
  const sendReview = async () => {
    try {
      setLoading(true);
      // await addDoc(reviewsRef, {
      //   movieid: id,
      //   name: "Nischal",
      //   movie: "",
      //   timestamp: new Date().getTime(),
      //   rating: star,
      //   thought: thought,
      // });
      await axios.post(`http://localhost:3000/api/postreview/${id}`, {
        movieid: id,
        name: "Nischal",
        movie: "",
        timestamp: new Date().getTime(),
        rating: star,
        thought: thought,
      });
      await axios.post(`http://localhost:3000/api/updaterating/${id}`, {
        rating: prevRating + star,
        rated: userRated + 1,
      });
      // const ref = doc(db, "movies", id);
      // await updateDoc(ref, {
      //   rating: prevRating + star,
      //   rated: userRated + 1,
      // });

      toast("Review sent!!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setLoading(false);
      setStar(0);
      setThought("");
      setAdded(added + 1);
    } catch (error) {
      toast("error:" + error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <>
      <div className="mt-3 py-2 border-t-2 border-gray-200">
        <ReactStars
          value={star}
          onChange={(data) => setStar(data)}
          count={5}
          size={30}
          color="#ffd700"
        />
        <input
          value={thought}
          onChange={(e) => setThought(e.target.value)}
          className="border rounded border-gray-400 p-1.5 w-full "
          type="text"
          placeholder="Share your thoughts..."
        />
        <button
          onClick={sendReview}
          className="border rounded border-gray-400 flex justify-center bg-green-400 mt-2 p-1.5 w-full "
        >
          {loading ? <TailSpin height={25} color="white" /> : "Share"}
        </button>
        <ToastContainer />
        {reviewLoading ? (
          <div className="flex justify-center">
            <ThreeDots color="black" />
          </div>
        ) : (
          <div>
            {data.map((e, i) => {
              return (
                <div key={i}>
                  <div className="mt-2 bg-gray-500 text-white">
                    <p>{e.name}</p>
                    <p>{e.thought}</p>
                    <ReactStars
                      size={20}
                      half={true}
                      value={e.rating}
                      edit={false}
                    />
                    <p>{e.timestamp}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Reviews;
