import { Link } from "react-router-dom";

const Banner = () => {
      return (
            <section className="relative pb-8 h-[80vh]" >
                  <div>
                        <img
                              src="https://i.ibb.co/q9QcF21/istockphoto-1371325578-612x612.jpg"
                              className="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full"
                              alt=""
                        />
                        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center bg-gray-900/75">
                              <div className="z-10 max-w-6xl px-4 mx-auto ">
                                    <h2 className="mt-2 mb-4 text-xl font-bold leading-tight text-white md:text-5xl md:leading-tight lg:leading-tight g">
                                    Master Your Tasks with Task Management Plateform
                                    </h2>
                                    <p className="mb-8 text-base leading-8 text-gray-400 lg:text-xl">
                                    Effortless Task Management for Individuals and Teams
                                    </p>
                                    <div className="items-center justify-start block gap-4 md:flex">
                                          <Link to={'/dashboard/todo-list'} className="block px-5 py-3 mb-4 text-sm font-semibold text-center text-gray-100 transition duration-200 bg-green-600 rounded md:mb-0 md:inline-block ">
                                           Let’s Explore
                                          </Link>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>

      );
};

export default Banner;