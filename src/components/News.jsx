import React, { useContext } from "react";
import moment from "moment";
import "moment/locale/en-gb";
import { NewsContext } from "../../contexts/NewsContext";
import { htmlAsStringFormate } from "./common/util";
import NewsCard from "./NewsCard";
import Loading from "./Loading";

const NewsPage = () => {
  const {
    newsItems,
    isLoading,
    sortingQuery,
    sportsNewsItems,
    setSortingQuery,
    searchQuery,
    gotoDetails,
  } = useContext(NewsContext);
  const onchange = (e) => {
    setSortingQuery(e.target.value);
  };
  const isSearchableNews = searchQuery.length > 0 && newsItems.length > 0;
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-row justify-between mb-4">
            <h1 className="text-3xl font-bold mb-1 text-gray-900">
              <span>{isSearchableNews ? "Search results" : "Top Stories"}</span>
            </h1>
            {!isSearchableNews && (
              <form className="w-full max-w-sm p-2">
                <div className="flex items-center border-b-2 border-blue-500 py-2">
                  <select
                    value={sortingQuery}
                    onChange={onchange}
                    name="Article Sorting"
                    id="Article-Sorting"
                    className="border-none w-full text-[#000000] mr-3 py-1 px-1 leading-tight focus:outline-none"
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                  </select>
                </div>
              </form>
            )}
          </div>
          {isSearchableNews ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 xl:gap-6">
              {newsItems?.map((item) => (
                <NewsCard item={item} key={item.id} />
              ))}
            </div>
          ) : (
            <>
              <div className="flex flex-row gap-4 xl:gap-6 mb-4">
                <div className="basis-[50%]">
                  {newsItems[0] && (
                    <div
                      onClick={() => gotoDetails(newsItems[0])}
                      key={newsItems[0].id}
                      className="drop-shadow-md overflow-hidden shadow-lg bg-gray-800 hover:shadow-xl transition-all duration-300 border-b-4 border-[#388E3C]"
                    >
                      <img
                        src={newsItems[0]?.fields.thumbnail}
                        alt={newsItems[0]?.webTitle}
                        className="w-full h-96 object-cover object-center"
                      />
                      <div className="p-4">
                        <h2 className="text-xl font-bold mb-2 text-white">
                          {newsItems[0].webTitle}
                        </h2>
                        <div className="text-sm mb-1 text-white truncate w-[550px]">
                          {htmlAsStringFormate(newsItems[0].fields.body)}
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <p className="text-gray-400 text-sm font-bold mb-2">
                            {moment(newsItems[0].webPublicationDate).fromNow()}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="basis-[50%]">
                  <div className="flex flex-row gap-4 xl:gap-6 mb-6">
                    <div className="basis-[50%]">
                      {newsItems[1] && (
                        <div
                          onClick={() => gotoDetails(newsItems[1])}
                          key={newsItems[1].id}
                          className="h-80 drop-shadow-md overflow-hidden shadow-lg bg-gray-800 hover:shadow-xl transition-all duration-300 border-b-4 border-[#D32F2F]"
                        >
                          <img
                            src={newsItems[1]?.fields.thumbnail}
                            alt={newsItems[1].webTitle}
                            className="w-full h-40 object-cover object-center"
                          />
                          <div className="p-4">
                            <h2 className="text-xl font-bold mb-2 text-white h-24">
                              {newsItems[1].webTitle}
                            </h2>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="basis-[50%]">
                      {newsItems[2] && (
                        <div
                          onClick={() => gotoDetails(newsItems[2])}
                          key={newsItems[2].id}
                          className="h-80 drop-shadow-md overflow-hidden shadow-lg bg-gray-800 hover:shadow-xl transition-all duration-300 border-b-4 border-[#FFC107]"
                        >
                          <img
                            src={newsItems[2]?.fields.thumbnail}
                            alt={newsItems[2].webTitle}
                            className="w-full h-40 object-cover object-center"
                          />
                          <div className="p-4">
                            <h2 className="text-xl font-bold mb-2 text-white h-24">
                              {newsItems[2].webTitle}
                            </h2>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 xl:gap-6 mb-6">
                    <div className="basis-[50%]">
                      {newsItems[3] && (
                        <div
                          onClick={() => gotoDetails(newsItems[3])}
                          key={newsItems[3].id}
                          className="h-40 drop-shadow-md overflow-hidden shadow-lg bg-gray-800 hover:shadow-xl transition-all duration-300 border-b-4 border-[#2196F3]"
                        >
                          <div className="p-4 pb-8">
                            <h2 className="text-xl font-bold mb-2 text-white h-24">
                              {newsItems[3].webTitle}
                            </h2>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="basis-[50%] pb-2">
                      {newsItems[4] && (
                        <div
                          onClick={() => gotoDetails(newsItems[4])}
                          key={newsItems[4].id}
                          className="h-40 drop-shadow-md overflow-hidden shadow-lg bg-gray-800 hover:shadow-xl transition-all duration-300 border-b-4 border-[#388E3C]"
                        >
                          <div className="p-4">
                            <h2 className="text-xl font-bold mb-2 text-white h-24">
                              {newsItems[4].webTitle}
                            </h2>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 xl:gap-6">
                {newsItems?.map(
                  (item, index) =>
                    index > 4 && <NewsCard item={item} key={item.id} />
                )}
              </div>
              <div className="flex flex-col mb-7">
                <h1 className="text-2xl font-bold mt-3 mb-0 pb-0 text-gray-900">
                  <span>Sprots</span>
                </h1>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 xl:gap-6">
                {sportsNewsItems?.map((item) => (
                  <NewsCard item={item} key={item.id} />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default NewsPage;
