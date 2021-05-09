import { SELECT_VIDEO } from "./video.types"

export const selectVideo = (video: any) => ({
  type: SELECT_VIDEO,
  payload: video
})

