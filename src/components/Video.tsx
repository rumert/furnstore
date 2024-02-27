import { list } from "@vercel/blob"

export async function VideoComponent({ fileName }: any) {

  const response = await list();

  console.log(response)
 
  return (
    <video controls preload="none" aria-label="Video player">
      <source src={''} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}
