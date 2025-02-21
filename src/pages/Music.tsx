import { Volume2 } from 'lucide-react';

const tracks = [
  {
    title: "Rhythmic frost",
    soundCloudId: "1954667759",
    description: "A fusion of traditional Gnawa rhythms with modern beats"
  },
  {
    title: "Whispers X Yeke Yeke",
    soundCloudId: "1809750303",
    description: "Blending Moroccan whispers with West African melodies"
  },
  {
    title: "Yibona X Rise",
    soundCloudId: "1801258644",
    description: "A journey through the Sahara's musical landscape"
  }
];

function Music() {
  return (
    <div 
      className="min-h-screen bg-[#1a0f0f]"
      style={{
        backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B45309' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
      }}
    >
      <div 
        className="max-w-7xl mx-auto px-4 py-16"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23B45309' fill-opacity='0.03'%3E%3Cpath d='M50 50l20-20h-40l20 20zm0 0l20 20h-40l20-20z'/%3E%3C/g%3E%3C/svg%3E')"
        }}
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-red-600 text-transparent bg-clip-text">
            Latest Tracks
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-red-600 mx-auto mb-6"></div>
          <p className="text-amber-200 text-lg max-w-2xl mx-auto">
            Experience the fusion of North African rhythms and modern beats
          </p>
        </div>

        {/* Tracks Section */}
        <div className="space-y-8">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-amber-900/30 to-red-900/20 rounded-2xl p-8 border border-amber-900/20 backdrop-blur-sm group hover:from-amber-900/40 hover:to-red-900/30 transition-all duration-300"
              style={{
                backgroundImage: "url('data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23B45309' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M0 20L20 0v20L0 40z'/%3E%3Cpath d='M20 20L40 0v20L20 40z'/%3E%3C/g%3E%3C/svg%3E')"
              }}
            >
              {/* Track Info */}
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-amber-100 mb-2">
                  {track.title}
                </h2>
                <p className="text-amber-300/60 text-sm mb-4">
                  {track.description}
                </p>
                <div className="flex items-center gap-4 text-amber-400/60">
                  <div className="flex items-center gap-1">
                    <Volume2 className="w-4 h-4" />
                    <span className="text-sm">Stream Now</span>
                  </div>
                </div>
              </div>

              {/* SoundCloud Player */}
              <div className="rounded-xl overflow-hidden bg-black/40 shadow-lg">
                <iframe
                  width="100%"
                  height="160"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${track.soundCloudId}&amp;color=%23B45309&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=false`}
                  className="rounded-xl"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-500/5 to-red-500/5 rounded-tr-2xl -z-10"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-amber-500/5 to-red-500/5 rounded-bl-2xl -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Music;