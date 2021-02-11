import React from 'react';
import { Link } from 'react-router-dom';
const DashbourdPage = () => {
  return (
    <section>
      <h1>Dashbourd </h1>
      <Link to="/posts" className="button" >
        View Posts
      </Link>
    </section>
  );
}

export default DashbourdPage;