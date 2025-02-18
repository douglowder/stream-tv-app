import { createSlice, isDraft } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/src/createAction';
import { TEventVideo } from '@services/types/models';

interface VideoState {
  performanceVideoURLErrorString: string;
  // TODO: if necessary, handle other types of videos
  // Currently available: trailers and behind-the-scenes videos
  eventVideoList: Array<TEventVideo>; // Get the event type from here 
  videosLoaded: boolean;
}

const initialState: VideoState = {
  performanceVideoURLErrorString: '',
  eventVideoList: [],
  videosLoaded: false
};

const videoURLsSlice = createSlice({
  name: 'videoURLs',
  initialState,
  reducers: {
    getVideoListLoopStart: (state: VideoState) => {
      (state: VideoState) => state
    },
    getVideoListLoopStop: (state: VideoState) => {
      (state: VideoState) => state
    },
    getVideoListLoopSuccess: (state: VideoState, action: PayloadAction<Array<TEventVideo>>)  => {
      state.eventVideoList = action.payload;
      state.videosLoaded = true;
    },
    getPerformanceVideoURL: (state: VideoState, action: PayloadAction<string>) => {
      (state: VideoState) => state
    },
    performanceVideoURLReceived: (state: VideoState, action: PayloadAction<{url: string, id: string}>) => {
      const { id, url } = action.payload;
      
      state.eventVideoList = state.eventVideoList.map((eventVideo, _index) => {
        if(eventVideo.id !== id) {
          return eventVideo;
        }
        const newEventVideo = {
          id,
          performanceVideoURL: url,
          video_type: eventVideo.video_type
        };
        return {
          ...eventVideo,
          ...newEventVideo
        }
      });
    },
    getPerformanceVideoURLError: (state: VideoState, action: PayloadAction<string>) => {
      state.performanceVideoURLErrorString = action.payload;
    },
  }
});

export const {
  getVideoListLoopStart,
  getVideoListLoopSuccess,
  getVideoListLoopStop,
  getPerformanceVideoURL,
  performanceVideoURLReceived,
  getPerformanceVideoURLError,
} = videoURLsSlice.actions;

export const { reducer, name } = videoURLsSlice;
