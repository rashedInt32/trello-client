import React, { useEffect, useState } from 'react';
import to from 'await-to-js';

import { config } from '../config';
import { http } from '../http';

import Layout from '../hoc/Layout';
import Card from '../components/card/Card';

function Boards({ history }) {
  const [boardData, setBoardData] = useState([]);

  useEffect(() => {
    getBoards();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      history.push("/login");
    }
  }, []);

  const getBoards = async () => {
    let [err, response] =
      await to(http.get(`${config.baseUrl}/board`));

    if (err) return err.response;
    setBoardData(response.data);
  };


  const RenderBoard = ({ data }) => {
    return data.map((board, index) => (
      <div className="col-lg-3" key={index}>
        <Card name={board.name} />
      </div>
    ));
  };

  return (
    <Layout>
      <div className="row">
        <div className="col-md-12 mb-4">
          <h3>Boards</h3>
        </div>
        {boardData && boardData.length > 0 ? (
          <RenderBoard data={boardData} />
        ) : null}
        <div className="col-lg-3">
          <Card name="Create new board" />
        </div>
      </div>
    </Layout>
  );
}

export default Boards;
