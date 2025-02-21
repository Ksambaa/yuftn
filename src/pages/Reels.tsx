import { useEffect } from 'react';
import { ExternalLink, Music2 } from 'lucide-react';

function Reels() {
  useEffect(() => {
    const tiktokScript = document.createElement('script');
    tiktokScript.src = 'https://www.tiktok.com/embed.js';
    tiktokScript.async = true;
    document.body.appendChild(tiktokScript);

    return () => {
      if (document.body.contains(tiktokScript)) {
        document.body.removeChild(tiktokScript);
      }
    };
  }, []);

  return (
    <div 
      className="min-h-screen bg-[#1a0f0f]"
      style={{
        backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B45309' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <Music2 className="w-16 h-16 mx-auto text-amber-500 mb-4" />
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-red-600 text-transparent bg-clip-text">
              Latest Performances
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-red-600 mx-auto mb-6"></div>
          </div>
          <p className="text-amber-200/80 text-lg max-w-2xl mx-auto">
            Journey through the rhythms of North Africa and beyond
          </p>
        </div>

        {/* TikTok Videos Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* First TikTok */}
          <div 
            className="relative bg-gradient-to-br from-amber-900/30 to-red-900/20 p-8 rounded-2xl backdrop-blur-sm border border-amber-900/20"
            style={{
              backgroundImage: "url('data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23B45309' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M0 20L20 0v20L0 40z'/%3E%3Cpath d='M20 20L40 0v20L20 40z'/%3E%3C/g%3E%3C/svg%3E')"
            }}
          >
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-amber-100 mb-2">Festival Highlights</h2>
              <a 
                href="https://www.tiktok.com/@yuftn_music" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-amber-500 hover:text-amber-400 transition-colors"
              >
                @yuftn_music
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <blockquote 
                className="tiktok-embed"
                cite="https://www.tiktok.com/@yuftn_music/video/7439385257457028374"
                data-video-id="7439385257457028374"
                style={{
                  maxWidth: '605px',
                  minWidth: '325px'
                }}
              >
                <section></section>
              </blockquote>
            </div>
            {/* Decorative corner elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-500/5 to-red-500/5 rounded-tr-2xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-amber-500/5 to-red-500/5 rounded-bl-2xl -z-10"></div>
          </div>

          {/* Second TikTok */}
          <div 
            className="relative bg-gradient-to-br from-amber-900/30 to-red-900/20 p-8 rounded-2xl backdrop-blur-sm border border-amber-900/20"
            style={{
              backgroundImage: "url('data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23B45309' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M0 20L20 0v20L0 40z'/%3E%3Cpath d='M20 20L40 0v20L20 40z'/%3E%3C/g%3E%3C/svg%3E')"
            }}
          >
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-amber-100 mb-2">Again and Again</h2>
              <a 
                href="https://www.tiktok.com/@yuftn_music" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-amber-500 hover:text-amber-400 transition-colors"
              >
                @yuftn_music
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <blockquote 
                className="tiktok-embed" 
                cite="https://www.tiktok.com/@yuftn_music/video/7445782037895630102" 
                data-video-id="7445782037895630102"
                style={{
                  maxWidth: '605px',
                  minWidth: '325px'
                }}
              >
                <section></section>
              </blockquote>
            </div>
            {/* Decorative corner elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-500/5 to-red-500/5 rounded-tr-2xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-amber-500/5 to-red-500/5 rounded-bl-2xl -z-10"></div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-16">
          <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-amber-500 to-red-600">
            <a 
              href="https://www.tiktok.com/@yuftn_music"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-[#1a0f0f] rounded-full text-amber-100 font-medium hover:bg-amber-950 transition-all transform hover:scale-105"
            >
              Follow for More
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reels;