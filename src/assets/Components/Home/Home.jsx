const Home = () => {
  return (
    <div>
      <h2 className="text-4xl text-bold">Search Location </h2>
      <div className="form-control w-full max-w-xs py-6">
        <label className="label">
          <span className="label-text">What is you want to search?</span>
        </label>

        <input
          type="text"
          placeholder="Search here"
          className="input input-bordered w-full max-w-xs"
        />

        <div
          className="flex
         justify-center py-2 gap-5"
        >
          <div className="dropdown dropdown-right">
            <label tabIndex={0} className="btn ">
              Type
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Location</a>
              </li>
              <li>
                <a>Restaurant</a>
              </li>
            </ul>
          </div>
          <button className="btn bg-[#808080]">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
