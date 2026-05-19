'use client';

import { useEffect, useRef } from 'react';

export default function LaudoTecnicoPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1;
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-4xl space-y-6">
        <video
          ref={videoRef}
          controls
          muted={false}
          playsInline
          className="w-full rounded-[32px] bg-black"
          onPlay={() => {
            if (videoRef.current) {
              videoRef.current.muted = false;
              videoRef.current.volume = 1;
            }
          }}
        >
          <source src="/videos/video-laudo-tecnico-1.mp4" type="video/mp4" />
          Seu navegador não suporta este vídeo.
        </video>

        <a
          href="/videos/video-laudo-tecnico-1.mp4"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-black font-semibold hover:bg-gray-200 transition"
        >
          Abrir em nova aba
        </a>
      </div>
    </main>
  );
}
