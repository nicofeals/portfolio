import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
// export default [
//   {
//     id: 1,
//     icon: <FaCode className="service-icon" />,
//     title: "web development",
//     text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
//   },
//   {
//     id: 2,
//     icon: <FaSketch className="service-icon" />,
//     title: "web design",
//     text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
//   },
//   {
//     id: 3,
//     icon: <FaAndroid className="service-icon" />,
//     title: "app design",
//     text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
//   },
// ]

// var queries = [
//   {
//     id: 1,
//     query: graphql`
//       {
//         file(relativePath: {eq: "c.png"}) {
//           id
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     `
//   },
//   {
//     id: 2,
//     query: graphql`
//       {
//         file(relativePath: {eq: "c+.png"}) {
//           id
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     `
//   },
//   {
//     id: 3,
//     query: graphql`
//       {
//         file(relativePath: {eq: "python.png"}) {
//           id
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     `
//   },
//   {
//     id: 4,
//     query: graphql`
//       {
//         file(relativePath: {eq: "java.png"}) {
//           id
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     `
//   },
//   {
//     id: 5,
//     query: graphql`
//       {
//         file(relativePath: {eq: "golang.png"}) {
//           id
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     `
//   },
//   {
//     id: 6,
//     query: graphql`
//       {
//         file(relativePath: {eq: "scala.png"}) {
//           id
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     `
//   },
//   {
//     id: 7,
//     query: graphql`
//       {
//         file(relativePath: {eq: "bash.png"}) {
//           id
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     `
//   },
// ];

// var lang_images = []
// var index = 0;
// queries.forEach(query => {
//   const {
//     file: {
//       childImageSharp: { fluid },
//     },
//   } = useStaticQuery(query)
//   lang_images.push({id: index+1, image: <Image fluid={fluid}/>});
// });
