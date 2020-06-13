// src/pages/PostPage.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment";

import { fetchPost } from "../store/review/actions";
import { selectPostAndComments } from "../store/review/selectors";

export default function BrowseProducts() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  const postData = useSelector(selectPostAndComments);

  return (
    <>
      <div className="container pt-5">
        <div className="">
          <div className="card-body fh">
            <p className="ct centered">
              <strong>Welcome home</strong>
            </p>
            <p className="centered m-5 normal">
              Durability. Real estate is durable. A building can last for
              decades or even centuries,<br></br>
              and the land underneath it is practically indestructible. As a
              result, real estate<br></br>
              markets are modelled as a stock/flow market.
            </p>

            <p className="centered m-5 normal">
              <strong>Get inspired by our great houses</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
