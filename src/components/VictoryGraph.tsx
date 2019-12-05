// import * as V from 'victory';


// <VictoryStack>
//   <VictoryArea
//     data={[{x: "a", y: 2}, {x: "b", y: 3}, {x: "c", y: 5}]}
//   />
//   <VictoryArea
//     data={[{x: "a", y: 1}, {x: "b", y: 4}, {x: "c", y: 5}]}
//   />


// <VictoryStack
//   colorScale={["tomato", "orange", "gold"]}
// >
//   <VictoryBar
//     data={[{x: "a", y: 2}, {x: "b", y: 3}, {x: "c", y: 5}]}
//   />
//   <VictoryBar
//     data={[{x: "a", y: 1}, {x: "b", y: 4}, {x: "c", y: 5}]}
//   />
//   <VictoryBar
//     data={[{x: "a", y: 3}, {x: "b", y: 2}, {x: "c", y: 6}]}
//   />
// </VictoryStack>

// <VictoryStack
//   events={[{
//     childName: "all",
//     target: "data",
//     eventHandlers: {
//       onClick: () => {
//         return [
//           {
//             childName: "area-2",
//             target: "data",
//             mutation: (props) => ({ style: Object.assign({}, props.style, { fill: "gold" }) })
//           }, {
//             childName: "area-3",
//             target: "data",
//             mutation: (props) => ({ style: Object.assign({}, props.style, { fill: "orange" }) })
//           }, {
//             childName: "area-4",
//             target: "data",
//             mutation: (props) => ({ style: Object.assign({}, props.style, { fill: "red" }) })
//           }
//         ];
//       }
//     }
//   }]}
// >
//   <VictoryArea name="area-1" data={sampleData}/>
//   <VictoryArea name="area-2" data={sampleData}/>
//   <VictoryArea name="area-3" data={sampleData}/>
//   <VictoryArea name="area-4" data={sampleData}/>
// </VictoryStack>