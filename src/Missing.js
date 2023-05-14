import React from 'react'
import { Link } from 'react-router-dom';

export default function Missing() {
  return (
    <div className="text-bg-dark text-center border border-danger border-4 rounded rounded-5 p-4">
        <p className="fw-bold" style={{ fontSize: "60px", margin: "0" }}>
          404
        </p>
        <h1>
          <span className="text-danger fw-bold">Oops! </span> Page not found.
        </h1>
        <p>The page you're looking for doesn't exist.</p>
        <Link className="btn btn-danger btn-lg px-3" to="/">
          Go Home
        </Link>
      </div>
  );
}
