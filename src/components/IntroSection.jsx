import React from "react";
// export default function IntroSection() {
//   return (
//     <section>
//       <h1 className="sentered">Lorem ipsum dolor sit amet.</h1>
//       <h3 className="sentered" style={{color: "#666"}}>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab veritatis
//         reiciendis debitis consequatur pariatur voluptate vitae officiis
//         architecto facere distinctio?
//       </h3>
//     </section>
//   );
// }

export default function IntroSection() {
  return React.createElement("section", null, [
    React.createElement(
      "h1",
      { className: "sentered", key: 1 },
      "Lorem ipsum dolor sit amet."
    ),
    React.createElement(
      "h3",
      { className: "sentered", style: { color: "#666" }, key: 2 },
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab veritatis reiciendis debitis consequatur pariatur voluptate vitae officiis architecto facere distinctio?"
    ),
  ]);
}
