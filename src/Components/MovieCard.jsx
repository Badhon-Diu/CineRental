import { useContext, useState } from "react";
import star from "../assets/star.svg";
import { Moviecontext } from "../Context/Contextapi";
import getimageurl from "../data/imageurl";
import MovieDetailsModal from "./MovieDetailsModal";

export default function MovieCard({ movie }) {
  const [showmodal, setshowmodal] = useState(false);
  const [selectedmovie, setselectedmovie] = useState(null);
  function handlemodalclose() {
    setselectedmovie(null);
    setshowmodal(false);
  }

  const { handleAddtoCart } = useContext(Moviecontext);

  //console.log(selectedmovie);
  function handleselectedmovie(singlemovie) {
    setselectedmovie(singlemovie);
    setshowmodal(true);
  }
  return (
    <>
      {!!showmodal && (
        <MovieDetailsModal
          movie={selectedmovie}
          onmodalclose={handlemodalclose}
        ></MovieDetailsModal>
      )}
      <figure
        onClick={() => {
          handleselectedmovie(movie);
        }}
        className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
      >
        <img
          className="w-full rounded-lg object-cover"
          src={getimageurl(movie.cover)}
          alt=""
        />
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{movie.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
          <div className="flex items-center space-x-1 mb-5">
            {Array(movie.rating)
              .fill(1)
              .map((single, index) => (
                <img key={index} src={star} width={14} height={14} alt="" />
              ))}
          </div>
          <a
            onClick={(e) => handleAddtoCart(e, movie)}
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            href="#"
          >
            <img src="./assets/tag.svg" alt="" />
            <span>${movie.price} | Add to Cart</span>
          </a>
        </figcaption>
      </figure>
    </>
  );
}
