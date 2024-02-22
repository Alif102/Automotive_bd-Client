import { Link } from "react-router-dom";

const LetsAdd = () => {
    return (
      <div>
        <div className="container px-6 py-16 mx-auto border-y-2 bg-base-100">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-3xl font-bold lg:text-4xl">
                  Les't Add your<br /> Desire{" "}
                  <span className="text-red-500 ">Car</span>
                </h1>

                <p className="mt-3 font-semibold">
                  Now you can add your desire car by adding a car from your
                  favorite brand and we will add it in our website for you
                </p>

                <Link to="/add-car">
                  <button  className="btn mt-5 p-3 bg-red-500 rounded-md text-white hover:bg-red-700">
                  Let's Add
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="w-full h-full lg:max-w-3xl rounded-full object-cover"
                src="https://i.ibb.co/RYMjZGc/john-matychuk-Fg-Tcok-Jpm9w-unsplash.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default LetsAdd;