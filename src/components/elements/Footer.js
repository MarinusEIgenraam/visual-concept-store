import React from "react";

const d = new Date();
const hour = d.getHours();

// useEffect(() => {
//   openCLose();
// }, []);
console.log("hours is", hour);

export default function Navigation(props) {
  return (
    <>
      <footer class="navbar fixed-bottom bg-light border-bot mr-0 ml-0 pl-0 pr-0">
        <div className="container">
          <div className="column">
            <h3 className="mt-4 sh">
              <strong>Treehouse Reel Esteate</strong>
            </h3>
            <h5 className="mb-5">Durability at your doorstep</h5>

            <footer className="mt-4">
              A disclaimer is generally any statement intended to specify or
              delimit the scope of rights and obligations that may be exercised
              and enforced by parties in a legally recognized relationship. In
              contrast to other terms for legally operative language, the term
              disclaimer usually implies situations that involve some level of
              uncertainty, waiver, or risk.
            </footer>
          </div>

          <div className="column"></div>
        </div>
      </footer>
    </>
  );
}
