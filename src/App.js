import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Albums from "pages/albums/albums";
import Album from "pages/album/album";
import { fetchAlbums, fetchAlbumPhotos } from "services/albums/albumervices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Albums />,
    loader: fetchAlbums,
  },
  {
    path: ":id",
    element: <Album />,
    loader: async ({ params }) => fetchAlbumPhotos(params.id),
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
