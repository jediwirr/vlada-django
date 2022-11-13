import { API_URL } from './constants';

class AlbumsService {
  async fetchAlbums() {
    const response = await (await fetch(`${API_URL}albums`)).json();
    return response;
  }

  async fetchParentAlbums() {
    const response = await (await fetch(`${API_URL}parentalbums`)).json();
    return response;
  }
}

const albumsService = new AlbumsService();
export default albumsService;
