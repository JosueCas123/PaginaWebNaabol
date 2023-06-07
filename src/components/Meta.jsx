import React from "react";

export const Meta = () => {
  return (
    <>
      <div className="relative">
        <Link
          to="http://sare.naabol.gob.bo/ifis-appv3/public/metar"
          target="_blanck"
        >
          <button
            className="fixed bottom-40 right-0
              p-3 bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500  text-white rounded-tl-lg z-10 text-lg md:text-2xl"
          >
            <i className="bx bx-cloud-lightning "></i> Meta
          </button>
        </Link>
      </div>
    </>
  );
};
