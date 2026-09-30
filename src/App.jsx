// function App() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <h1 className="text-4xl font-bold text-blue-600">Ecommerce</h1>
//     </div>
//   );
// }

// export default App;



import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold text-blue-600">Setup OK</h1>
          </div>
        }
      />
    </Routes>
  )
}

export default App