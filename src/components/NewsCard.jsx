import React, { useContext } from "react";
import { htmlAsStringFormate } from "./common/util";
import { NewsContext } from "../../contexts/NewsContext";
import moment from "moment";
import "moment/locale/en-gb";

const NewsCard = (props) => {
  const { item } = props;
  const { gotoDetails } = useContext(NewsContext);
  return (
    <div
      onClick={() => gotoDetails(item)}
      key={item.id}
      className="drop-shadow-md overflow-hidden shadow-lg bg-gray-800 hover:shadow-xl transition-all duration-300 border-b-4 border-rose-600"
    >
        <img
          src={item?.fields.thumbnail}
          alt={item.webTitle}
          className="w-full h-48 object-cover object-center"
        />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 text-white">{item.webTitle}</h2>
        <div className="text-sm mb-1 text-white truncate">
          {htmlAsStringFormate(item.fields.body)}
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-gray-400 text-sm font-bold mb-2">
            {moment(item.webPublicationDate).fromNow()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
