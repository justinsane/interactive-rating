import React, { useState } from "react";

function App() {
  const [rating, setRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating !== null) {
      setSubmitted(true);
    }
  };

  return (
    <main className="relative m-4 h-custom-26em max-w-md rounded-3xl  bg-gradient-to-t from-dark-blue/30 to-dark-blue/90  p-8 text-white">
      {submitted ? (
        <ThankYou rating={rating} />
      ) : (
        <Rating
          setRating={setRating}
          handleSubmit={handleSubmit}
          rating={rating}
        />
      )}
    </main>
  );
}

function Rating({ setRating, handleSubmit, rating }) {
  const handleRatingChange = (e) => {
    setRating(Number(e.target.value));
  };

  return (
    <section>
      <div className="relative mb-9 flex h-11 w-11 items-center justify-center">
        <span className="absolute left-0 top-0 h-11 w-11 rounded-full bg-light-gray/10"></span>
        <img src="./icon-star.svg" alt="star image" className="relative z-10" />
      </div>
      <h1 className="mb-3 text-3xl font-medium">How did we do?</h1>
      <p className="mb-6 text-light-gray">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between">
          {[...Array(5).keys()].map((_, index) => {
            const value = index + 1;
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={value}
                  className="hidden"
                  onChange={handleRatingChange}
                />
                <div
                  className={`group relative mb-4 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full ${
                    rating === value ? "bg-white" : "bg-light-gray/10"
                  } hover:bg-orange`}
                >
                  <p
                    className={`relative z-10 font-bold ${
                      rating === value
                        ? "text-very-dark-blue"
                        : "group-hover:text-very-dark-blue"
                    }`}
                  >
                    {value}
                  </p>
                </div>
              </label>
            );
          })}
        </div>
        <button
          type="submit"
          className="mb-3 mt-2 w-full rounded-3xl bg-orange p-3 text-center font-bold uppercase tracking-widest text-very-dark-blue hover:bg-white sm-375:mt-0"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

function ThankYou({ rating }) {
  return (
    <section className=" flex flex-col items-center px-5">
      <img
        src="./illustration-thank-you.svg"
        alt="thank you illustration"
        className="w-42 mb-6 mt-5"
      />
      <div className="top-44 mt-2 rounded-xl bg-light-gray/10 px-4 py-1">
        <p className=" text-orange/70 ">You selected {rating} out of 5</p>
      </div>

      <h1 className="mb-2 mt-10 text-3xl font-medium">Thank you!</h1>
      <p className="mt-1 text-center text-light-gray/80">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </section>
  );
}

export default App;
