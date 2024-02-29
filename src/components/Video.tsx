'use client'
import MuxPlayer from '@mux/mux-player-react';

export function VideoComponent({ playbackId }: any) {
 
  return <MuxPlayer streamType="on-demand" playbackId={playbackId} />;
}
