import { API_URL } from './constants';

class VideoAlbumsService {
  async fetchAlbums() {
    const response = await (await fetch(`${API_URL}videoalbums`)).json();
    return response;
  }
}

const videoAlbumsService = new VideoAlbumsService();
export default videoAlbumsService;
