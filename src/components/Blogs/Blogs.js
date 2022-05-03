import React from "react";
import { Table } from "react-bootstrap";

const Blogs = () => {
  return (
    <div style={{ marginTop: "100px" }} className="container">
      <h2 className="text-start">
        Q1. What are the differences between Javascript and Node.js?
      </h2>
      <p className="mt-3 text-start">
        <b>Answer: </b>Here are the differences between Javascript and Node.js:{" "}
      </p>
      <Table bordered>
        <thead>
          <tr>
            <th className="text-center">Javascript</th>
            <th className="text-center">Node.js</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-start">
              <b>Javascript</b> is used on the client-side..
            </td>
            <td className="text-start">
              {" "}
              <b>Node.js</b> is mostly used on the server-side.
            </td>
          </tr>
          <tr>
            <td className="text-start">
              <b>Javascript</b> is capable of adding HTML and it can interact
              with the DOM.
            </td>
            <td className="text-start">
              On the oter hand <b>Node.js</b> does not have capability to add
              HTML tags.
            </td>
          </tr>
          <tr>
            <td className="text-start">
              <b>Javascript</b> can run in any browser engine such as JS core in
              safari and Spidermonkey in Firefox and V8 Engine in Google Chrome.
            </td>
            <td className="text-start">
              V8 is the Javascript engine inside of <b>Node.js</b> which parses
              and runs Javascript.
            </td>
          </tr>
          <tr>
            <td className="text-start">
              <b>Javascript</b> is used in frontend development.
            </td>
            <td className="text-start">
              <b>Node.js</b> is used in server-side development.
            </td>
          </tr>
        </tbody>
      </Table>
      <div className="text-start  mt-5">
        <h2>
          Q2. When When should you use Nodejs and when should you use Mongodb?
        </h2>
        <p>
          <b>Answer: </b>
        </p>
        <h3>When I should use Nodejs:</h3>
        <p>
          If any project needs a programming environment as well as a runtime
          library that offers basic programming tools/support and can compile
          and/or interpret the code. Nodejs is such as tool for the Javascript
          programming language. There are other similar tools for other
          languages such as Python, Java, PHP, C#, C++, Go, etc. So, if I want
          to write some kind of stand-alone program or server in Javascript,
          then I can use nodejs for it.
        </p>
        <h3>When I should use Mongodb:</h3>
        <p>
          If my application needs the ability to persistently store data in a
          way that I can efficiently query or update it later, then I would
          normally use some form of database. There are dozens of popular
          databases. MongoDB is one such database.MonogDB is a database system
          which gives me a chance to efficiently store documents in a database
          as well as to perform operations like data updates, or to search
          documents by some criterias.
        </p>
      </div>
      <div className="text-start mt-5">
        <h2>Q3. What are the differences between SQL and NoSQL databases?</h2>
        <p>
          <b>Answer: </b>The main differences between SQL and NoSQL are:
        </p>
        <ul>
          <li>
            SQL databases are relational , on the other hand NoSQL databases are
            non-relational
          </li>
          <li>
            Structured Query Language is used in SQL databases and those
            databases have a predefined schema.But NoSQL databases have dynamic
            schemas for unstructured data
          </li>
          <li>
            SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable
          </li>
          <li>
            SQL databases are mainly table-based, while NoSQL databases are
            mainly document, key-value, graph, or wide-column stores.
          </li>
          <li>
            SQL databases are good for multi-row transactions, while NoSQL is
            good for unstructured data such as documents or JSON.
          </li>
        </ul>
      </div>
      <div className="text-start mt-5">
        <h2>Q4. What is the purpose of JWT and how does it work?</h2>
        <p>
          <b>Answer: </b>JWT which is also known as JSON Web Token, is an open
          standard which is used to share security information between two
          parties — a client and a server. Each JWT contains JSON objects which
          are encoded which include a set of claims. JWTs are signed using a
          cryptographic algorithm so that it can ensure that the claims cannot
          be altered after the token is issued.
        </p>
        <p>
          <b>How JWT Works: </b>A JWT is a string which is consists of three
          parts. These parts are separated by dots (.), and serialized using
          base64. In the most common serialization format, compact
          serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
          Once decoded, user will get two JSON strings, these are:{" "}
          <li>
            <b>The header</b> and <b>payload</b>.
          </li>{" "}
          <li>
            <b>The signature.</b>
          </li>{" "}
          <br />
          The header contains the type of token — JWT in this case — and the
          signing algorithm. <br />
          <br />
          The payload contains the claims. This is displayed as a JSON string,
          usually containing no more than a dozen fields to keep the JWT
          compact. This information is typically used by the server to verify
          that the user has permission to perform the action they are
          requesting. There are no mandatory claims for a JWT, but overlaying
          standards may make claims mandatory. For example, when using JWT as
          bearer access token under OAuth2.0, iss, sub, aud, and exp must be
          present. some are more common than others.
          <br />
          <br />
          The signature ensures that the token hasn’t been altered. The party
          that creates the JWT signs the header and payload with a secret that
          is known to both the issuer and receiver, or with a private key known
          only to the sender. When the token is used, the receiving party
          verifies that the header and payload match the signature.{" "}
        </p>
      </div>
    </div>
  );
};

export default Blogs;
