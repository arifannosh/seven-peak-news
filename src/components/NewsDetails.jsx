import React, { useContext } from "react";
import { NewsContext } from "../../contexts/NewsContext";
import moment from "moment";
import "moment/locale/en-gb";

const NewsDetail = () => {
  const { articleDetails, setShowArticle } = useContext(NewsContext);
  return (
    <div className="flex flex-row mt-20">
      <div className="basis-[70%]">
        <p className="text-gray-400 text-sm font-bold mb-2">
          {moment(articleDetails.webPublicationDate).format('ddd DD MMM YYYY h:mm zz')}
        </p>
        <h2 className="text-xl font-bold mb-4 text-black">
          {articleDetails.webTitle}
        </h2>
        <h4 className="text-md font-bold mb-4 text-black">
          {articleDetails.fields.headline}
        </h4>
        <div className="text-sm mb-20 mt-10 text-black inline-block w-[auto]" dangerouslySetInnerHTML={{__html: articleDetails.fields.body}}>
        </div>
      </div>
      <div className="basis-[30%] ml-10">
      <div className="mb-30"></div>
        <div className="mt-40">
        <img
          src={articleDetails?.fields.thumbnail}
          alt={articleDetails.webTitle}
          className="w-full h-48 object-cover object-center"
        />
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
