import { API_INSTANCE } from "services/api";

export const fetchAlbums = async () => {
  const res = await API_INSTANCE.get(`/albums`);

  return res.data;
};

export const fetchAlbumPhotos = async (id) => {
  const res = await API_INSTANCE.get(`/photos?albumId=${id}`);

  return res.data;
};
